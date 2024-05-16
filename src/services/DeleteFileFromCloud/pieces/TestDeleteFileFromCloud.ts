import DeleteFileFromCloud from "../DeleteFileFromCloud.js";

export const TestDeleteFileFromCloud = async () => {
  console.log(`Some test !`);

  return DeleteFileFromCloud({
    publicId: "mver72ietpbm0tdrvbfr",
    resourceType: "video",
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
    apiKey: "16504dcc6bf00403ed8b9fff549f0d75",
    print: false,
    // jobId: "<SOME_JOB_ID>"
  });
};
