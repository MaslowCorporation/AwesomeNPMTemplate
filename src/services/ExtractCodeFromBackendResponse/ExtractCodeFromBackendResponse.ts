import { GetCodeFromSnippet } from "../GetCodeFromSnippet/GetCodeFromSnippet.js";


export function ExtractCodeFromBackendResponse(latestJobStatus: any, onSuccess: ((output: any) => void) | undefined) {
  

  const returnvalue = latestJobStatus?.returnvalue;
  const rawTxtAnswer = returnvalue.answer.result;
  const codePieces = GetCodeFromSnippet(rawTxtAnswer);
  const biggestCodePiece = codePieces?.at(0);
  const codePart = biggestCodePiece ?? rawTxtAnswer;

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
