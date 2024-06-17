import { DeleteResult, Repository } from 'typeorm';
import { Post } from '../models/post';
import { AppDataSource } from '../config/database-config';
import { User } from '../models/user';
import UserService from './user-service';

class PostService {

    private postRepository: Repository<Post>;
    private userService: UserService;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post);
        this.userService = new UserService();
    }

    async createPost(title: string, content: string, authorId: number): Promise<Post | undefined> {
        const user:User|undefined = await this.userService.getUserById(authorId);

        if(!user){
            throw new Error('No such Author exist!');
        }

        const newPost:Post = this.postRepository.create({
            title,
            content,
            author:user
        });

        return await this.postRepository.save(newPost);
    }

    async getAllPosts(): Promise<Post[]> {
        return await this.postRepository.find();
    }

    async getPostById(id: number): Promise<Post | undefined> {
        const post:Post|null = await this.postRepository.findOneBy({id});
        if(!post){
            return undefined;
        }
        return post;
    }

    async updatePost(id: number, title: string|undefined, content: string|undefined): Promise<Post | undefined> {

        const postToUpdate: Post|null = await this.postRepository.findOneBy({id});

        if (!postToUpdate) {
            return undefined;
        }
        if(title){
            postToUpdate.title = title;
        }
        if(content){
            postToUpdate.content = content;
        }

        return await this.postRepository.save(postToUpdate);
    }

    async deletePost(id: number): Promise<boolean> {
        const deleteResult: DeleteResult = await this.postRepository.delete(id);
        return !!deleteResult.affected;
    }
}

export default PostService;
