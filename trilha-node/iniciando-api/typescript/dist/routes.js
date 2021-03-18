"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
var routes = express_1.Router();
routes.post("/create", function (request, response) {
    var _a = request.body, name = _a.name, duration = _a.duration, educator = _a.educator;
    CreateCourseService_1.default.execute({ name: name, duration: duration, educator: educator });
    CreateCourseService_1.default.execute({ name: "React JS", educator: "Diego" });
    response.status(200).send();
});
routes.get("/", function (_req, res) {
    res.json({ message: "Hello World" });
});
exports.default = routes;
