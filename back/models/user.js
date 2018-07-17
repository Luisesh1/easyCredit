'use strict';
module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        birddate: DataTypes.STRING,
        address: DataTypes.STRING,
        postalcode: DataTypes.INTEGER,
        country: DataTypes.STRING
    }, {});
    user.associate = function(models) {
        user.hasMany(models.request);
    };
    return user;
};