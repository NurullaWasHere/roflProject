import UserService from "./UserService";
import { Request, Response } from "express";
import ResponseBodyAdapter from "../Adapter/ResponseBodyAdapter";

export default class AuthController {

  constructor(private service: UserService) {
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  public async registerUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const user = await this.service.createUser({ name, email, password });
    return ResponseBodyAdapter.adapt(user, res);
  }

  public async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({error: 'Email and password are required'});
    const response = await this.service.loginUser(email, password);
    return ResponseBodyAdapter.adapt(response, res);
  }

  public async logoutUser(req: Request, res: Response) {
    const { email, token } = req.body;
    if(!email) return res.status(400).json({error: 'Email is required'});
    const response = await this.service.logoutUser(email, token);
    return ResponseBodyAdapter.adapt(response, res);
  }

  public async getUser(req: Request, res: Response) {
    const { email } = req.body;
    if(!email) return res.status(400).json({error: 'Email is required'});
    const response = await this.service.getUser(email);
    return ResponseBodyAdapter.adapt(response, res);
  }

  public async getUsers(req: Request, res: Response) {
    const response = await this.service.getUsers();
    return ResponseBodyAdapter.adapt(response, res);
  }

  public async updateUser(req: Request, res: Response) {
    const { id,name, email, password } = req.body;
    const response = await this.service.updateUser(id, { name, email, password });
    return ResponseBodyAdapter.adapt(response, res);
  }

  public async deleteUser(req: Request, res: Response) {
    const { email } = req.body;
    const response = await this.service.deleteUser(email);
    return ResponseBodyAdapter.adapt(response, res);
  }
}