import sequelize from "../database/connection";
import { DataTypes } from "sequelize";

const PostModel = sequelize.define('post', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  age: {
      type: DataTypes.INTEGER,
      allowNull: true
  },
  height: {
      type: DataTypes.INTEGER,
      allowNull: true,
  },
  image: {
      type: DataTypes.STRING,
      allowNull: true,
  },
  marriageStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  hasCredit: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

export interface IPostModel {
  id: number;
  name: string;
  age: number;
  height: number;
  image: string;
  marriageStatus: boolean;
  hasCredit: boolean;
  description: string;
  category: string;
};

export default PostModel;