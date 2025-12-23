import { Field, Int, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Reward extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column({ type: "text" })
	image: string;

	@Field(() => [User])
	@JoinTable()
	@ManyToMany(() => User)
	users: User[];
}
