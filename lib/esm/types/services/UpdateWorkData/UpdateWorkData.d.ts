/**
 *
 * Uncomment this code below, and run the
 *
 * npm run run-service UpdateWorkData
 *
 * command to test this SDK method quickly and dirty ;-)
 *
 *
(async () => {
  await TestUpdateWorkData();
})();
*/
export default function UpdateWorkData({ jobId, onSuccess, onError, apiKey, print, params, }: {
    jobId?: string;
    onSuccess?: (output: any) => void;
    onError?: (error: Error) => void;
    apiKey: string;
    print?: boolean;
    params: any;
}): Promise<any | null>;
//# sourceMappingURL=UpdateWorkData.d.ts.map