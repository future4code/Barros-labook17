import { CustomError } from "../error/CustomError"
import { UserCreateDTO, UserInputDTO } from "../model/UserDTO"
import { generateId } from "../services/idGenerator";
import { UseRepository } from "./UserRepository";

export class UserBusiness {
  constructor(private  userDatabase:UseRepository){}

    createUser = async ({ name, email, password }: UserInputDTO) => {
        try {
            if (!name || !email || !password) {
                throw new CustomError(400, "Body invalid! name or email or password.");
            }
            if (password.length <= 6) {
                throw new CustomError(400, "Password must be at least 7 characters");
            }
           
            const id = generateId()

            const insertUser: UserCreateDTO = {
                id: id,
                name: name,
                email: email,
                password: password
            }

            await this.userDatabase.create(insertUser)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}