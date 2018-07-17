const requestModel = require('../../models').request;
const status = require('../../config/configapp').requestsStatus;
var CronJob = require('cron').CronJob;
var job = new CronJob({
    cronTime: '* * * * *',
    onTick: function() {
        console.log('hola');
        requestModel.findOne({
                where: {
                    status: status.pending
                }
            })
            .then((res) => {
                if (!res) {
                    console.log("cola vacia");
                    return;
                }
                if (res.age > 20 && res.creditCard) {
                    console.log("si Cumple");
                } else {
                    console.log("no Cumple");

                }
                res.status = (res.age > 20 && res.creditCard) ? status.accepted : status.rejected;
                res.save()
                    .then((res) => {
                        console.log("Request prosesada id: " + res.id);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    start: false,
    timeZone: 'America/Mazatlan'
});
job.start();