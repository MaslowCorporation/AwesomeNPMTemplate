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
const axios_1 = __importDefault(require("axios"));
// @ts-ignore
const constants_js_1 = require("../../constants/constants.js");
/**
 *
 * Uncomment this code below, and run the
 *
 * npm run run-service GetGoogleAPIKey
 *
 * command to test this SDK method quickly and dirty ;-)
 *
 **
(async () => {
  await TestGetGoogleAPIKey();
})();
*/
/**
 *
 * @param apiKey, the API Key, a string.
 *
 * @param params, an object of options,
 * for your background job in the backend,
 * if you need to customize the shizzle.
 *
 * @param onSuccess, a callback that gives you the fruit of your backend's
 * hard work
 *
 * @param onError, a callback when the shizzle got messy.

 * @param print, do we print some basic logging info ?
 *
 * @returns
 *
 * Short version without background work*/
function GetGoogleAPIKey({ onSuccess, onError, google_user_uid, email, print = true, }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 
            // Send the POST request with the FormData,
            // if your request uploads data to the server.
            //
            // otherwise, don't send the POST request with a FormData, 
            // but instead
            // send an object like this: { prop1, prop2, .... }
            const response = yield axios_1.default.post(`${constants_js_1.Constants.api_base_url_web}/get_google_api_key`, 
            // !!!!!!!!!!!!! IMPORTANT, READ THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
            // Uncomment the formData below, and remove the objet below it,
            // IF YOU WANT TO UPLOAD A FILE (photo, video, etc...)
            {
                google_user_uid,
                email
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
exports.default = GetGoogleAPIKey;
