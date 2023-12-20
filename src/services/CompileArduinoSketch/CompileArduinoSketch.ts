import FormData from "form-data";
import axios from "axios";

// @ts-ignore
import { Constants } from "../../constants/constants.js";
import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";

export default async function CompileArduinoSketch({
  codeString,
  onSuccess,
  onError,
  apiKey,
  params,
  print = true,
}: {
  codeString: string;
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  apiKey: string;
  params?: any;
  print?: boolean;
}): Promise<{
  hex: string;
  hex_with_bootloader: string;
} | null> {
  try {


    // Create a new FormData object
    //const formData = new FormData();

    // Append the photo and mask Blobs to the FormData object
    //codeString && formData.append("code_string", codeString);

    //params && formData.append("params", JSON.stringify(params));

    // Send the POST request with the FormData,
    // if your request uploads data to the server.
    //
    // otherwise, don't send the POST request with a FormData, 
    // but instead
    // send an object like this: { prop1, prop2, .... }
    const response = await axios.post(
      `${Constants.api_base_url_local}/compile_arduino_sketch?apiKey=${apiKey}`,
      { code_string: codeString }
    );

    const responseData = response.data;
    const prettyResponseData = JSON.stringify(responseData, null, 2);

    if (response.status >= 200 && response.status < 300) {
      const answer = responseData.answer;

      // Success (2xx response)
      print && console.log(app_strings.t("x3ezGsvB"));

      print && console.log(app_strings.t("xziOfYCt"), answer);

      if (onSuccess) {
        onSuccess(answer);
      }

      return answer;
    } else {
      // Handle error (non-2xx response)
      print && console.log(app_strings.t("xLFuFy6p"));
      print && console.log(app_strings.t("xcCehb3i"), response.status);
      print && console.log(app_strings.t("xziOfYCt"), prettyResponseData);

      if (onError) {
        onError(new Error(app_strings.t("xLFuFy6p")));
      }

      return null;
    }
  } catch (error: any) {
    debugger;

    // Handle network errors or exceptions
    print && console.error(app_strings.t("xlqkylp0Sfn3"), error?.response?.data);

    if (onError) {
      onError(error);
    }

    return null;
  }
}
