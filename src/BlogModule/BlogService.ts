import BlogModel, {IBlogModel} from "./BlodModel";
import { IBlogCreateDTO } from "./BlogTypes";

export class BlogService {
  public async createBlog(blog: IBlogCreateDTO) {
    try {
      const newBlog = await BlogModel.create(blog);
      return newBlog;
    } catch (error) {
      console.log('Can not create blog', error);
      return null
    }
  }

  public async getBlogs(): Promise<IBlogModel[]> {
    try {
      const blogs = await BlogModel.findAll();
      return blogs;
    } catch (error) {
      console.log('Can not get blogs', error);
      return null
    }
  }

  public async getBlog(id: number): Promise<IBlogModel> {
    try {
      const blog = await BlogModel.findOne({ where: { id: id } });
      return blog;
    } catch (error) {
      console.log('Can not get blog', error);
      return null    
    }  
  }

  public async updateBlog(id: number, blog: IBlogCreateDTO): Promise<IBlogModel> {
    try {
      const blogToUpdate = await BlogModel.findOne({ where: { id } });
      if(!blogToUpdate) {
        console.log('Blog not found');
        return null;
      }
      await blogToUpdate.update(blog);
      return blogToUpdate;
    } catch (error) {
      console.log('Can not update blog', error);
      return null
    }
  }

  public async deleteBlog(id: number): Promise<IBlogModel> {
    try {
      const blogToDelete = await BlogModel.findOne({ where: { id } });
      if(!blogToDelete) {
        console.log('Blog not found');
        return null;
      }
      await blogToDelete.destroy();
      return blogToDelete;
    } catch (error) {
      console.log('Can not delete blog', error);
      return null
    }
  }
}

const blogService = new BlogService();
export default blogService;