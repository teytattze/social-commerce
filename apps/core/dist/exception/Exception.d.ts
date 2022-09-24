import { Optional } from '../common';
import { CreateExceptionPayload } from './type/CreateExceptionPayload';
export declare class Exception<TData> extends Error {
    private readonly statusCode;
    private readonly errorCode;
    private readonly data;
    constructor(payload: CreateExceptionPayload<TData>);
    getStatusCode(): number;
    getErrorCode(): Optional<string>;
    getMessage(): string;
    getData(): Optional<TData>;
    static new<TData>(payload: CreateExceptionPayload<TData>): Exception<TData>;
}
//# sourceMappingURL=Exception.d.ts.map