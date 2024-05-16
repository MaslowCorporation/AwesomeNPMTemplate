import FormData from "form-data";
import axios from "axios";

// @ts-ignore
import { Constants } from "../../constants/constants.js";

import { TestGetGoogleAPIKey } from "./pieces/TestGetGoogleAPIKey.js";
import { HandleError } from "./pieces/HandleError.js";
import { HandleFailedBackgroundWorkInit } from "./pieces/HandleFailedBackgroundWorkInit.js";
import { CheckBackgroundWork } from "./pieces/CheckBackgroundWork.js";
import { GetGoogleAPIKeyStatus } from "./pieces/GetGoogleAPIKeyStatus.js";

/**
 *  
 * Uncomment this code below, and run the 
 * 
 * npm run run-service GetGoogleAPIKey
 * 
 * command to test this SDK method quickly and dirty ;-)
 * 
 **
(async () => {
  await TestGetGoogleAPIKey();
})();
*/

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
 * Short version without background work*/
export default async function GetGoogleAPIKey({
  onSuccess,
  onError,
  google_user_uid,
  email,
  print = true,
}: {
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  google_user_uid: string;
  email: string;
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
      `${Constants.api_base_url_web}/get_google_api_key`,

      // !!!!!!!!!!!!! IMPORTANT, READ THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
      // Uncomment the formData below, and remove the objet below it,
      // IF YOU WANT TO UPLOAD A FILE (photo, video, etc...)
      {
        google_user_uid,
        email
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
