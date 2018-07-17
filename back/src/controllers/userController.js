const userModel = require('../../models').user;
const jwt = require('jsonwebtoken');
const conf = require('../../config/configapp');

module.exports = {
    index: (req, res, next) => {
        userModel.findAll().then((users) => {
            res.status(
                200
            ).json({
                ok: true,
                result: users
            });
        }).catch((err) => {
            res.status(
                500
            ).json({
                ok: false,
                error: err
            });
        });
    },

    show: (req, res, next) => {
        userModel.findOne({ where: { id: req.params.id } }).then((user) => {
            if (user) {
                res.status(
                    200
                ).json({
                    ok: true,
                    result: user

                });
            } else {
                res.status(
                    404
                ).json({
                    ok: false,
                    result: user
                });
            }
        })
    },

    update: (req, res, next) => {
        userModel.findOne({ where: { id: req.params.id } }).then((user) => {
            if (user) {
                user.name = req.body.name
                user.lastname = req.body.lastname
                user.birddate = req.body.birddate
                user.address = req.body.address
                user.postalcode = req.body.postalcode
                user.country = req.body.country
                user.save()
                    .then((user) => {
                        res.status(
                            200
                        ).json({
                            ok: true,
                            result: user
                        });
                    })
                    .catch((error) => {
                        res.status(
                            501
                        ).json({
                            ok: false,
                            error
                        });
                    });

            } else {
                res.status(
                    404
                ).json({
                    ok: false,
                });
            }
        })
    },

    login: (req, res, next) => {
        var username = req.body.username;
        console.log(username);
        userModel.findOne({ where: { username } }).then((user) => {
            if (user) {
                var token = jwt.sign({ user }, conf.jwtsecret, { expiresIn: 86400 });
                res.status(
                    200
                ).json({
                    ok: true,
                    result: user,
                    token,
                    query: { username }
                });
            } else {
                var us = userModel.build({
                    username
                });
                us.save().then((user) => {
                    var token = jwt.sign({ user }, conf.jwtsecret, { expiresIn: 86400 });
                    res.status(
                        201
                    ).json({
                        ok: true,
                        result: user,
                        token,
                        query: { username }
                    });
                }).catch((err) => {
                    res.status(
                        501
                    ).json({
                        ok: false,
                        error: err
                    });
                });
            }
        }).catch((err) => {
            res.status(
                500
            ).json({
                ok: false,
                error: err
            });
        });
    }
}