import GetWorkStatus from "../GetWorkStatus.js";

export const TestGetWorkStatus = async () => {
  console.log(`Some test !`);

  return  GetWorkStatus({
    jobId: "xOuQ5H3WMB6L2T7",
    onSuccess: (jobData) => {
      console.log(`Success: ${JSON.stringify(jobData, null, 2)}`);
    },
    onError: (e: any) => {
      console.log(`Error: ${JSON.stringify(e?.response?.data, null, 2)}`);
    },
    apiKey: "16504dcc6bf00403ed8b9fff549f0d75",
    print: false,
  });
};
