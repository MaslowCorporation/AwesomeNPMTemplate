/**
 *
 * @returns
 */
export declare function CheckBackgroundWork({ print, progressIntervalMs, apiKey, onSuccess, onError, onProgress, jobId }: {
    print: boolean;
    jobId: string;
    progressIntervalMs: number;
    apiKey: string;
    onError?: (error: Error) => void;
    onProgress?: (progress: any) => void;
    onSuccess?: (output: any) => void;
}): Promise<any>;
//# sourceMappingURL=CheckBackgroundWork.d.ts.map