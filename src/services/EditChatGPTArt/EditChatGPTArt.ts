import FormData from "form-data";
import axios from "axios";
import { Constants } from "../../constants/constants.js";
import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";


export default async function EditChatGPTArt({
  photoData,
  model_chosen = "dall-e-2",
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
  photoData: Blob | any;
}): Promise<string | null> {
  try {
    // 

    print && console.log("Model chosen:", model_chosen);

    // Create a new FormData object
    const formData = new FormData();

    // Append the photo and mask Blobs to the FormData object
    photoData && formData.append("photo", photoData);

    // Add other data to the FormData object if needed
    model_chosen && formData.append("model_chosen", model_chosen);
    prompt && formData.append("prompt", prompt);
    params && formData.append("params", JSON.stringify(params));

    // Send the POST request with the FormData
    const response = await axios.post(
      `${Constants.api_base_url_web}/edit_gpt_art?apiKey=${apiKey}`,
      formData
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
    // Handle network errors or exceptions
    print && console.log(app_strings.t("xlqkylp0Sfn3"), error?.response?.data);

    if (onError) {
      onError(error);
    }

    return null;
  }
}
