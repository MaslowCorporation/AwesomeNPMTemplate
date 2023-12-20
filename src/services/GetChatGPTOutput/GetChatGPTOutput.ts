import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";
import axios from "axios";

import { Constants } from "../../constants/constants.js";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible.js";

export default async function GetChatGPTOutput({
  model_chosen = "text-davinci-003",
  prompt,
  onSuccess,
  onError,
  apiKey,
  params,
  print = true,
}: {
  model_chosen?: string;
  prompt: string;
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  apiKey: string;
  params?: any;
  print?: boolean;
}): Promise<string | null> {
  try {
    // debugger;

    print && console.log(app_strings.t("xKMRBTG"), model_chosen);

    const response = await axios.post(
      `${Constants.api_base_url_local}/get_gpt_output?apiKey=${apiKey}`,
      { model_chosen, prompt, params }
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
