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
exports.CheckBackgroundWork = void 0;
// @ts-ignore
const GetWorkStatus_js_1 = __importDefault(require("../../GetWorkStatus/GetWorkStatus.js"));
// @ts-ignore
const Delay_js_1 = require("../../Delay/Delay.js");
const ExtractCodeFromBackendResponse_js_1 = require("../../ExtractCodeFromBackendResponse/ExtractCodeFromBackendResponse.js");
/**
 *
 * @returns
 */
function CheckBackgroundWork({ print, progressIntervalMs = 1000, apiKey, onSuccess, onError, onProgress, jobId }) {
    return __awaiter(this, void 0, void 0, function* () {
        // Success (2xx response)
        print && console.log(`Let's periodically check for updates, every ${progressIntervalMs} ms: `);
        // the latest job status
        let latestJobStatus;
        // is the job done ?
        let jobIsDone;
        // as long as the job is not successful or erroneous,
        // keep checking the job status
        while (!jobIsDone) {
            latestJobStatus = yield (0, GetWorkStatus_js_1.default)({
                jobId,
                onSuccess: (jobData) => {
                    //console.log(`Success: ${JSON.stringify(jobData, null, 2)}`);
                },
                onError: (e) => {
                    //console.log(`Error: ${JSON.stringify(e, null, 2)}`);
                },
                apiKey,
                print,
            });
            // if there's a valid status response
            if (latestJobStatus) {
                // run the progress callback if if exists
                onProgress && onProgress(latestJobStatus);
                // check again if the job is done or fail
                // to know if it's time to break the loop
                jobIsDone = ["completed", "failed"].includes(latestJobStatus === null || latestJobStatus === void 0 ? void 0 : latestJobStatus.state);
                // wait some time
                yield (0, Delay_js_1.Delay)(progressIntervalMs);
            }
            // if the status request failed
            else {
                jobIsDone = true;
            }
        }
        // if the job successfully completed
        if ((latestJobStatus === null || latestJobStatus === void 0 ? void 0 : latestJobStatus.state) == "completed") {
            return (0, ExtractCodeFromBackendResponse_js_1.ExtractCodeFromBackendResponse)(latestJobStatus, onSuccess);
        }
        // if the job is a messy failure (DON'T PANIC ! BREATHE) ;-)
        else {
            onError && onError(new Error(JSON.stringify(latestJobStatus, null, 2)));
            return null;
        }
    });
}
exports.CheckBackgroundWork = CheckBackgroundWork;
