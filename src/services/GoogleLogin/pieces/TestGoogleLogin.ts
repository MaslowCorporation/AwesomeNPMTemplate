import GoogleLogin from "../GoogleLogin.js";

export const TestGoogleLogin = async () => {
  console.log(`Some test !`);

  return GoogleLogin({
    params: {
      test_timer_duration: 100000
    },
    progressIntervalMs: 1000,

    onJobCreated: (jobData) => {
      console.log(
        `

To login to your Google account, visit the following URL:

${jobData.verification_url}

and copy/paste this code on the login page: 

${jobData.user_code}

Then come back to this Terminal when done.
        `
      );
    },
    onSuccess: (output) => {
      console.log(`The Google Login is successful !: ${JSON.stringify(output, null, 2)}`);
    },
    onError: (e) => {
      console.log(`An error occurred during the Google Login: ${JSON.stringify(e, null, 2)}`);
    },
    onProgress: (progress) => {
      //console.log(`Job Progress: ${JSON.stringify(progress, null, 2)}`);
    },
    apiKey: "",
    print: false,
    // jobId: "<SOME_JOB_ID>"
  });
};
