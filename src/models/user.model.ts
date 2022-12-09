import { PrismaClient } from "@prisma/client";
import { IUser, IUserModel } from "../interfaces/user.interface";

class UserModel implements IUserModel {
  constructor(private readonly prismaClient: PrismaClient["users"]) {
    this.prismaClient = prismaClient;
  }

  public async getAllUsers(): Promise<IUser[]> {
    return await this.prismaClient.findMany();
  }

  public async getUserById(id: number): Promise<IUser> {
    throw new Error("Method not implemented.");
  }

  public async getUserByUuid(uuid: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }

  public async getUserByToken(token: string): Promise<IUser[]> {
    throw new Error("Method not implemented.");
  }

  public async getUserByEmail(email: string): Promise<IUser[]> {
    throw new Error("Method not implemented.");
  }

  public async userLogin(user: IUser): Promise<IUser> {
    throw new Error("Method not implemented.");
  }

  public async userLogout(user: IUser): Promise<IUser> {
    throw new Error("Method not implemented.");
  }

  public async createUser(user: IUser): Promise<IUser> {
    return await this.prismaClient.create({
      data: {
        username: user.username,
        email: user.email,
        password: user.password,
        refreshToken: user.refreshToken,
      },
    });
  }

  public async editUser(id: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }

  public async deleteUser(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { UserModel };
