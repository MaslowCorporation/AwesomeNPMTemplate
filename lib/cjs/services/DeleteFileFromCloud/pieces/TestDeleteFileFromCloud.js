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
exports.TestDeleteFileFromCloud = void 0;
const DeleteFileFromCloud_js_1 = __importDefault(require("../DeleteFileFromCloud.js"));
const TestDeleteFileFromCloud = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Some test !`);
    return (0, DeleteFileFromCloud_js_1.default)({
        publicId: "mver72ietpbm0tdrvbfr",
        resourceType: "video",
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
        apiKey: "16504dcc6bf00403ed8b9fff549f0d75",
        print: false,
        // jobId: "<SOME_JOB_ID>"
    });
});
exports.TestDeleteFileFromCloud = TestDeleteFileFromCloud;
