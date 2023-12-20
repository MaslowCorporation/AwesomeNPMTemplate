/* PLOP_INJECT_IMPORT */
import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";

import axios from "axios";

import { Constants } from "../../constants/constants.js";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible.js";

/* PLOP_INJECT_GLOBAL_CODE */

//Function to translate text in the specified language
// text is the text to translate
// language is the language to translate it in
// returns the translated text, or null if error
export default async function TranslateText({
  text,
  language,
  apiKey,
  print = true,
  model_chosen = "text-davinci-003",
  onSuccess,
  onError,
}: {
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  text: string;
  language: string;
  apiKey: string;
  print?: boolean;
  model_chosen?: string;
}): Promise<string | null> {
  try {
    // debugger;

    print && console.log(app_strings.t("xKMRBTG"), model_chosen);

    const response = await axios.post(
      `${Constants.api_base_url_local}/translate_txt?apiKey=${apiKey}`,
      { model_chosen, text, language }
    );

    const responseData = response.data;
    const prettyResponseData = JSON.stringify(responseData, null, 2);

    if (response.status >= 200 && response.status < 300) {
      const answer = responseData.answer;

      // Success (2xx response)
      print && console.log(app_strings.t("x3ezGsvB"));

      //print && console.log("Response Full data:", prettyResponseData);
      print && console.log(app_strings.t("xFN0o4dh"), answer);

      RunIfPossible({ func: onSuccess, args: answer });

      return answer;
    } else {
      // Handle error (non-2xx response)
      print && console.log(app_strings.t("xLFuFy6p"));
      print && console.log(app_strings.t("xcCehb3i"), response.status);
      print && console.log(app_strings.t("xziOfYCt"), prettyResponseData);

      RunIfPossible({ func: onError, args: responseData });

      return null;
    }
  } catch (error: any) {
    // Handle network errors or exceptions
    print && console.error(app_strings.t("xlqkylp0Sfn3"), error?.response?.data);

    RunIfPossible({ func: onError, args: error?.response?.data });

    return null;
  }
}

async function TranslateObject({
  obj,
  language,
  apiKey,
  retries = 10,

  print = true,
  model_chosen = "text-davinci-003",
  onSuccess,
  onError,
}: {
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  obj: string;
  language: string;
  apiKey: string;
  print?: boolean;
  model_chosen?: string;
  retries?: number;
}): Promise<any | null> {
  try {
    // debugger;

    print && console.log(app_strings.t("xKMRBTG"), model_chosen);

    const response = await axios.post(
      `${Constants.api_base_url_local}/translate_obj?apiKey=${apiKey}`,
      { model_chosen, obj, language, retries }
    );

    const responseData = response.data;
    const prettyResponseData = JSON.stringify(responseData, null, 2);

    if (response.status >= 200 && response.status < 300) {
      const answer = responseData.answer;

      // Success (2xx response)
      print && console.log(app_strings.t("x3ezGsvB"));

      //print && console.log("Response Full data:", prettyResponseData);
      print && console.log(app_strings.t("xFN0o4dh"), answer);

      RunIfPossible({ func: onSuccess, args: answer });

      return answer;
    } else {
      // Handle error (non-2xx response)
      print && console.log(app_strings.t("xLFuFy6p"));
      print && console.log(app_strings.t("xcCehb3i"), response.status);
      print && console.log(app_strings.t("xziOfYCt"), prettyResponseData);

      RunIfPossible({ func: onError, args: responseData });

      return null;
    }
  } catch (error: any) {
    // Handle network errors or exceptions
    print && console.error(app_strings.t("xlqkylp0Sfn3"), error?.response?.data);

    RunIfPossible({ func: onError, args: error?.response?.data });

    return null;
  }
}
