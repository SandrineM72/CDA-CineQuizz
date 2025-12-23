import { Field, Int, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Decade } from "./Decade";
import { Question } from "./Question";
import { User } from "./User";

@ObjectType()
@Entity()
export class Quiz extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({type : "text", nullable : false})
    title: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    image: string;

    @Field()
    @Column()
    age_range: string;

    @Field()
    @Column()
    time_limit: number;

    @Field()
    @Column()
    is_public: boolean;

    @Field()
    @Column()
    is_draft: boolean;

    @Field()
    @CreateDateColumn()
    created_at: Date;

    @Field()
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(
        () => Decade,
        (decade): decade.quizzes,
        )
        decade: Decade;

    @ManyToOne(
        () => Category,
        (category): category.quizzes,
        )
        category: Category;
    
    @OneToMany(
        () => Question,
        (question): question.quiz,
        )
        questions: Question[];
    
    @Field(() => [User])
    @JoinTable()
    @ManyToMany(() => User)
    users: User[];

}
