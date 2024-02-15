import TemplateGPTCompletion from "../TemplateGPTCompletion.js";

export const TestTemplateGPTCompletion = async () => {
  console.log(`Some test !`);

  return  TemplateGPTCompletion({
    model_chosen: "gpt-4",
    prompt: "What is the capital of Dominica ?",
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
    onError: (e: any) => {
      console.log(`Error: ${JSON.stringify(e?.response?.data, null, 2)}`);
    },
    onProgress: (progress) => {
      console.log(`Job Progress: ${JSON.stringify(progress, null, 2)}`);
    },
    apiKey: "16504dcc6bf00403ed8b9fff549f0d75",
    print: false,
    //jobId: "xECg6tankY0ZdPkI"
  });
};
