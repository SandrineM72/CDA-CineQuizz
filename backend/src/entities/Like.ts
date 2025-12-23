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
import { Quiz } from "./Quiz";

@ObjectType()
@Entity()
export class Like extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => [User])
    @JoinTable()
    @ManyToMany(() => User)
    users: User[];

    @Field(() => [Quiz])
    @JoinTable()
    @ManyToMany(() => Quiz)
    quizzes: Quiz[];

}