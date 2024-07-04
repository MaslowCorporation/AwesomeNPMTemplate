import FormData from "form-data";
import axios from "axios";

// @ts-ignore
import { Constants } from "../../constants/constants.js";

import { TestTemplateGPTCompletion } from "./pieces/TestTemplateGPTCompletion.js";
import { HandleError } from "./pieces/HandleError.js";
import { HandleFailedBackgroundWorkInit } from "./pieces/HandleFailedBackgroundWorkInit.js";
import { CheckBackgroundWork } from "./pieces/CheckBackgroundWork.js";

/**
 *  
 * Uncomment this code below, and run the 
 * 
 * npm run run-service TemplateGPTCompletion
 * 
 * command to test this SDK method quickly and dirty ;-)
 * 
 **
(async () => {
  await TestTemplateGPTCompletion();
})();
*/

/**
 * 
 * @param progressIntervalMs 
 * @param prompt 
 * @param apiKey 
 * @param params 
 * @param jobId
 * @param onJobCreated
 * @param onSuccess 
 * @param onError 
 * @param onProgress 
 * @param print 
 * @param model_chosen
 * 
 * @returns 
 */
export default async function TemplateGPTCompletion({
  model_chosen,
  prompt,
  apiKey,
  params,
  progressIntervalMs = 1000,
  onJobCreated,
  onSuccess,
  onError,
  onProgress,
  print = false,
  jobId,
}: {
  model_chosen?: string;
  prompt: string;
  apiKey: string;
  params?: any;
  progressIntervalMs: number,
  onSuccess?: (output: any) => void;
  onJobCreated?: (jobId: string) => void;
  onError?: (error: any) => void;
  onProgress?: (error: any) => void;
  print?: boolean;
  jobId?: string;
}): Promise<any> {
  try {
    print && console.log("Model chosen:", model_chosen);
    print && console.log("Let's start a HTTP request !");

    // if a jobId is given, then we go straight to the job checkup loop
    if (jobId) {

      print && console.log("Let's restart an ongoing job, amigo !");

      return CheckBackgroundWork({
        print,
        progressIntervalMs,
        apiKey,
        onSuccess,
        onError,
        onProgress,
        jobId
      });
    }

    // Do the initial HTTP request that starts the background work
    const response = await axios.post(
      `${Constants.api_base_url_web}/long_http_request_endpoint?apiKey=${apiKey}`,
      {
        prompt,
        params,
        model_chosen,
        test_timer_duration: params.test_timer_duration
      }
    );

    // if a background job was successfully started
    if (response.status >= 200 && response.status < 300) {
      // get the jobId of this freshly created job,
      // and run the job creation callback
      const freshJobIdResponse = response.data;
      const freshJobId = freshJobIdResponse.id;

      onJobCreated && await onJobCreated(freshJobId);

      // Periodically check for updates to handle the background job
      return CheckBackgroundWork({
        print,
        progressIntervalMs,
        apiKey,
        onSuccess,
        onError,
        onProgress,
        jobId: freshJobId
      });
    } else {
      // we ccouldn't create a background job for some reason.
      // Throw
      return HandleFailedBackgroundWorkInit(response, print, onError);
    }
  } catch (error: any) {
    // Handle network errors or exceptions
    return HandleError(print, error, onError);
  }
}


