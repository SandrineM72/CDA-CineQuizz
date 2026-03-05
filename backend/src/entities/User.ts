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
import { Attempt } from "./Attempt";
import { IsEmail, IsStrongPassword } from "class-validator";
import { IsBoolean, IsOptional, IsUrl, Length } from "class-validator";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({type: "text", unique: true })
	email: string;

	@Field()
	@Column({ type: "text", unique: true })
	pseudo: string;

	@Column("text")
	hashedPassword: string;

	@Field({ nullable: true })
	@Column({ type: "text", nullable: true })
	avatar?: string;

	@Field()
	@Column({default: false})
	is_admin: boolean;

	@Field()
	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	last_login: Date;

	@Field()
	@CreateDateColumn()
	created_at: Date;

	@Field()
	@UpdateDateColumn()
	updated_at: Date;

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
  pseudo: string;

  @Field({nullable: true})
  avatar?: string;
}

@InputType()
export class LoginInput {
  @Field()
  pseudo : string;

  @Field()
  @IsStrongPassword({}, {message: "Le mot de passe doit contenir un minimum de 8 caractères, dont une minuscule, une majuscule, un chiffre et un caractère spécial."},)
  password: string;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  pseudo?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  @IsEmail({}, {message: "L'Email doit être valide."})
  email?: string;

	@Field({ nullable: true })
	@IsOptional()
	password?: string;

  @Field({ nullable: true })
  @IsStrongPassword({}, {message: "Le nouveau mot de passe doit contenir un minimum de 8 caractères, dont une minuscule, une majuscule, un chiffre et un caractère spécial."},)
  newPassword?: string;
}

@InputType()
export class AdminUpdateUserInput {
	@Field()
	@Length(3, 20, { message: "Le pseudo doit contenir entre 3 et 20 caractères" })
	pseudo: string;

	@Field()
	@IsEmail({}, { message: "L'email doit être valide" })
	email: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsUrl()
	avatar?: string;

	@Field()
	@IsBoolean()
	is_admin: boolean;
}


