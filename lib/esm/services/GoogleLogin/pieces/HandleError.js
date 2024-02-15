/**
 *
 * @param print
 * @param error
 * @param onError
 *
 * @returns
 */
export function HandleError(print, error, onError) {
    print && console.error("An error occurred:", error);
    if (onError) {
        onError(error);
    }
    return null;
}
