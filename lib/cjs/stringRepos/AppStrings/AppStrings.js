"use strict";
/* PLOP_INJECT_IMPORT */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_strings = exports.InitAppStrings = void 0;
const i18next_1 = __importDefault(require("i18next"));
const translations = {
    en: {
        translation: {
            /* PLOP_INJECT_SRC_STRING */
            "xhpzrpkYg": "The program:",
            "xl4Ab8WU": "\"File upload in progress! Please wait, darling...\"",
            "xhpzrpkY": "The function:",
            "xziOfYCt": "Result:",
            "xcCehb3i": "Code:",
            "xLFuFy6p": "Failed request...",
            "xFN0o4dh": "Result:",
            "x3ezGsvB": "Request successfully completed!",
            "xKMRBTG": "A.I. model used:",
            "xDWbf3WQ": "Selected A.I. model:",
            "welcome": "Hello",
            "country": "The string 'fr' does not require translation as it appears to be a language code for French.",
            "x7CTz5XP": "Translation of object in progress...",
            "xWtfTMu": "Text translation in progress.... Please wait...",
            "x8H4nyVx": "Tentative No.",
            "xlqZy0Sf": "Text translation successful!",
            "xlqky0Sfn3": "Unable to translate this text",
            "xlqkylp0Sfn3": "An error has occurred",
            /* PLOP_INJECT_SRC_END */
        }
    },
    /* PLOP_INJECT_INTL_STRINGS */
};
function InitAppStrings() {
    const i18nApp2 = i18next_1.default.createInstance();
    i18nApp2.init({
        fallbackLng: 'en',
        returnNull: false,
        resources: translations,
    });
    return i18nApp2;
}
exports.InitAppStrings = InitAppStrings;
const app_strings = InitAppStrings();
exports.app_strings = app_strings;
