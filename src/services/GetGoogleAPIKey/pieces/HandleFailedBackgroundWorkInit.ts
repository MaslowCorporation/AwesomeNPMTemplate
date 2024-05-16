/**
 *
 * @param response
 * @param print
 * @param onError
 *
 * @returns
 */
export function HandleFailedBackgroundWorkInit(
  response: any,
  print: boolean,
  onError: ((error: Error) => void) | undefined
) {
  const prettyResponseData = JSON.stringify(response?.data, null, 2);

  // Handle error (non-2xx response)
  print && console.log("background HTTP job creation failed. " + prettyResponseData);
  print && console.log("Status:", response?.status);

  if (onError) {
    onError(response?.data);
  }

  return null;
}
