import PostModel, {IPostModel} from "./PostModel";
import { ICreatePostDTO } from "./PostTypes";

export class PostSerivce {

  public async createPost(postBody: ICreatePostDTO): Promise<IPostModel> {
    try {
      const newPost = await PostModel.create(postBody);
      return newPost;
    } catch (error) {
      console.log('Can not create post', error);
      return null;
    }
  }
  
  public async getPosts():Promise<IPostModel[]> {
    try {
      return await PostModel.findAll();
    } catch (error) {
      console.log('Can not get posts', error);
      return null;
    }
  }

  public async getPost(id: number): Promise<IPostModel> {
    try {
      return await PostModel.findOne({ where: { id } });
    } catch (error) {
      console.log('Can not get post', error);
      return null;
    }
  }

  public async updatePost(id: number, postBody: ICreatePostDTO): Promise<IPostModel> {
    try {
      const { name, description, image } = postBody;
      const postToUpdate = await PostModel.findOne({ where: { id } });
      if(!postToUpdate) {
        console.log('Post not found');
        return null;
      }
      await postToUpdate.update({ name, description, image });
      return postToUpdate;
    } catch (error) {
      console.log('Can not update post', error);
      return null;
    }
  }

  public async deletePost(id: number): Promise<IPostModel> {
    try {
      const postToDelete = await PostModel.findOne({ where: { id } });
      if(!postToDelete) {
        console.log('Post not found');
        return null;
      }
      await postToDelete.destroy();
      return postToDelete;
    } catch (error) {
      console.log('Can not delete post', error);
      return null;
    }
  }
}

const service = new PostSerivce();
export default service;