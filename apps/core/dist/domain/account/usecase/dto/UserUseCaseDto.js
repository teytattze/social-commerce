"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AccountUseCaseDto_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUseCaseDto = void 0;
const class_transformer_1 = require("class-transformer");
let AccountUseCaseDto = AccountUseCaseDto_1 = class AccountUseCaseDto {
    id;
    username;
    email;
    createdAt;
    updatedAt;
    static fromAccount(account) {
        return (0, class_transformer_1.plainToClass)(AccountUseCaseDto_1, account);
    }
    static fromAccounts(accounts) {
        return accounts.map((account) => AccountUseCaseDto_1.fromAccount(account));
    }
};
__decorate([
    (0, class_transformer_1.Expose)()
], AccountUseCaseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AccountUseCaseDto.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AccountUseCaseDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AccountUseCaseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)()
], AccountUseCaseDto.prototype, "updatedAt", void 0);
AccountUseCaseDto = AccountUseCaseDto_1 = __decorate([
    (0, class_transformer_1.Exclude)()
], AccountUseCaseDto);
exports.AccountUseCaseDto = AccountUseCaseDto;
