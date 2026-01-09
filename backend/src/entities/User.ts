import { Field, InputType, Int, ObjectType } from "type-graphql";
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
import { IsEmail, IsStrongPassword } from "class-validator";

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

	@Column()
	hashedPassword: string;

	@Field()
	@Column({ type: "text", nullable: true })
	avatar: string;

	@Field()
	@Column({default: false})
	is_admin: boolean;

	@Field()
	@CreateDateColumn()
	created_at: Date;

	@Field()
	@UpdateDateColumn()
	updated_at: Date;

	// one to many pour to keep the data's history carried by the association 
	@Field(() => [Attempt], {nullable: true})
  @OneToMany(
		() => Attempt,
		(attempt) => attempt.user,
	)
	attempts: Attempt[];

	@Field(() => [Reward], {nullable: true})
	@JoinTable()
	@ManyToMany(() => Reward)
	won_rewards: Reward[];

	@Field(() => [Quiz])
	@JoinTable()
	@ManyToMany(() => Quiz)
	liked_quizzes: Quiz[];
}

@InputType()
export class SignupInput {
  @Field()
  @IsEmail({}, {message: "L'Email doit être valide."})
  email:string;

  @Field()
  @IsStrongPassword({}, {message: "Le mot de passe doit contenir un minimum de 8 caractères, dont une minuscule, une majuscule, un chiffre et un caractère spécial."},)
  password: string;

  @Field()
  pseudo : string;

  @Field()
  age_range : AgeRange;

}

@InputType()
export class LoginInput {

  @Field()
  pseudo : string;

  @Field()
  @IsStrongPassword({}, {message: "Le mot de passe doit contenir un minimum de 8 caractères, dont une minuscule, une majuscule, un chiffre et un caractère spécial."},)
  password: string;

}