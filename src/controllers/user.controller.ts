import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IUser, IUserService } from "../interfaces/user.interface";

class UserController {
  constructor(private service: IUserService) {
    this.service = service;
  }

  public getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.service.getAllUsers();
      return res.status(StatusCodes.OK).json(users);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  public async getUserById(id: number): Promise<IUser> {
    return await this.service.getUserById(id);
  }

  public async getUserByUuid(uuid: string): Promise<IUser> {
    return await this.service.getUserByUuid(uuid);
  }

  public async getUserByToken(token: string): Promise<IUser[]> {
    return await this.service.getUserByToken(token);
  }

  public async getUserByEmail(email: string): Promise<IUser[]> {
    return await this.service.getUserByEmail(email);
  }

  public async userLogin(user: IUser): Promise<IUser> {
    return await this.service.userLogin(user);
  }

  public async userLogout(user: IUser): Promise<IUser> {
    return await this.service.userLogout(user);
  }

  public createUser = async (req: Request, res: Response) => {
    try {
      const user = await this.service.createUser(req.body);
      return res.status(StatusCodes.CREATED).json(user);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  public async editUser(id: string): Promise<IUser> {
    return await this.service.editUser(id);
  }

  public async deleteUser(id: string): Promise<void> {
    return await this.service.deleteUser(id);
  }
}

export { UserController };
