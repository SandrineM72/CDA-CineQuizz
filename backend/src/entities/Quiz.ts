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
	age_range: Enumerator;

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

	@ManyToOne(
		() => Decade,
		(decade) => decade.quizzes,
	)
	decade: Decade;

	@ManyToOne(
		() => Category,
		(category) => category.quizzes,
	)
	category: Category;

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

	// one to many pour garder l'historique du nombre de like portées par l'association
	@Field(() => [User])
	@JoinTable()
	@ManyToMany(() => User)
	liked_by: User[];
}
