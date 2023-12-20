/* PLOP_INJECT_IMPORT */
import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";

import axios from "axios";

import { Constants } from "../../constants/constants.js";
import { RunIfPossible } from "../RunIfPossible/RunIfPossible.js";
import GetQtyKeysInObj from "../GetQtyKeysInObj/GetQtyKeysInObj.js";
import TranslateText from "../TranslateText/TranslateText.js";
import { Delay } from "../Delay/Delay.js";

/* PLOP_INJECT_GLOBAL_CODE 

export default async function TranslateObject({
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

*/



export default async function TranslateObject({
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
  obj: any;
  language: string;
  apiKey: string;
  print?: boolean;
  model_chosen?: string;
  retries?: number;
}): Promise<any | null> {
  let newObj: any = {};
  let currentIndex: any = 1;
  let retriesCount: any = 1;
  let totalStrings: any = GetQtyKeysInObj(obj);
  print ? console.log(app_strings.t("x7CTz5XP")) : 42;

  try {
    for (var key in obj) {
      print
        ? console.log(
          `\n(${currentIndex}/${totalStrings}):\n\n${app_strings.t("xWtfTMu")}`
        )
        : 42;

      let translatedText = await TranslateText({
        text: obj[key],
        language,
        apiKey,
        model_chosen,
        print: false,
      });

      await Delay(5000);

      while (retriesCount <= retries && !translatedText) {
        print
          ? console.log(app_strings.t("x8H4nyVx") + ` ${retriesCount}/${retries}`)
          : 42;

        translatedText = await TranslateText({
          text: obj[key],
          language,
          apiKey,
          model_chosen,
          print: false,
        });

        await Delay(5000);

        retriesCount++;
      }

      if (!translatedText) {
        throw new Error(`${app_strings.t("xlqky0Sfn3")}: ${obj[key]}`);
      } else {
        retriesCount = 1;
      }


      newObj[key] = translatedText;

      currentIndex++;

      print ? console.log(`✅ ` + app_strings.t("xlqZy0Sf") + `: ${translatedText}`) : 42;

    }

    RunIfPossible({ func: onSuccess, args: newObj });

    return newObj;
  } catch (err) {
    // Handle network errors or exceptions
    print && console.error(`${app_strings.t("xlqkylp0Sfn3")}: `, err);

    RunIfPossible({ func: onError, args: err });

    return null;
  }
}

