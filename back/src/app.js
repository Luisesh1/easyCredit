const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const requestsRoutes = require('./routes/requestsRoutes');
const usersRoutes = require('./routes/usersRoutes');

// configuraciones
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT , PATCH, DELETE, OPTIONS')
    next()
})
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const processRequets = require('./cron/processRequests');
//rutas
app.use('/requests', requestsRoutes);
app.use('/users', usersRoutes);
app.get('*', (req, res) => res.status(200).send({
    message: 'ruta no encotrada',
}));


app.listen(app.get('port'), () => {
    console.log('server on ' + app.get('port'));
});