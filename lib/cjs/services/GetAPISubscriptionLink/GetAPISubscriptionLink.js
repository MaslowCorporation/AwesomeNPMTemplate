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
const AppStrings_js_1 = require("../../stringRepos/AppStrings/AppStrings.js");
const axios_1 = __importDefault(require("axios"));
const constants_js_1 = require("../../constants/constants.js");
const RunIfPossible_js_1 = require("../RunIfPossible/RunIfPossible.js");
function GetAPISubscriptionLink({ params, onSuccess, onError, print = true, }) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 
            const response = yield axios_1.default.post(`${constants_js_1.Constants.api_base_url_web}/checkout`, params);
            const responseData = response.data;
            const prettyResponseData = JSON.stringify(responseData, null, 2);
            if (response.status >= 200 && response.status < 300) {
                const answer = responseData;
                // Success (2xx response)
                print && console.log(AppStrings_js_1.app_strings.t("x3ezGsvB"));
                //print && console.log("Response Full data:", prettyResponseData);
                print && console.log(AppStrings_js_1.app_strings.t("xFN0o4dh"), answer);
                (0, RunIfPossible_js_1.RunIfPossible)({ func: onSuccess, args: answer });
                return answer;
            }
            else {
                // Handle error (non-2xx response)
                print && console.log(AppStrings_js_1.app_strings.t("xLFuFy6p"));
                print && console.log(AppStrings_js_1.app_strings.t("xcCehb3i"), response.status);
                print && console.log(AppStrings_js_1.app_strings.t("xziOfYCt"), prettyResponseData);
                (0, RunIfPossible_js_1.RunIfPossible)({ func: onError, args: responseData });
                return null;
            }
        }
        catch (error) {
            // Handle network errors or exceptions
            print && console.error(AppStrings_js_1.app_strings.t("xlqkylp0Sfn3"), (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
            (0, RunIfPossible_js_1.RunIfPossible)({ func: onError, args: (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data });
            return null;
        }
    });
}
exports.default = GetAPISubscriptionLink;
