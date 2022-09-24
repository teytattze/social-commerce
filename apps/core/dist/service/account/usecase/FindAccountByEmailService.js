"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAccountByEmailService = void 0;
const common_1 = require("../../../common");
const account_1 = require("../../../domain/account");
const exception_1 = require("../../../exception");
class FindAccountByEmailService {
    accountRepository;
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute(email) {
        const account = await this.accountRepository.findByEmail(email);
        if (!account)
            throw exception_1.Exception.new({ statusCode: common_1.HttpStatus.NOT_FOUND, message: 'Account not found' });
        return account_1.AccountUseCaseDto.fromAccount(account);
    }
}
exports.FindAccountByEmailService = FindAccountByEmailService;
