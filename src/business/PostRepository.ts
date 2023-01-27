import { PostCreateDTO } from "../model/PostDTO";

export interface PostRepository{
    
    create ({ id, photo, description, type, authorId }: PostCreateDTO):Promise<void>

    getAll (id:string):Promise<any[]>
}