import { Router } from "express";
import UserService from "./UserService";
import AuthController from "./AuthController";

export default class AuthRouter {
  public readonly path = "/auth";
  public router: Router;
  private controller: AuthController;

  constructor() {
    this.router = Router();
    this.controller = new AuthController(new UserService());
    this.init();
  }

  private init() {
    this.router.post("/register", this.controller.registerUser);
    this.router.post("/login", this.controller.loginUser);
  }
}