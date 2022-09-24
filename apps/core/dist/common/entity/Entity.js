"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const Exception_1 = require("../../exception/Exception");
const HttpStatus_1 = require("../enum/HttpStatus");
const ClassValidator_1 = require("../validator/ClassValidator");
class Entity {
    id;
    getId() {
        if (typeof this.id === 'undefined')
            throw Exception_1.Exception.new({
                statusCode: HttpStatus_1.HttpStatus.BAD_REQUEST,
                message: 'Entity ID is undefined',
            });
        return this.id;
    }
    async validate() {
        const details = await ClassValidator_1.ClassValidator.validate(this);
        if (details)
            throw Exception_1.Exception.new({
                statusCode: HttpStatus_1.HttpStatus.BAD_REQUEST,
                message: 'Entity Validation Failed',
                data: details,
            });
    }
}
exports.Entity = Entity;
