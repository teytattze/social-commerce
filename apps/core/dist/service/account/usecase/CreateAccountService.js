"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountService = void 0;
const common_1 = require("../../../common");
const account_1 = require("../../../domain/account");
const exception_1 = require("../../../exception");
class CreateAccountService {
    accountRepository;
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute(payload) {
        const account = await this.accountRepository.findByEmail(payload.email);
        if (account)
            throw exception_1.Exception.new({ statusCode: common_1.HttpStatus.CONFLICT, message: 'Email already exists' });
        const newAccount = await account_1.Account.new({
            email: payload.email,
            password: payload.password,
        });
        await this.accountRepository.create(newAccount);
        return account_1.AccountUseCaseDto.fromAccount(newAccount);
    }
}
exports.CreateAccountService = CreateAccountService;
