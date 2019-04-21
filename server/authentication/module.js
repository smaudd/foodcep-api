const app = require('express').Router();
const signin_as_restaurant = require('./routes/signin/signin_as_restaurant');
const signin_as_employee = require('./routes/signin/signin_as_employee');
const login = require('./routes/login');
const logout = require('./routes/logout');
const refresh = require('./routes/refresh_session');

app.use('/signin/restaurant', signin_as_restaurant);
app.use('/signin', signin_as_employee);
app.use('/login', login);
app.use('/logout', logout);
app.use('/refresh', refresh);

module.exports = app;