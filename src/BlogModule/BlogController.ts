import { ReviewService } from './../ReviewModule/ReviewService';
import { BlogService } from "./BlogService";
import { Request, Response } from "express";
import ResponseBodyAdapter from '../Adapter/ResponseBodyAdapter';

export default class BlogController {
  constructor(private blogService: BlogService, private reviewService: ReviewService) {
    this.createBlog = this.createBlog.bind(this);
    this.getBlogs = this.getBlogs.bind(this);
    this.getBlog = this.getBlog.bind(this);
    this.createReview = this.createReview.bind(this);
  }

  public async createBlog(req: Request, res: Response) {
    const {blogTitle, description, image} = req.body;
    const blog = await this.blogService.createBlog({blogTitle, description, image});
    return ResponseBodyAdapter.adapt(blog, res);
  }

  public async getBlogs(req: Request, res: Response) {
    const blogs = await this.blogService.getBlogs();
    return ResponseBodyAdapter.adapt(blogs, res);
  }

  public async getBlog(req: Request, res: Response) {
    const {id} = req.params;
    const blog = await this.blogService.getBlog(Number(id));
    const reviews = await this.reviewService.getReviewsForBlog(Number(id));
    return ResponseBodyAdapter.adapt({blog, reviews}, res);
  }

  public async createReview(req: Request, res: Response) {
    const review = await this.reviewService.createReviewForBlog(req.body.reviewText, req.body.id);
    return ResponseBodyAdapter.adapt(review, res);
  }

  public async deleteBlog(req: Request, res: Response) {
    const blog = await this.blogService.deleteBlog(Number(req.params.id));
    return ResponseBodyAdapter.adapt(blog, res);
  }

  public async updateBlog(req: Request, res: Response) {
    const {blogTitle, description, image} = req.body;
    const blog = await this.blogService.updateBlog(Number(req.params.id), {blogTitle, description, image});
    return ResponseBodyAdapter.adapt(blog, res);
  }
}