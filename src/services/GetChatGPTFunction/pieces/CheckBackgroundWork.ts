
// @ts-ignore
import GetWorkStatus from "../../GetWorkStatus/GetWorkStatus.js";

// @ts-ignore
import { Delay } from "../../Delay/Delay.js";
import { ExtractCodeFromBackendResponse } from "../../ExtractCodeFromBackendResponse/ExtractCodeFromBackendResponse.js";

/**
 *
 * @returns
 */
export async function CheckBackgroundWork({
  print,
  progressIntervalMs,
  apiKey,
  onSuccess,
  onError,
  onProgress,
  jobId
}: {
  print: boolean;
  jobId: string;
  progressIntervalMs: number;
  apiKey: string;
  onError?: (error: Error) => void;
  onProgress?: (progress: any) => void;
  onSuccess?: (output: any) => void;
}) {

  // Success (2xx response)
  print && console.log(`Let's periodically check for updates, every ${progressIntervalMs} ms: `);

  // the latest job status
  let latestJobStatus: any;

  // is the job done ?
  let jobIsDone: any;

  // as long as the job is not successful or erroneous,
  // keep checking the job status
  while (!jobIsDone) {
    latestJobStatus = await GetWorkStatus({
      jobId,
      onSuccess: (jobData) => {
        //console.log(`Success: ${JSON.stringify(jobData, null, 2)}`);
      },
      onError: (e) => {
        //console.log(`Error: ${JSON.stringify(e, null, 2)}`);
      },
      apiKey,
      print,
    });

    // if there's a valid status response
    if (latestJobStatus) {
      // run the progress callback if if exists
      onProgress && onProgress(latestJobStatus);

      // check again if the job is done or fail
      // to know if it's time to break the loop
      jobIsDone = ["completed", "failed"].includes(latestJobStatus?.state);

      // wait some time
      await Delay(progressIntervalMs);
    }
    // if the status request failed
    else {
      jobIsDone = true;
    }

  }

  // if the job successfully completed
  if (latestJobStatus?.state == "completed") {
    return ExtractCodeFromBackendResponse(latestJobStatus, onSuccess);
  }
  // if the job is a messy failure (DON'T PANIC ! BREATHE) ;-)
  else {
    onError && onError(new Error(JSON.stringify(latestJobStatus, null, 2)));

    return null;
  }

}


