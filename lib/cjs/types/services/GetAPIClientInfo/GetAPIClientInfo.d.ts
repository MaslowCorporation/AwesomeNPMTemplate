export default function GetAPIClientInfo({ onSuccess, onError, apiKey, params, print, }: {
    onSuccess?: (output: any) => void;
    onError?: (error: Error) => void;
    apiKey: string;
    params?: any;
    print?: boolean;
}): Promise<string | null>;
//# sourceMappingURL=GetAPIClientInfo.d.ts.map