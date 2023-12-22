import ReviewModel from "./ReviewModel";
import PostModel from "../PostModule/PostModel";
import BlogModel from "../BlogModule/BlodModel";

export class ReviewService {
  
  public async createReviewForPost(reviewText: string, postId: number) {
    try {
      const post = await PostModel.findOne({where: {id: postId}});
      const newReview = await ReviewModel.create({reviewText});
      await post.addReview(newReview);
      return newReview;
    } catch (error) {
      console.log('Can not create review');
      return null
    }
  }

  public async getReviewsForPost(postId: number) {
    try {
      const reviews = await ReviewModel.findAll({where: {postId}});
      return reviews;
    } catch (error) {
      console.log('Can not get reviews', error);
      return null
    }
  }

  public  async createReviewForBlog(reviewText: string, blogId: number) {
    try {
      const blog = await BlogModel.findOne({where: {id: blogId}});
      const newReview = await ReviewModel.create({reviewText});
      await blog.addReview(newReview);
      return newReview;
    } catch (error) {
      console.log('Can not create review', error);
      return null
    }
  }

  public async getReviewsForBlog(blogId: number) {
    try {
      const reviews = await ReviewModel.findAll({where: {blogId}});
      return reviews;
    } catch (error) {
      console.log('Can not get reviews', error);
      return null
    }
  }

  public async createReviewForUser(reviewText: string, userId: number) {
    try {
      const newReview = await ReviewModel.create({reviewText});
      return newReview;
    } catch (error) {
      console.log('Can not create review', error);
      return null
    }
  }

  public async deleteReview(id: number) {
    try {
      const reviewToDelete = await ReviewModel.findOne({where: {id}});
      if(!reviewToDelete) {
        console.log('Review not found');
        return null;
      }
      await reviewToDelete.destroy();
      return reviewToDelete;
    } catch (error) {
      console.log('Can not delete review', error);
      return null
    }
  
  }
}

const reviewService = new ReviewService();
export default reviewService;