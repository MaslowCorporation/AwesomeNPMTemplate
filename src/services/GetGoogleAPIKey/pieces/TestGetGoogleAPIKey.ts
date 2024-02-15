import GetGoogleAPIKey from "../GetGoogleAPIKey.js";

export const TestGetGoogleAPIKey = async () => {
  console.log(`Some test !`);

  return GetGoogleAPIKey({
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
};
