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
import { Category } from "./Category";
import { Decade } from "./Decade";
import { Question } from "./Question";
import { User } from "./User";
import { Attempt } from "./Attempt";
import { AgeRange, ObjectId } from "../types";
import { IsBoolean, IsEnum, IsUrl, Length, Min } from "class-validator";

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
	@Column({ type:"enum", enum: AgeRange})
	age_range: AgeRange;

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
		{cascade: true, onDelete: "CASCADE"} 
	)
	questions: Question[];

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

	@Field()
	@IsEnum(AgeRange, {message: "La valeur doit être '-16', '-12' ou 'tous publics'"})
	age_range: AgeRange

	@Field(() => ObjectId)
	category: ObjectId;

	@Field(() => ObjectId)
	decade: ObjectId;

}

