import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn
} from "typeorm";
import { Choice } from "./Choice";
import { Quiz } from "./Quiz";
import { MinLength } from "class-validator";

@ObjectType()
@Entity()
export class Question extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ type: "text", nullable: false })
	title: string;

	@Field(() => [Choice])
	@OneToMany(
		() => Choice,
		(choice) => choice.question,
		{cascade:true, onDelete:"CASCADE"}
	)
	choices: Choice[];

	@Field(() => Quiz)
	@ManyToOne(
		() => Quiz,
		(quiz) => quiz.questions, { onDelete: "CASCADE"}
	)
	quiz: Quiz;
}

@InputType()
export class UpdateQuestionInput {
@Field()
@MinLength(5, {message: "La question doit contenir au moins 10 caractères" })
title: string;
}
