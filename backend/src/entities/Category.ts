import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	// CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	// UpdateDateColumn,
} from "typeorm";
import { Quiz } from "./Quiz";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ type: "text", nullable: false })
	name: string;

	@OneToMany(
		() => Quiz,
		(quiz) => quiz.category,
	)
	quizzes: Quiz[];
}
