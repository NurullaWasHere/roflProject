import { Router } from "express";
import PostService from "./PostService";
import PostController from "./PostController";
import reviewService from "../ReviewModule/ReviewService";

export default class PostRouter {
  public readonly path = "/posts";
  public router: Router;
  private controller: PostController;

  constructor() {
    this.router = Router();
    this.controller = new PostController(PostService, reviewService);
    this.init();
  }

  // Initialize the Post controller routes pathes.
  private init() {
    this.router.post("/", this.controller.createPost);
    this.router.get("/", this.controller.getPosts);
    this.router.get("/:id", this.controller.getPost);
    this.router.post("/createReview", this.controller.createReview);
  }
}