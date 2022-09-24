import { HttpStatus } from '../../common';
export interface CreateExceptionPayload<TData> {
    statusCode: HttpStatus;
    errorCode?: string;
    message: string;
    data?: TData;
}
//# sourceMappingURL=CreateExceptionPayload.d.ts.map