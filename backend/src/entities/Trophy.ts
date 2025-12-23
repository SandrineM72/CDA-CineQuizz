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
import { User } from "./User";
import { Reward } from "./Reward";

@ObjectType()
@Entity()
export class Trophy extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => [User])
    @JoinTable()
    @ManyToMany(() => User)
    users: User[];

    @Field(() => [Reward])
    @JoinTable()
    @ManyToMany(() => Reward)
    rewards: Reward[];

}