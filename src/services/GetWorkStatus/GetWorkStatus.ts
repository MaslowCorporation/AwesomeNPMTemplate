import FormData from "form-data";
import axios from "axios";

// @ts-ignore
import { Constants } from "../../constants/constants.js";
import { TestGetWorkStatus } from "./pieces/TestGetWorkStatus.js";

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

export default async function GetWorkStatus({
  jobId,
  onSuccess,
  onError,
  apiKey,
  print = true,
}: {
  jobId?: string;
  onSuccess?: (output: any) => void;
  onError?: (error: any) => void;
  apiKey: string;
  print?: boolean;
}): Promise<any | null> {
  try {
    print && console.log("Let's get the background job status for " + jobId);

    const response = await axios.post(
      `${Constants.api_base_url_web}/get_work_status/${jobId}?apiKey=${apiKey}`,
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


