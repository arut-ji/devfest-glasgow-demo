"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var menus = [
    {
        name: 'Americano',
        price: 1.5
    },
    {
        name: 'Flat White',
        price: 1.6
    },
    {
        name: 'Latte',
        price: 1.7
    },
    {
        name: 'Moccha',
        price: 1.8
    },
    {
        name: 'Iced Tea',
        price: 1.5
    },
    {
        name: 'Caramel Macchiato',
        price: 2.0
    },
];
app.use('/_healthcheck', function (_, res) {
    res.status(200).json({ uptime: process.uptime() });
});
app.get('/menus', function (_, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Origin', "Origin, X-Requested-With, Content-Type, Accept");
    response.status(200).json(menus);
});
app.listen(process.env.PORT || 4004, function () { console.log('Running at localhost:4004'); });
