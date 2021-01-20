"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(req, res) {
    var user = CreateUser_1.default({
        email: 'douglas@lockey.com.br',
        password: '123456',
        techs: [
            'Node.js',
            { title: 'Javasript', experience: 10 }
        ],
    });
    return res.json(user);
}
exports.helloWorld = helloWorld;
