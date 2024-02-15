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
exports.TestGetChatGPTFunction = void 0;
const constants_js_1 = require("../../../constants/constants.js");
const GetChatGPTFunction_js_1 = __importDefault(require("../GetChatGPTFunction.js"));
const TestGetChatGPTFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Some test !`);
    return (0, GetChatGPTFunction_js_1.default)({
        model_chosen: "gpt-4",
        functionName: "CompileArduinoCode",
        functionLanguage: "javascript (import/export)",
        functionPurpose: "This function compiles some Arduino source code, stored in inoCode",
        functionArgs: "inoCode (string, du code arduino)",
        functionReturnValue: "Compile inoCode into hex code, and return the path of a newly created .hex file, if success, null if error. Use the arduino-cli, child-process, and fs",
        progressIntervalMs: 1000,
        onJobCreated: (jobId) => {
            console.log(`The background HTTP job got created successfully ! it's id is: ${jobId}`);
        },
        onSuccess: (output) => {
            console.log(`Success: ${JSON.stringify(output, null, 2)}`);
        },
        onError: (e) => {
            var _a;
            console.log(`Error: ${JSON.stringify((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data, null, 2)}`);
        },
        onProgress: (progress) => {
            console.log(`Job Progress: ${JSON.stringify(progress, null, 2)}`);
        },
        apiKey: constants_js_1.Constants.MASLOW_GPT_API_KEY,
        print: false,
        // jobId: "<SOME_JOB_ID>"
    });
});
exports.TestGetChatGPTFunction = TestGetChatGPTFunction;
