"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAccountByIdService = void 0;
const common_1 = require("../../../common");
const exception_1 = require("../../../exception");
class DeleteAccountByIdService {
    accountRepository;
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute(id) {
        const account = await this.accountRepository.findById(id);
        if (!account)
            throw exception_1.Exception.new({ statusCode: common_1.HttpStatus.NOT_FOUND, message: 'Account not found' });
        await this.accountRepository.deleteById(id);
    }
}
exports.DeleteAccountByIdService = DeleteAccountByIdService;
