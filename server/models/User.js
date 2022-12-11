const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("../config/connection.js");

const User = sequelize.define("User",
	{
		id: {
			primaryKey: true,
			allowNull: false,
			type: DataTypes.INTEGER,
			autoIncrement: true
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING(20),
			unique: true
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING(30)
		}
	},
	{

	}
);