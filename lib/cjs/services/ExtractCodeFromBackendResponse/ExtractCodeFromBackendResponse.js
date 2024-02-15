"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractCodeFromBackendResponse = void 0;
const GetCodeFromSnippet_js_1 = require("../GetCodeFromSnippet/GetCodeFromSnippet.js");
function ExtractCodeFromBackendResponse(latestJobStatus, onSuccess) {
    const returnvalue = latestJobStatus === null || latestJobStatus === void 0 ? void 0 : latestJobStatus.returnvalue;
    const rawTxtAnswer = returnvalue.answer.result;
    const codePieces = (0, GetCodeFromSnippet_js_1.GetCodeFromSnippet)(rawTxtAnswer);
    const biggestCodePiece = codePieces === null || codePieces === void 0 ? void 0 : codePieces.at(0);
    const codePart = biggestCodePiece !== null && biggestCodePiece !== void 0 ? biggestCodePiece : rawTxtAnswer;
    // Success (2xx response)
    //print && console.log(app_strings.t("x3ezGsvB"), "\n\n");
    // print && console.log(app_strings.t("xFN0o4dh"), "\n\n", answer, "\n\n");
    //print && console.log(app_strings.t("xhpzrpkYg"), "\n\n", codePart, "\n\n");
    const output = { codePart, answer: rawTxtAnswer };
    //print && console.log("Answer:", answer);
    returnvalue.answer = output;
    onSuccess && onSuccess(returnvalue);
    return returnvalue;
}
exports.ExtractCodeFromBackendResponse = ExtractCodeFromBackendResponse;
