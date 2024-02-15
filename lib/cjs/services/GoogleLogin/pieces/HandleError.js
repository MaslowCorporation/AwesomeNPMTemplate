"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleError = void 0;
/**
 *
 * @param print
 * @param error
 * @param onError
 *
 * @returns
 */
function HandleError(print, error, onError) {
    print && console.error("An error occurred:", error);
    if (onError) {
        onError(error);
    }
    return null;
}
exports.HandleError = HandleError;
