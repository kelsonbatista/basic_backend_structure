import { PrismaClient } from "@prisma/client";
import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";

class UserFactory {
  constructor() {}

  public controller() {
    const prisma = new PrismaClient();
    const model = new UserModel(prisma.users);
    const service = new UserService(model);
    const controller = new UserController(service);
    return controller;
  }
}

export { UserFactory };
