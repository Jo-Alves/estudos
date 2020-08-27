const Sequelize = require("sequelize")
const connection = require("../model/database")

const category = connection.define('categories', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	slug: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

category.sync({force: false})
module.exports = category