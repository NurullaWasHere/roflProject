
export interface ICreatePostDTO {
  name: string;
  age?: number;
  height?: number;
  image?: string;
  marriageStatus?: boolean;
  hasCredit?: boolean;
  description: string;
  category: string;
}