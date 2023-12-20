import FormData from "form-data";
import axios from "axios";
import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";

// @ts-ignore
import { Constants } from "../../constants/constants.js";

interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
}

export default async function UploadFileToCloud({
  fileData,
  onSuccess,
  onError,
  apiKey,
  resourceType,
  print = true,
}: {
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  apiKey: string;
  resourceType: string;
  print?: boolean;
  fileData: Blob | any;
}): Promise<{
  secure_url: string;
  public_id: string;
} | null> {
  try {
    // debugger;

    // Create a new FormData object
    const formData = new FormData();

    formData.append("cloud_file", fileData);
    formData.append("resourceType", resourceType);


    // Send the POST request with the FormData
    const response = await axios.post(
      `${Constants.api_base_url_local}/upload_file_cloud?apiKey=${apiKey}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set the appropriate content type
        },
      }
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
    print && console.error(app_strings.t("xlqkylp0Sfn3"), error?.response?.data);

    if (onError) {
      onError(error);
    }

    return null;
  }
}
