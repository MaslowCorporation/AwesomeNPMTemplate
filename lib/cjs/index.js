"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Your Own SDK Methods imports
/* PLOP_INJECT_IMPORT */
const GoogleLogin_js_1 = __importDefault(require("./services/GoogleLogin/GoogleLogin.js"));
const GetGoogleAPIKey_js_1 = __importDefault(require("./services/GetGoogleAPIKey/GetGoogleAPIKey.js"));
const GetGPTCode_js_1 = __importDefault(require("./services/GetGPTCode/GetGPTCode.js"));
const GetChatGPTArt_js_1 = __importDefault(require("./services/GetChatGPTArt/GetChatGPTArt.js"));
const TranslateObject_js_1 = __importDefault(require("./services/TranslateObject/TranslateObject.js"));
const TranslateText_js_1 = __importDefault(require("./services/TranslateText/TranslateText.js"));
const GetChatGPTFunction_js_1 = __importDefault(require("./services/GetChatGPTFunction/GetChatGPTFunction.js"));
const CompileArduinoSketch_js_1 = __importDefault(require("./services/CompileArduinoSketch/CompileArduinoSketch.js"));
const CreateArduinoSketch_js_1 = __importDefault(require("./services/CreateArduinoSketch/CreateArduinoSketch.js"));
const UploadFileToCloud_js_1 = __importDefault(require("./services/UploadFileToCloud/UploadFileToCloud.js"));
const DeleteFileFromCloud_js_1 = __importDefault(require("./services/DeleteFileFromCloud/DeleteFileFromCloud.js"));
const TransformCloudFile_js_1 = __importDefault(require("./services/TransformCloudFile/TransformCloudFile.js"));
const GetGPTOutput_js_1 = __importDefault(require("./services/GetGPTOutput/GetGPTOutput.js"));
// Starterpack SDK Methods imports
const GetWorkStatus_js_1 = __importDefault(require("./services/GetWorkStatus/GetWorkStatus.js"));
const GetAPISubscriptionLink_js_1 = __importDefault(require("./services/GetAPISubscriptionLink/GetAPISubscriptionLink.js"));
const Buy5KAPICreditsLink_js_1 = __importDefault(require("./services/Buy5KAPICreditsLink/Buy5KAPICreditsLink.js"));
const GetAPIClientInfo_js_1 = __importDefault(require("./services/GetAPIClientInfo/GetAPIClientInfo.js"));
const UpdateWorkData_js_1 = __importDefault(require("./services/UpdateWorkData/UpdateWorkData.js"));
exports.default = {
    // Your Own SDK Methods
    /* PLOP_INJECT_SDK_METHOD */
    GoogleLogin: GoogleLogin_js_1.default,
    GetGoogleAPIKey: GetGoogleAPIKey_js_1.default,
    GetGPTCode: GetGPTCode_js_1.default,
    GetChatGPTArt: GetChatGPTArt_js_1.default,
    TranslateObject: TranslateObject_js_1.default,
    TranslateText: TranslateText_js_1.default,
    GetChatGPTFunction: GetChatGPTFunction_js_1.default,
    CompileArduinoSketch: CompileArduinoSketch_js_1.default,
    CreateArduinoSketch: CreateArduinoSketch_js_1.default,
    UploadFileToCloud: UploadFileToCloud_js_1.default,
    DeleteFileFromCloud: DeleteFileFromCloud_js_1.default,
    TransformCloudFile: TransformCloudFile_js_1.default,
    GetGPTOutput: GetGPTOutput_js_1.default,
    // Starterpack SDK Methods
    GetAPISubscriptionLink: GetAPISubscriptionLink_js_1.default,
    Buy5KAPICreditsLink: Buy5KAPICreditsLink_js_1.default,
    GetAPIClientInfo: GetAPIClientInfo_js_1.default,
    GetWorkStatus: GetWorkStatus_js_1.default,
    UpdateWorkData: UpdateWorkData_js_1.default,
};
