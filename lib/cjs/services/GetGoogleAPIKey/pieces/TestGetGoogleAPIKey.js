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
exports.TestGetGoogleAPIKey = void 0;
const GetGoogleAPIKey_js_1 = __importDefault(require("../GetGoogleAPIKey.js"));
const TestGetGoogleAPIKey = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Some test !`);
    return (0, GetGoogleAPIKey_js_1.default)({
        onSuccess: (output) => {
            console.log(`Success: ${JSON.stringify(output, null, 2)}`);
        },
        onError: (e) => {
            console.log(`Error`);
        },
        google_user_uid: "zizix",
        email: "...",
        print: false,
    });
});
exports.TestGetGoogleAPIKey = TestGetGoogleAPIKey;
