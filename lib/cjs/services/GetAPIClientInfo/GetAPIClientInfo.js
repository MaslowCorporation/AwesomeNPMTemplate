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
function GetAPIClientInfo({ onSuccess, onError, apiKey, params, print = true, }) {
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
            const response = yield axios_1.default.post(`${constants_js_1.Constants.api_base_url_web}/get_api_client_info?apiKey=${apiKey}`, 
            // !!!!!!!!!!!!! IMPORTANT, READ THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
            // Uncomment the formData below, and remove the objet below it,
            // IF YOU WANT TO UPLOAD A FILE (photo, video, etc...)
            //formData
            // !!!!!!!!!!!!! IMPORTANT, READ THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!
            // This objet is used if the request doesn't send a file
            // If your request sends a file to the server, 
            // remove the object below, and uncomment formData above
            { params });
            const responseData = response.data;
            const prettyResponseData = JSON.stringify(responseData, null, 2);
            if (response.status >= 200 && response.status < 300) {
                const answer = responseData.answer;
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
exports.default = GetAPIClientInfo;
