import { ICreatePostDTO } from "../PostModule/PostTypes";


export default class PostsIterator {
  private posts: ICreatePostDTO[];
  private index: number = 0;

  constructor(posts: ICreatePostDTO[], private conditions: any[]) {
    this.posts = posts;
  }

  public hasNext(): boolean {
    return this.index < this.posts.length;
  }

  public next(): ICreatePostDTO {
    let conditionSatisfied = false;
    while(conditionSatisfied) {
      const post = this.posts[this.index];
      if(this.conditions.every((condition) => condition(post))) {
        conditionSatisfied = true;
        return post;
      }
      this.getNext();
    };
    if(!conditionSatisfied) {
      return null;
    }
    return this.posts[this.index]; 
  }

  private getNext() {
    return this.index = this.index + 1;
  }
}