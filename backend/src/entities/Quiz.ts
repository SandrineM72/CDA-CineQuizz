import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Decade } from "./Decade";
import { Question } from "./Question";
import { User } from "./User";
import { Attempt } from "./Attempt";
import type { AgeRange } from "../types";

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ nullable: false })
	title: string;

	@Field()
	@Column()
	description?: string;

	@Field()
	@Column({ type: "text" })
	image: string;

	@Field()
	@Column()
	age_range: AgeRange;

	@Field()
	@Column()
	time_limit: number;
	// second

	@Field()
	@Column()
	is_public: boolean;

	@Field()
	@Column()
	is_draft: boolean;

	@Field()
	@CreateDateColumn()
	created_at: Date;

	@Field()
	@UpdateDateColumn()
	updated_at: Date;

	@Field(()=> Decade)
	@ManyToOne(
		() => Decade,
		(decade) => decade.quizzes,
	)
	decade: Decade;

	@Field(() => Category)
	@ManyToOne(
		() => Category,
		(category) => category.quizzes,
	)
	category: Category;

	@Field(() => [Question])
	@OneToMany(
		() => Question,
		(question) => question.quiz,
	)
	questions: Question[];

	@OneToMany(
		() => Attempt,
		(attempt) => attempt.quiz,
	)
	attempts: Attempt[];

	// one to many to keep history of the number of likes carried by the association
	@Field(() => [User])
	@JoinTable()
	@ManyToMany(() => User)
	liked_by: User[];
}
