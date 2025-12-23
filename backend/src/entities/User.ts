import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Reward } from "./Reward";
import { Quiz } from "./Quiz";
import { Attempt } from "./Attempt";
import type { AgeRange } from "../types";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ unique: true })
	email: string;

	@Field()
	@Column({ unique: true })
	pseudo: string;

	@Field()
	@Column()
	age_range: AgeRange ;

	@Field()
	@Column()
	password: string;

	@Field()
	@Column({ type: "text", nullable: true })
	avatar: string;

	@Field()
	@Column()
	is_admin: boolean;

	@Field()
	@CreateDateColumn()
	created_at: Date;

	@Field()
	@UpdateDateColumn()
	updated_at: Date;

	// one to many pour to keep the data's history carried by the association 
	@Field(() => [Attempt])
  @OneToMany(
		() => Attempt,
		(attempt) => attempt.user,
	)
	attempts: Attempt[];

	@Field(() => [Reward])
	@JoinTable()
	@ManyToMany(() => Reward)
	won_rewards: Reward[];

	@Field(() => [Quiz])
	@JoinTable()
	@ManyToMany(() => Quiz)
	liked_quizzes: Quiz[];
}
