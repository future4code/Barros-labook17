import { UserCreateDTO } from "../model/UserDTO";

export interface UseRepository{

    create ({ id, name, email, password }: UserCreateDTO):Promise<void>

}