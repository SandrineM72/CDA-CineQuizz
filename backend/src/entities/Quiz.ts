import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Theme } from "./Theme";
import { Level } from "./Level";
import { Question } from "./Question";
import { User } from "./User";
import { Attempt } from "./Attempt";
import { ObjectId } from "../types";
import { IsBoolean, IsUrl, Length, Min } from "class-validator";

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({type: "text"})
	title: string;

	@Field()
	@Column({type: "text"})
	description: string;

	@Field()
	@Column({ type: "text"})
	image: string;

	@Field()
	@Column()
	time_limit: number;
	
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

	@Field(()=> Level)
	@ManyToOne(
		() => Level,
		(level) => level.quizzes,
	)
	level: Level;

	@Field(() => Theme)
	@ManyToOne(
		() => Theme,
		(theme) => theme.quizzes,
	)
	theme: Theme;

	@Field(() => [Question], { nullable: true })
	@OneToMany(
		() => Question,
		(question) => question.quiz,
		{cascade: true, onDelete: "CASCADE"} 
	)
	questions?: Question[];

	@OneToMany(
		() => Attempt,
		(attempt) => attempt.quiz,
		{cascade: true, onDelete: "CASCADE"}
	)
	attempts: Attempt[];

	// one to many to keep history of the number of likes carried by the association
	@Field(() => [User])
	@ManyToMany(() => User, user => user.liked_quizzes, {cascade: true, onDelete: "CASCADE"})
	liked_by: User[];
}

@InputType()
export class UpdateQuizInput {
	@Field()
	@Length(5, 100, { message: "Le titre doit contenir entre 5 et 100 caractères" })
	title: string;

	@Field()
	@Length(5, 100, { message: "La description doit contenir entre 5 et 100 caractères" })
	description: string;

	@Field()
	@Min(0, { message: "la limite de temps doit être positif" })
	time_limit: number

	@Field()
	@IsUrl()
	image: string;

	@Field()
	@IsBoolean()
	is_public: boolean;

	@Field()
	@IsBoolean()
	is_draft: boolean;

	@Field(() => ObjectId)
	theme: ObjectId;

	@Field(() => ObjectId)
	level: ObjectId;

}
