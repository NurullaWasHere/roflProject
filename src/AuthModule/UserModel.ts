import sequelize from "../database/connection";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define('user', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
})

export interface IUserModel {
  id: number;
  name: string;
  password: string;
  email: string;
};

export default UserModel;