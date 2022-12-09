import { IUser, IUserModel, IUserService } from "../interfaces/user.interface";

class UserService implements IUserService {
  constructor(private model: IUserModel) {
    this.model = model;
  }

  public async getAllUsers(): Promise<IUser[]> {
    return await this.model.getAllUsers();
  }

  public async getUserById(id: number): Promise<IUser> {
    return await this.model.getUserById(id);
  }

  public async getUserByUuid(uuid: string): Promise<IUser> {
    return await this.model.getUserByUuid(uuid);
  }

  public async getUserByToken(token: string): Promise<IUser[]> {
    return await this.model.getUserByToken(token);
  }

  public async getUserByEmail(email: string): Promise<IUser[]> {
    return await this.model.getUserByEmail(email);
  }

  public async userLogin(user: IUser): Promise<IUser> {
    return await this.model.userLogin(user);
  }

  public async userLogout(user: IUser): Promise<IUser> {
    return await this.model.userLogout(user);
  }

  public async createUser(user: IUser): Promise<IUser> {
    return await this.model.createUser(user);
  }

  public async editUser(id: string): Promise<IUser> {
    return await this.model.editUser(id);
  }

  public async deleteUser(id: string): Promise<void> {
    return await this.model.deleteUser(id);
  }
}

export { UserService };
