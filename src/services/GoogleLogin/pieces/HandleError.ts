/**
 *
 * @param print
 * @param error
 * @param onError
 *
 * @returns
 */
export function HandleError(
  print: boolean,
  error: any,
  onError: ((error: Error) => void) | undefined
) {
  print && console.log("An error occurred:", error);

  if (onError) {
    onError(error);
  }

  return null;
}
