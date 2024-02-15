import { GoogleLoginStatus } from "./pieces/GoogleLoginStatus.js";
/**
 *
 * Uncomment this code below, and run the
 *
 * npm run run-service GoogleLogin
 *
 * command to test this SDK method quickly and dirty ;-)
 *
 **
(async () => {
  await TestGoogleLogin();
})();
*/
/**
 *
 * @param progressIntervalMs,
 * how much time between each
 * job progress callback update
 * , in milliseconds
 *
 *
 * @param apiKey, the API Key, a string.
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
 *
 * @returns
 */
export default function GoogleLogin({ apiKey, params, progressIntervalMs, onJobCreated, onSuccess, onError, onProgress, print, jobId, }: {
    apiKey: string;
    params?: any;
    progressIntervalMs: number;
    onProgress?: (progress: GoogleLoginStatus) => void;
    onSuccess?: (output: any) => void;
    onJobCreated?: (jobData: any) => void;
    onError?: (error: any) => void;
    print?: boolean;
    jobId?: string;
}): Promise<any>;
/**
 *
 * @param apiKey, the API Key, a string.
 *
 * @param params, an object of options,
 * for your background job in the backend,
 * if you need to customize the shizzle.
 *
 * @param onSuccess, a callback that gives you the fruit of your backend's
 * hard work
 *
 * @param onError, a callback when the shizzle got messy.

 * @param print, do we print some basic logging info ?
 *
 * @returns
 *
 * Short version without background work
export default async function GoogleLogin({
  onSuccess,
  onError,
  apiKey,
  params,
  print = true,
}: {
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  apiKey: string;
  params?: any;
  print?: boolean;
}): Promise<string | null> {
  try {
    //


    // Send the POST request with the FormData,
    // if your request uploads data to the server.
    //
    // otherwise, don't send the POST request with a FormData,
    // but instead
    // send an object like this: { prop1, prop2, .... }
    const response = await axios.post(
      `${Constants.api_base_url_web}/long_http_request_endpoint?apiKey=${apiKey}`,

      // !!!!!!!!!!!!! IMPORTANT, READ THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
      // Uncomment the formData below, and remove the objet below it,
      // IF YOU WANT TO UPLOAD A FILE (photo, video, etc...)
      //formData

      // !!!!!!!!!!!!! IMPORTANT, READ THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
      // This objet is used if the request doesn't send a file
      // If your request sends a file to the server,
      // remove the object below, and uncomment formData above
      { params }
    );

    const responseData = response.data;
    const prettyResponseData = JSON.stringify(responseData, null, 2);

    if (response.status >= 200 && response.status < 300) {
      const answer = responseData.answer;

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
    print && console.error("An error occurred:", error?.response?.data);

    if (onError) {
      onError(error);
    }

    return null;
  }
}
*/ 
//# sourceMappingURL=GoogleLogin.d.ts.map