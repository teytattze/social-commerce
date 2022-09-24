"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const bcryptjs_1 = require("bcryptjs");
const common_1 = require("../../../common");
const uuid_1 = require("uuid");
class Account extends common_1.Entity {
    email;
    password;
    createdAt;
    updatedAt;
    constructor(payload) {
        super();
        this.id = payload.id || (0, uuid_1.v4)();
        this.email = payload.email;
        this.password = payload.password;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    async hashPassword() {
        const salt = await (0, bcryptjs_1.genSalt)(14);
        this.password = await (0, bcryptjs_1.hash)(this.password, salt);
        await this.validate();
    }
    async comparePassword(password) {
        return (0, bcryptjs_1.compare)(password, this.password);
    }
    async update(payload) {
        this.email = payload.email || this.email;
        this.updatedAt = new Date();
        await this.validate();
    }
    static async new(payload) {
        const account = new Account(payload);
        await account.hashPassword();
        return account;
    }
}
exports.Account = Account;
