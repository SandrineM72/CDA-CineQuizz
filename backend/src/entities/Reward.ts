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
	@Column({type: "text"})
	name: string;

	@Field()
	@Column({ type: "text" })
	image: string;

	@Field(() => [User])
	// @JoinTable() -> pas de déco TypeORM de ce côté, uniquement dans User.ts
	@ManyToMany(() => User)
	users: User[];
}
