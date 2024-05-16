import FormData from "form-data";
import axios from "axios";

// @ts-ignore
import { Constants } from "../../constants/constants.js";

import { TestUploadFileToCloud } from "./pieces/TestUploadFileToCloud.js";
import { HandleError } from "./pieces/HandleError.js";
import { HandleFailedBackgroundWorkInit } from "./pieces/HandleFailedBackgroundWorkInit.js";
import { CheckBackgroundWork } from "./pieces/CheckBackgroundWork.js";
import { UploadFileToCloudStatus } from "./pieces/UploadFileToCloudStatus.js";

/**
 *  
 * Uncomment this code below, and run the 
 * 
 * npm run run-service UploadFileToCloud
 * 
 * command to test this SDK method quickly and dirty ;-)
 * 
 **
(async () => {
  await TestUploadFileToCloud();
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
export default async function UploadFileToCloud({
  fileData,
  resourceType,
  apiKey,
  progressIntervalMs = 1000,
  onJobCreated,
  onSuccess,
  onError,
  onProgress,
  print = false,
  jobId,
  params,
}: {
  params?: any;
  resourceType: string;
  fileData: Blob | any;
  apiKey: string;
  progressIntervalMs: number,
  onProgress?: (progress: UploadFileToCloudStatus) => void;
  onSuccess?: (output: any) => void;
  onJobCreated?: (jobId: string) => void;
  onError?: (error: any) => void;
  print?: boolean;
  jobId?: string;
}): Promise<any> {
  try {
    // Create a new FormData object
    const formData = new FormData();
    const paramsStr = params && JSON.stringify(params);

    formData.append("cloud_file", fileData);
    formData.append("resourceType", resourceType);
    formData.append("params", paramsStr);

    // Send the POST request with the FormData
    const response = await axios.post(
      `${Constants.api_base_url_web}/upload_file_cloud?apiKey=${apiKey}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set the appropriate content type
        },
      }
    );




    const responseData = response.data;
    const prettyResponseData = JSON.stringify(responseData, null, 2);

    if (response.status >= 200 && response.status < 300) {
      const answer = responseData;

      // Success (2xx response)
      print && console.log("Request succeeded!");

      print && console.log("Answer:", answer);

      if (onSuccess) {
        onSuccess(answer);
      }

      return answer;
    } else {
      // Handle error (non-2xx response)
      print && console.log("Request failed!");
      print && console.log("Status:", response.status);
      print && console.log("Response data:", prettyResponseData);

      if (onError) {
        onError(new Error("Request failed"));
      }

      return null;
    }
  } catch (error: any) {


    // Handle network errors or exceptions
    print && console.log("An error occurred:", error?.response?.data);

    if (onError) {
      onError(error);
    }

    return null;
  }
}
