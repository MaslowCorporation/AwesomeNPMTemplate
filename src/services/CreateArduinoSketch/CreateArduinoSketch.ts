import FormData from "form-data";
import axios from "axios";

// @ts-ignore
import { Constants } from "../../constants/constants.js";

import { TestCreateArduinoSketch } from "./pieces/TestCreateArduinoSketch.js";
import { HandleError } from "./pieces/HandleError.js";
import { HandleFailedBackgroundWorkInit } from "./pieces/HandleFailedBackgroundWorkInit.js";
import { CheckBackgroundWork } from "./pieces/CheckBackgroundWork.js";
import { CreateArduinoSketchStatus } from "./pieces/CreateArduinoSketchStatus.js";

/**
 *  
 * Uncomment this code below, and run the 
 * 
 * npm run run-service CreateArduinoSketch
 * 
 * command to test this SDK method quickly and dirty ;-)
 * 
 **
(async () => {
  await TestCreateArduinoSketch();
})();
*/

/**
 * 
 * @param progressIntervalMs, 
 * how much time between each 
 * job progress callback update 
 * , in milliseconds
 * 
 * @param prompt, the question you want to ask to ChatGPT. A string.
 * 
 * @param apiKey, the MaslowGPT API Key, a string.
 * 
 * @param params, an object of options, 
 * for your background job in the backend, 
 * if you need to customize the shizzle.
 * 
 * @param jobId, a job id, 
 * in order to keep polling for status of an existing job,
 * in case of a network disruption
 * 
 * @param onJobCreated, a callback that gives you the job id 
 * of the latest job you just created in the backend.
 * This job id allows you to check your background job, using 
 * the GetWorkStatus method, and also this method 
 * (using the jobId property).
 * 
 * @param onSuccess, a callback that gives you the fruit of your backend's  
 * hard work
 * 
 * @param onError, a callback when the shizzle got messy.
 *  
 * @param onProgress, a callback that gets called every progressIntervalMs
 * milliseconds, to give updates on the ongoing background job
 * 
 * @param print, do we print some basic logging info ?
 * 
 * @param model_chosen, the openai model you want to use.
 * "gpt-4", "gpt-3.5-turbo", etc...
 * 
 * @returns 
 */
export default async function CreateArduinoSketch({
  model_chosen,
  programDescription,
  apiKey,
  progressIntervalMs = 1000,
  onJobCreated,
  onSuccess,
  onError,
  onProgress,
  print = false,
  jobId,
}: {
  model_chosen?: string;
  programDescription: string;
  apiKey: string;
  progressIntervalMs: number,
  onProgress?: (progress: CreateArduinoSketchStatus) => void;
  onSuccess?: (output: any) => void;
  onJobCreated?: (jobId: string) => void;
  onError?: (error: any) => void;
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
      `${Constants.api_base_url_web}/create_arduino_sketch?apiKey=${apiKey}`,
      {
        model_chosen,
        programDescription,
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


