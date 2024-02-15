/**
 *
 * Uncomment this code below, and run the
 *
 * npm run run-service GetWorkStatus
 *
 * command to test this SDK method quickly and dirty ;-)
 *
 **
(async () => {
  await TestGetWorkStatus();
})();
*/
export default function GetWorkStatus({ jobId, onSuccess, onError, apiKey, print, }: {
    jobId?: string;
    onSuccess?: (output: any) => void;
    onError?: (error: any) => void;
    apiKey: string;
    print?: boolean;
}): Promise<any | null>;
//# sourceMappingURL=GetWorkStatus.d.ts.map