"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassValidator = void 0;
const class_validator_1 = require("class-validator");
class ClassValidator {
    static async validate(target, context) {
        const errors = await (0, class_validator_1.validate)(target);
        if (errors.length === 0)
            return null;
        const details = {
            context: context || target.constructor.name,
            errors: errors.map((err) => ({
                property: err.property,
                message: err.constraints ? Object.values(err.constraints) : [],
            })),
        };
        return details;
    }
}
exports.ClassValidator = ClassValidator;
