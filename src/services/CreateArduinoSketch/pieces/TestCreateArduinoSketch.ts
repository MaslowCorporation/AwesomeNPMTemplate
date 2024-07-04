import { Constants } from "../../../constants/constants.js";
import CreateArduinoSketch from "../CreateArduinoSketch.js";

export const TestCreateArduinoSketch = async () => {
  console.log(`Some test !`);

  return CreateArduinoSketch({
    model_chosen: "gpt-4",
    programDescription: "Give me a blink program",
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
