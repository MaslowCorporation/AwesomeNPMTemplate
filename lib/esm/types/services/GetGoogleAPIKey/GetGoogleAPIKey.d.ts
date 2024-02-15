/**
 *
 * Uncomment this code below, and run the
 *
 * npm run run-service GetGoogleAPIKey
 *
 * command to test this SDK method quickly and dirty ;-)
 *
 **
(async () => {
  await TestGetGoogleAPIKey();
})();
*/
/**
 *
 * @param apiKey, the API Key, a string.
 *
 * @param params, an object of options,
 * for your background job in the backend,
 * if you need to customize the shizzle.
 *
 * @param onSuccess, a callback that gives you the fruit of your backend's
 * hard work
 *
 * @param onError, a callback when the shizzle got messy.

 * @param print, do we print some basic logging info ?
 *
 * @returns
 *
 * Short version without background work*/
export default function GetGoogleAPIKey({ onSuccess, onError, google_user_uid, email, print, }: {
    onSuccess?: (output: any) => void;
    onError?: (error: Error) => void;
    google_user_uid: string;
    email: string;
    print?: boolean;
}): Promise<string | null>;
//# sourceMappingURL=GetGoogleAPIKey.d.ts.map