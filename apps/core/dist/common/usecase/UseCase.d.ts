export interface UseCase<TUseCasePort, TUseCaseResult> {
    execute(port?: TUseCasePort): Promise<TUseCaseResult>;
}
//# sourceMappingURL=UseCase.d.ts.map