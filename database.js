const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('cinema', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889,
    logging: false
});

const Film = require('./models/Film')(sequelize, DataTypes)

sequelize.sync({
    alter: {
        drop: false
    }
})

module.exports = {
    sequelize: sequelize,
    Film: Film,
}