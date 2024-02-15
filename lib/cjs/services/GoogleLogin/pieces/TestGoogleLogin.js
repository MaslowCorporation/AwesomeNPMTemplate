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
exports.TestGoogleLogin = void 0;
const GoogleLogin_js_1 = __importDefault(require("../GoogleLogin.js"));
const TestGoogleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Some test !`);
    return (0, GoogleLogin_js_1.default)({
        params: {
            test_timer_duration: 100000
        },
        progressIntervalMs: 1000,
        onJobCreated: (jobData) => {
            console.log(`

To login to your Google account, visit the following URL:

${jobData.verification_url}

and copy/paste this code on the login page: 

${jobData.user_code}

Then come back to this Terminal when done.
        `);
        },
        onSuccess: (output) => {
            console.log(`The Google Login is successful !: ${JSON.stringify(output, null, 2)}`);
        },
        onError: (e) => {
            console.log(`An error occurred during the Google Login: ${JSON.stringify(e, null, 2)}`);
        },
        onProgress: (progress) => {
            //console.log(`Job Progress: ${JSON.stringify(progress, null, 2)}`);
        },
        apiKey: "",
        print: false,
        // jobId: "<SOME_JOB_ID>"
    });
});
exports.TestGoogleLogin = TestGoogleLogin;
