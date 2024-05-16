import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";
import axios from "axios";

import { Constants } from "../../constants/constants.js";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible.js";
import { GetCodeFromSnippet } from "../GetCodeFromSnippet/GetCodeFromSnippet.js";

export default async function CreateArduinoSketch({
  programDescription,
  apiKey,
  onSuccess,
  onError,
  model_chosen = "text-davinci-003",
  print = true,
}: {
  model_chosen?: string;
  programDescription: string;
  apiKey: string;
  onSuccess?: () => void;
  onError?: (error: any) => void;
  print?: boolean;
}): Promise<{
  codePart: string;
  answer: string;
} | null> {
  try {
    // 

    print && console.log(app_strings.t("xKMRBTG"), model_chosen);

    const response = await axios.post(
      `${Constants.api_base_url_web}/create_arduino_sketch?apiKey=${apiKey}`,
      {
        model_chosen,
        programDescription,
      }
    );

    const responseData = response.data;
    const prettyResponseData = JSON.stringify(responseData, null, 2);

    if (response.status >= 200 && response.status < 300) {
      const answer = responseData.answer;
      const codePieces = GetCodeFromSnippet(answer)
      const biggestCodePiece = codePieces?.at(0)
      const codePart = biggestCodePiece ?? answer;

      // Success (2xx response)
      print && console.log(app_strings.t("x3ezGsvB"), "\n\n");
      print && console.log(app_strings.t("xFN0o4dh"), "\n\n", answer, "\n\n");
      print && console.log(app_strings.t("xhpzrpkYg"), "\n\n", codePart, "\n\n");

      const output = { codePart, answer };

      RunIfPossible({ func: onSuccess, args: output });

      return output;
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
    print && console.log(app_strings.t("xlqkylp0Sfn3"), error?.response?.data);

    RunIfPossible({ func: onError, args: error?.response?.data });

    return null;
  }
}

