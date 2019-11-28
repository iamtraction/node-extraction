import * as Request from "request-promise-native";
declare class ExtractionWrapper {
    private BASE_URL;
    private OPTIONS;
    constructor(options?: Request.RequestPromiseOptions);
    request(path: string, options?: Request.RequestPromiseOptions): Promise<any>;
}
export = ExtractionWrapper;
//# sourceMappingURL=main.d.ts.map