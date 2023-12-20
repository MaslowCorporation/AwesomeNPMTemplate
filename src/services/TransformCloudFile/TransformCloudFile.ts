import FormData from "form-data";
import axios from "axios";
import { app_strings } from "../../stringRepos/AppStrings/AppStrings.js";

// @ts-ignore
import { Constants } from "../../constants/constants.js";

/**
 * This function is used to make Cloudinary transforms on an uploaded file
 * Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline
 * 
 * @param assetType - video, image, etc...
 * @param apiKey - API key used for authentication
 * @param transformations - A list of transformations to apply to the file
 * @param deliveryType - upload, etc...
 * @param onSuccess - A callback function that handles successful transformations
 * @param onError - A callback function that handles any errors that occur during transformations
 * @param publicId - l'id de fichier cloud
 * @param print - log or no
 * @param version - la version de fichier (optionnel)
 * @param fileExtension - l'extension du fichier uploadé (mp4, png, mp3, etc... extension sans point)
 * 
 * Crée une url de transform pour cet asset cloud.
 * 
 * Une url de format 
 * 
 * https://res.cloudinary.com/<cloud_name>/<asset_type>/<delivery_type>/<transformations>/<version>/<public_id_full_path>.<extension>
 * 
 * + d'infos ici:
 * 
 * https://cloudinary.com/documentation/transformation_reference#l_text
 * 
 * https://cloudinary.com/documentation/image_transformations#transformation_url_syntax
 * 
 * https://cloudinary.com/documentation/image_transformations
 * 
 * https://cloudinary.com/documentation/video_manipulation_and_delivery
 * 
 * Video Concat help
 * 
 * https://support.cloudinary.com/hc/en-us/community/posts/4404163979794-Video-conatination-and-adding-watermark-overlay
 * 
 * Aussi, cette url de texte centré est un bon point de départ
 * pour l'implémentation de texte sur video/photo
 * 
 * https://cloudinary.com/documentation/video_layers
 * 
 * Transformations en chaine, ici:
 * 
 * https://cloudinary.com/documentation/image_transformations#chained_transformations
 * 
 */
export default async function TransformCloudFile({
  publicId,
  apiKey,
  assetType,
  transformations,
  deliveryType = 'upload',
  onSuccess,
  onError,
  print = true,
  version,
  fileExtension
}: {
  onSuccess?: (output: any) => void;
  onError?: (error: Error) => void;
  apiKey: string;
  publicId: string;
  transformations: any[];
  deliveryType: string;
  assetType: string;
  print?: boolean;
  version?: string;
  fileExtension: string;
}): Promise<string | null> {
  try {
    // debugger;

    // Create a new FormData object

    //publicId && formData.append("publicId", publicId);
    //transformations && formData.append("transformations", transformations);
    //resourceType && formData.append("resourceType", resourceType);

    // Send the POST request with the FormData
    const response = await axios.post(
      `${Constants.api_base_url_local}/transform_cloud_file?apiKey=${apiKey}`,
      { publicId, transformations, deliveryType, assetType, version, fileExtension }
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
