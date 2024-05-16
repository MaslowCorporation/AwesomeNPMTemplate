import UploadFileToCloud from "../UploadFileToCloud.js";
import fs from "fs";

function createFileStreamFromFilePath(filePath: string) {
  try {
    const fileStream = fs.createReadStream(filePath);

    return fileStream;
  } catch (error) {
    console.log("Error creating blob:", error);
  }
}

export const TestUploadFileToCloud = async () => {
  console.log(`Some test !`);

  return UploadFileToCloud({
    fileData: createFileStreamFromFilePath(
      "C:/Users/Shadow/Desktop/MaslowWorld/maslow-gpt-api-v2/src/AppConstants/test_files/pika.mp4"
    ),
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
    print: true,
    // jobId: "<SOME_JOB_ID>"
  });
};
