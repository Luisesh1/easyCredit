'use strict';
module.exports = (sequelize, DataTypes) => {
    var request = sequelize.define('request', {
        amount: DataTypes.INTEGER,
        age: DataTypes.INTEGER,
        npayments: DataTypes.INTEGER,
        fee: DataTypes.FLOAT,
        status: DataTypes.STRING,
        creditCard: DataTypes.BOOLEAN,
        userId: DataTypes.INTEGER
    }, {});
    request.associate = function(models) {
        // associations can be defined here
        request.belongsTo(models.user);
    };
    return request;
};