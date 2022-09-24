"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
class Exception extends Error {
    statusCode;
    errorCode;
    data;
    constructor(payload) {
        super(payload.message);
        this.statusCode = payload.statusCode;
        this.errorCode = payload.errorCode;
        this.data = payload.data;
    }
    getStatusCode() {
        return this.statusCode;
    }
    getErrorCode() {
        return this.errorCode;
    }
    getMessage() {
        return this.message;
    }
    getData() {
        return this.data;
    }
    static new(payload) {
        return new Exception(payload);
    }
}
exports.Exception = Exception;
