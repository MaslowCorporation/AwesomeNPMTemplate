"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTransformCloudFile = void 0;
const TestTransformCloudFile = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Some test !`);
    /*return TransformCloudFile({
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
    });*/
});
exports.TestTransformCloudFile = TestTransformCloudFile;
