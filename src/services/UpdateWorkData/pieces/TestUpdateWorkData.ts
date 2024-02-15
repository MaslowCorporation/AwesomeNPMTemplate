import UpdateWorkData from "../UpdateWorkData.js";

export const TestUpdateWorkData = async () => {
  console.log(`Some test !`);

  return  UpdateWorkData({
    jobId: "xs7ke8fecS8TZv63",
    onSuccess: (jobData) => {
      console.log(`Success: ${JSON.stringify(jobData, null, 2)}`);
    },
    onError: (e: any) => {
      console.log(`Error: ${JSON.stringify(e?.response?.data, null, 2)}`);
    },
    apiKey: "16504dcc6bf00403ed8b9fff549f0d75",
    print: false,
    params: {
      cancel: true
    }
  });
};
