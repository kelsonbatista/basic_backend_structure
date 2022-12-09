interface IUser {
  id: number;
  uuid: string;
  username: string;
  email: string;
  role: string;
  password: string;
  refreshToken?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserService {
  getAllUsers(): Promise<IUser[]>;
  getUserById(id: number): Promise<IUser>;
  getUserByUuid(uuid: string): Promise<IUser>;
  getUserByToken(token: string): Promise<IUser[]>;
  getUserByEmail(email: string): Promise<IUser[]>;
  userLogin(user: IUser): Promise<IUser>;
  userLogout(user: IUser): Promise<IUser>;
  createUser(user: IUser): Promise<IUser>;
  editUser(id: string): Promise<IUser>;
  deleteUser(id: string): Promise<void>;
}

interface IUserModel {
  getAllUsers(): Promise<IUser[]>;
  getUserById(id: number): Promise<IUser>;
  getUserByUuid(uuid: string): Promise<IUser>;
  getUserByToken(token: string): Promise<IUser[]>;
  getUserByEmail(email: string): Promise<IUser[]>;
  userLogin(user: IUser): Promise<IUser>;
  userLogout(user: IUser): Promise<IUser>;
  createUser(user: IUser): Promise<IUser>;
  editUser(id: string): Promise<IUser>;
  deleteUser(id: string): Promise<void>;
}

export { IUser, IUserService, IUserModel };
