import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import { Question } from "./Question";

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
	)
	question: Question;
}
