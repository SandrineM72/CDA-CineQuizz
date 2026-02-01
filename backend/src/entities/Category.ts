import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn
} from "typeorm";
import { Quiz } from "./Quiz";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column("text")  // nullable:false par défaut
	name: string;

	@Field(() => [Quiz])
	@OneToMany(() => Quiz, quiz => quiz.category)
	quizzes: Quiz[];
}
