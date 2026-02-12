import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn
} from "typeorm";
import { Quiz } from "./Quiz";

@ObjectType()
@Entity()
export class Level extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ type: "text", nullable: false })
	name: string;

	@Field(() => [Quiz])
	@OneToMany(
		() => Quiz,
		(quiz) => quiz.level,
	)
	quizzes: Quiz[];
}
