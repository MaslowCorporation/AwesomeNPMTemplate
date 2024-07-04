import axios from "axios";
import { Constants } from "../../../constants/constants.js";
import GetWorkStatus from "../../GetWorkStatus/GetWorkStatus.js";
import { Delay } from "../../Delay/Delay.js";

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
  onSuccess?: ((output: any) => void) | undefined;
  onError?: (error: Error) => void;
  onProgress?: (progress: any) => void;
}) {

  // Success (2xx response)
  print && console.log(`Let's periodically check for updates, every ${progressIntervalMs} ms: `);

  /*
 
  A background job status is an object containing the following keys:
  A sample background job status looks like this:
 
  {
      // the id of the job
      "id": "xj0S6mXpMLI3Tfoz",
 
      //
      // The state of the job. One of:
      //
      // completed, failed, delayed, active, waiting, paused, stuck, null
      "state": "active",
 
      // the numeric progress of the work
      //
      // typically a number from 0 to 100.
      // But it can be any serializable data of your liking
      "progress": 16,
 
      // the output value when the job successfully completed
      "returnvalue": null,
 
      // The initial data passed to the job.
      //
      // This data can be updated from within the job,
      // so update data can be passed to the frontend/client
      "data": {
          "creationUnix": 1700262446433,
          "percentage": "You are at 16 % of the shizzle, my nizzle !"
      },
 
      // the error reason/msg, if shit got sour
      "reason": null
  }
 
  This object is stored in latestJobStatus
  */
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
    const answer = latestJobStatus?.returnvalue;

    print && console.log("Answer:", answer);

    onSuccess && onSuccess(answer);

    return answer;
  }
  // if the job is a messy failure (DON'T PANIC ! BREATHE) ;-)
  else {
    onError && onError(new Error(JSON.stringify(latestJobStatus, null, 2)));
    
    return null;
  }

}
