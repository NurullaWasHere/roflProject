import { ICreatePostDTO } from "../PostModule/PostTypes";
import PostsIterator from "./PostsIterator";

export default class ExtendedPost implements ICreatePostDTO{
  constructor(
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date,
    public updatedAt: Date,
    public name: string,
    public description: string,
    public category: string,
    public id?: number,
  ) {}

  public getPostByName(posts,name: string) { 
      const iterator = this.createIterator(posts, [post => post.name === name]);
  }

  public createIterator(posts: ICreatePostDTO[], conditions: any[]) {
    return new PostsIterator(posts, conditions);
  }
}