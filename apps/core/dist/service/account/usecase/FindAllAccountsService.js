"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllAccountsService = void 0;
const account_1 = require("../../../domain/account");
class FindAllAccountsService {
    accountRepository;
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute() {
        const accounts = await this.accountRepository.findAll();
        return accounts.map(account_1.AccountUseCaseDto.fromAccount);
    }
}
exports.FindAllAccountsService = FindAllAccountsService;
