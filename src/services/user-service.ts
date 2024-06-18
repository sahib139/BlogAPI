import {User} from '../models/user';
import { AppDataSource } from '../config/database-config';
import { Repository } from 'typeorm';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
    private userRepository: Repository<User>;
    
    constructor(){
        this.userRepository = AppDataSource.getRepository(User);  
    }

    async getUserById(id:number):Promise<User|undefined>{
        
        const user:User|null = await this.userRepository.findOneBy({id});

        if(!user){
            return undefined;
        }
        return user;
    }

    async signup(username: string, email: string, password: string): Promise<User> {
        
        const existingUser:User|null = await this.userRepository.findOneBy({ email });
        
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword:string = await bcrypt.hash(password, 10);
        const newUser:User = this.userRepository.create({
            username,
            email,
            password: hashedPassword,
        });

        return this.userRepository.save(newUser);
    }

    async signin(email: string, password: string): Promise<string> {
        const user:User|null = await this.userRepository.findOneBy({ email });
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPasswordValid:boolean = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        const secretKey:string|undefined = process.env.JWT_SECRET;
        let token:string = jwt.sign({id:user.id,email:user.email},secretKey!,{expiresIn:'1d'});
        return token; 
    }

}

export default UserService;