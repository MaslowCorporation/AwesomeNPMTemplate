import GetGPTCode from "../GetGPTCode.js";

export const TestGetGPTCode = async () => {
  console.log(`Some test !`);

  return GetGPTCode({
    model_chosen: "gpt-4",
    prompt: "Give me a paragraph describing the island called Martinique.",
    params: {
      test_timer_duration: 100000
    },
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
    apiKey: "<YOUR_MASLOW_GPT_API_KEY>",
    print: false,
    // jobId: "<SOME_JOB_ID>"
  });
};
