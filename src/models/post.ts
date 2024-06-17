import {Entity,Column,PrimaryGeneratedColumn ,ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {User} from "./user" 

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn()
    id!: number 

    @Column()
    title!: string

    @Column()
    content!: string

    @ManyToOne(()=> User,user => user.posts)
    author!: User

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}