"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleFailedBackgroundWorkInit = void 0;
/**
 *
 * @param response
 * @param print
 * @param onError
 *
 * @returns
 */
function HandleFailedBackgroundWorkInit(response, print, onError) {
    const prettyResponseData = JSON.stringify(response === null || response === void 0 ? void 0 : response.data, null, 2);
    // Handle error (non-2xx response)
    print && console.log("background HTTP job creation failed. " + prettyResponseData);
    print && console.log("Status:", response === null || response === void 0 ? void 0 : response.status);
    if (onError) {
        onError(response === null || response === void 0 ? void 0 : response.data);
    }
    return null;
}
exports.HandleFailedBackgroundWorkInit = HandleFailedBackgroundWorkInit;
