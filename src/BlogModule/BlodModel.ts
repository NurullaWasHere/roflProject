import sequelize from "../database/connection";
import { DataTypes } from "sequelize";


const BlogModel = sequelize.define('blog', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
  },
  blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  description: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  image: {
      type: DataTypes.STRING,
      allowNull: true,
  },
});

export interface IBlogModel {
  id: number;
  blogTitle: string;
  description: string;
  image: string;
};

export default BlogModel;