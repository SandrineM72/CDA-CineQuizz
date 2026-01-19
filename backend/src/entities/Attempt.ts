import { Field, InputType, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import { Quiz } from "./Quiz";
import { User } from "./User";

@ObjectType()
@Entity()
export class Attempt extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	started_at: Date;

	@Field()
	@Column()
	score: number;

	@Field()
	@Column()
	percentage_success: number;

	@Field()
	@Column({nullable: true})
	finished_at: Date;

	@Field()
	@Column()
	duration: number;

	@Field()
	@Column()
	passed: boolean;

	@Field(() => User)
	@ManyToOne(() => User)
	user: User;

	@Field(() => Quiz)
	@ManyToOne(() => Quiz)
	quiz: Quiz;
}

@InputType()
	export class AnswerInput {
	@Field(() => Int)
	questionId!: number;

	@Field(() => Int)
	choiceId!: number;
}