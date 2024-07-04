import { Constants } from "../../../constants/constants.js";
import TranslateText from "../TranslateText.js";

export const TestTranslateText = async () => {
  console.log(`Some test !`);

  return TranslateText({
    model_chosen: "gpt-4",
    text: "Bonjour, je m'appelle D'Artagneul et je suis un guerrier médiéval et spirituel, du royaume de Bordeciel",
    language: "Créole Francais",
    
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
