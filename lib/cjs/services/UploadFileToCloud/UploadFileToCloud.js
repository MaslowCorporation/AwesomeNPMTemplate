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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_data_1 = __importDefault(require("form-data"));
const axios_1 = __importDefault(require("axios"));
// @ts-ignore
const constants_js_1 = require("../../constants/constants.js");
/**
 *
 * Uncomment this code below, and run the
 *
 * npm run run-service UploadFileToCloud
 *
 * command to test this SDK method quickly and dirty ;-)
 *
 **
(async () => {
  await TestUploadFileToCloud();
})();
*/
/**
 *
 * @param progressIntervalMs,
 * how much time between each
 * job progress callback update
 * , in milliseconds
 *
 * @param prompt, the question you want to ask to ChatGPT. A string.
 *
 * @param apiKey, the MaslowGPT API Key, a string.
 *
 * @param params, an object of options,
 * for your background job in the backend,
 * if you need to customize the shizzle.
 *
 * @param jobId, a job id,
 * in order to keep polling for status of an existing job,
 * in case of a network disruption
 *
 * @param onJobCreated, a callback that gives you the job id
 * of the latest job you just created in the backend.
 * This job id allows you to check your background job, using
 * the GetWorkStatus method, and also this method
 * (using the jobId property).
 *
 * @param onSuccess, a callback that gives you the fruit of your backend's
 * hard work
 *
 * @param onError, a callback when the shizzle got messy.
 *
 * @param onProgress, a callback that gets called every progressIntervalMs
 * milliseconds, to give updates on the ongoing background job
 *
 * @param print, do we print some basic logging info ?
 *
 * @param model_chosen, the openai model you want to use.
 * "gpt-4", "gpt-3.5-turbo", etc...
 *
 * @returns
 */
function UploadFileToCloud({ fileData, resourceType, apiKey, progressIntervalMs = 1000, onJobCreated, onSuccess, onError, onProgress, print = false, jobId, }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create a new FormData object
            const formData = new form_data_1.default();
            formData.append("cloud_file", fileData);
            formData.append("resourceType", resourceType);
            // Send the POST request with the FormData
            const response = yield axios_1.default.post(`${constants_js_1.Constants.api_base_url_web}/upload_file_cloud?apiKey=${apiKey}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set the appropriate content type
                },
            });
            const responseData = response.data;
            const prettyResponseData = JSON.stringify(responseData, null, 2);
            if (response.status >= 200 && response.status < 300) {
                const answer = responseData;
                // Success (2xx response)
                print && console.log("Request succeeded!");
                print && console.log("Answer:", answer);
                if (onSuccess) {
                    onSuccess(answer);
                }
                return answer;
            }
            else {
                // Handle error (non-2xx response)
                print && console.log("Request failed!");
                print && console.log("Status:", response.status);
                print && console.log("Response data:", prettyResponseData);
                if (onError) {
                    onError(new Error("Request failed"));
                }
                return null;
            }
        }
        catch (error) {
            // Handle network errors or exceptions
            print && console.error("An error occurred:", (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
            if (onError) {
                onError(error);
            }
            return null;
        }
    });
}
exports.default = UploadFileToCloud;
