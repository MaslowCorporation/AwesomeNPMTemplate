import FormData from "form-data";
import axios from "axios";

// @ts-ignore
import { Constants } from "../../constants/constants.js";

export default async function GetAPIClientInfo({
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
      `${Constants.api_base_url_web}/get_api_client_info?apiKey=${apiKey}`,

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
    print && console.log("An error occurred:", error?.response?.data);

    if (onError) {
      onError(error);
    }

    return null;
  }
}
