import { ReviewService } from "../ReviewModule/ReviewService";
import { PostSerivce } from "./PostService";
import { Request, Response } from "express";
import PostsIterator from "../Iterator/PostsIterator";

export default class PostController {
  constructor(private service: PostSerivce, private reviewService: ReviewService) {
    this.createPost = this.createPost.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.getPost = this.getPost.bind(this);
    this.createReview = this.createReview.bind(this);
  }

  public async createPost(req: Request, res: Response) {
    const post = await this.service.createPost(req.body);
    if(post) {
      res.status(200).json({post});
    } else {
      res.status(400).json({error: 'Can not create post'});
    }
  }

  public async getPosts(req: Request, res: Response) {
    const posts = await this.service.getPosts();
    if(posts) {
      res.status(200).json({posts});
    } else {
      res.status(400).json({error: 'Can not get posts'});
    }
  }

  public async getPost(req: Request, res: Response) {
    const post = await this.service.getPost(Number(req.params.id));
    const reviews = await this.reviewService.getReviewsForPost(Number(req.params.id));
    if(post) {
      res.status(200).json({post, reviews});
    } else {
      res.status(400).json({error: 'Can not get post'});
    }
  }

  public async createReview(req: Request, res: Response) {
    const review = await this.reviewService.createReviewForPost(req.body.reviewText, Number(req.body.id));
    if(review) {
      res.status(200).json({review});
    } else {
      res.status(400).json({error: 'Can not create review'});
    }
  }

  public async deletePost(req: Request, res: Response) {
    const post = await this.service.deletePost(Number(req.params.id));
    if(post) {
      res.status(200).json({post});
    } else {
      res.status(400).json({error: 'Can not delete post'});
    }
  }

  public async updatePost(req: Request, res: Response) {
    const post = await this.service.updatePost(Number(req.params.id), req.body);
    if(post) {
      res.status(200).json({post});
    } else {
      res.status(400).json({error: 'Can not update post'});
    }
  }
}