import { Constants } from "../../../constants/constants.js";
import GetChatGPTArt from "../GetChatGPTArt.js";

export const TestGetChatGPTArt = async () => {
  console.log(`Some test !`);

  return GetChatGPTArt({
    model_chosen: "dall-e-2",
    prompt: "Give me a portrait of Carl Johnson from GTA.",
    img_width: 256,
    img_height: 256,
    progressIntervalMs: 1000,

    onJobCreated: (jobId) => {
      console.log(`The background HTTP job got created successfully ! it's id is: ${jobId}`);
    },
    onSuccess: (output) => {
      console.log(`Success: ${JSON.stringify(output, null, 2)}`);
    },
    onError: (e) => {
      console.log(`Error: ${JSON.stringify(e?.response?.data, null, 2)}`);
    },
    onProgress: (progress) => {
      console.log(`Job Progress: ${JSON.stringify(progress, null, 2)}`);
    },
    apiKey: Constants.MASLOW_GPT_API_KEY,
    print: false,
    // jobId: "<SOME_JOB_ID>"
  });
};
