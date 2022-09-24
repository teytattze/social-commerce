"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountByIdService = void 0;
const common_1 = require("../../../common");
const account_1 = require("../../../domain/account");
const exception_1 = require("../../../exception");
class UpdateAccountByIdService {
    accountRepository;
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute(payload) {
        const account = await this.accountRepository.findById(payload.id);
        if (!account)
            throw exception_1.Exception.new({ statusCode: common_1.HttpStatus.NOT_FOUND, message: 'Account not found' });
        // TODO: Make password editable
        account.update({
            email: payload.email,
        });
        await this.accountRepository.updateById(account);
        return account_1.AccountUseCaseDto.fromAccount(account);
    }
}
exports.UpdateAccountByIdService = UpdateAccountByIdService;
