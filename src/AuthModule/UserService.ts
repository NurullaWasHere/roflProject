import { IUserCreateDTO } from "./AuthModule.types";
import UserModel, {IUserModel} from "./UserModel";
import JWTService from "./JWTService";

export default class UserService {
  
  public async createUser(userDTO: IUserCreateDTO) {
    const { name, email, password } = userDTO;
    try {
      const user = await UserModel.create({ name, email, password });
      return user;
    } catch (error) {
      console.log('Can not create user', error);
      return null
    }
  }

  public async loginUser(email: string, password: string): Promise<{user: IUserModel, token: string}> {
    try {
      const user = await UserModel.findOne({ where: { email, password } });
      if(!user) {
        console.log('User not found');
        return null;
      } 
      return {user, token: JWTService.generateToken({id: user.id})};
    } catch (error) {
      console.log('Can not login user', error);
      return null
    }
  }

  public async getUser(id: number): Promise<IUserModel> {
    try {
      const user = await UserModel.findOne({ where: { id } });
      return user;
    } catch (error) {
      console.log('Can not get user', error);
      return null
    }
  }

  public async getUsers(): Promise<IUserModel[]> {
    try {
      const users = await UserModel.findAll();
      return users;
    } catch (error) {
      console.log('Can not get users', error);
      return null
    }
  }

  public async updateUser(id: number, userDTO: IUserCreateDTO): Promise<IUserModel> {
    try {
      const { name, email, password } = userDTO;
      const user = await UserModel.findOne({ where: { id } });
      if(!user) {
        console.log('User not found');
        return null;
      }
      await user.update({ name, email, password });
      return user;
    } catch (error) {
      console.log('Can not update user', error);
      return null
    }
  }

  public async deleteUser(id: number): Promise<IUserModel> {
    try {
      const user = await UserModel.findOne({ where: { id } });
      if(!user) {
        console.log('User not found');
        return null;
      }
      await user.destroy();
      return user;
    } catch (error) {
      console.log('Can not delete user', error);
      return null
    }
  }

  public async logoutUser(email: string, token: string): Promise<IUserModel> {
    try {
      const user = await UserModel.findOne({ where: { email } });
      if(!user) {
        console.log('User not found');
        return null;
      }
      return JWTService.decodeToken(token);
    } catch (error) {
      console.log('Can not logout user', error);
      return null
    }
  }
}