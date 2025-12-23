import { Field, Int, ObjectType } from "type-graphql";
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
	)
	choices: Choice[];

	@Field(() => Quiz)
	@ManyToOne(
		() => Quiz,
		(quiz) => quiz.questions,
	)
	quiz: Quiz;
}
