export type GetChatGPTArtStatus = {
    id: string;
    state: string;
    progress: any;
    returnvalue: {
        answer: {
            result: string;
            inputTokens: number;
            outputTokens: number;
        };
        usage: {
            inputCostDollar: number;
            outputCostDollar: number;
            feeDollar: number;
            totalCostDollar: number;
            totalCostAPICredits: number;
            APICreditsLeft: number;
        };
    } | any;
    data: {
        prompt: string;
        model_chosen: string;
        api_endpoint_name: string;
        creation_time_unix: number;
        hashedAPIKey: string;
    } | any;
};
//# sourceMappingURL=GetChatGPTArtStatus.d.ts.map