import sequelize from "../database/connection";
import { DataTypes } from "sequelize";
import BlogModel from "../BlogModule/BlodModel";
import PostModel from "../PostModule/PostModel";

const ReviewModel = sequelize.define('review', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
  },
  reviewText: {
      type: DataTypes.STRING,
      allowNull: false,
  }
});

BlogModel.hasMany(ReviewModel);
ReviewModel.belongsTo(BlogModel);

PostModel.hasMany(ReviewModel);
ReviewModel.belongsTo(PostModel);

export default ReviewModel;