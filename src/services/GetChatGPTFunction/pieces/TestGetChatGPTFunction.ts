import { Constants } from "../../../constants/constants.js";
import GetChatGPTFunction from "../GetChatGPTFunction.js";

export const TestGetChatGPTFunction = async () => {
  console.log(`Some test !`);

  return GetChatGPTFunction({
    model_chosen: "gpt-4",
    functionName: "CompileArduinoCode",
    functionLanguage: "javascript (import/export)",
    functionPurpose:
      "This function compiles some Arduino source code, stored in inoCode",
    functionArgs: "inoCode (string, du code arduino)",
    functionReturnValue:
      "Compile inoCode into hex code, and return the path of a newly created .hex file, if success, null if error. Use the arduino-cli, child-process, and fs",
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
