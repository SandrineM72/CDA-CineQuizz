import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import { Question } from "./Question";
import { MinLength } from "class-validator";

@ObjectType()
@Entity()
export class Choice extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ type: "text", nullable: false })
	description: string;

	@Field()
	@Column()
	is_correct: boolean;

	@Field(() => Question)
	@ManyToOne(
		() => Question,
		(question) => question.choices,
		{onDelete:"CASCADE"}
	)
	question: Question;
}

@InputType()
export class UpdateChoiceInput {
	@Field()
	@MinLength(3, {message: "Le choix doit contenir au moins 3 caractères" })
	description: string;
	
	@Field()
	is_correct: boolean;
}



