const requestModel = require('../../models').request;


module.exports = {
    index: (req, res, next) => {

        requestModel.findAll({
            where: {
                userId: req.user.id
            }
        }).then((request) => {
            res.status(
                200
            ).json({
                ok: true,
                result: request
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
    create: (req, res, next) => {
        requestParams = req.body;
        var rq = requestModel.build({
            amount: requestParams.amount,
            age: requestParams.age,
            fee: requestParams.fee,
            npayments: requestParams.npayments,
            creditCard: requestParams.creditCard,
            userId: req.user.id
        });
        rq.save().then((request) => {
            res.status(
                201
            ).json({
                ok: true,
                result: request,
                data: {
                    amount: requestParams.amount,
                    age: requestParams.age,
                    fee: requestParams.fee,
                    npayments: requestParams.npayments,
                }
            });
        }).catch((err) => {
            res.status(
                501
            ).json({
                ok: false,
                error: err,
                data: {
                    amount: requestParams.amount,
                    age: requestParams.age,
                    fee: requestParams.fee,
                    npayments: requestParams.npayments,
                }
            });
        });
    }

}