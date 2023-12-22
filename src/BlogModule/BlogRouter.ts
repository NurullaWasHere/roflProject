import { Router } from "express";
import BlogController from "./BlogController";
import BlogService from "./BlogService";
import reviewService from "../ReviewModule/ReviewService";

export default class BlogRouter {
  public readonly path = "/blogs";
  public router: Router;
  private controller: BlogController;

  constructor() {
    this.router = Router();
    this.controller = new BlogController(BlogService, reviewService);
    this.init();
  }

  // Initialize the Blog controller routes pathes.
  private init() {
    this.router.post("/", this.controller.createBlog);
    this.router.get("/", this.controller.getBlogs);
    this.router.get("/:id", this.controller.getBlog);
    this.router.post("/:id/createReview", this.controller.createReview);
  }
}