import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Reward } from "./Reward";
import { Quiz } from "./Quiz";

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
	age_range: string;

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

	@Field(() => [Attempt])
	@JoinTable()
	@ManyToMany(() => Attempt)
	attempts: Attempt[];

  @Field(() => [Reward])
	@JoinTable()
	@ManyToMany(() => Reward)
	rewards: Reward[];

  @Field(() => [Quiz])
	@JoinTable()
	@ManyToMany(() => Quiz)
	quizzes: Quiz[];
}
