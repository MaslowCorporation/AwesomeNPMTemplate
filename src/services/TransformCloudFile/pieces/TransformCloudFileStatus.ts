export type TransformCloudFileStatus = {
    id: string; // the id of of the BullMQ job in the beckend
    state: string; // Current state of the BullMQ job (e.g., 'completed', 'failed', 'active', etc.)
    progress: any; // Some optional job progress data. Any serializable data can be there.

    returnvalue: {
        answer: {
            result: string; // The actual answer or result obtained
            inputTokens: number; // Number of input tokens used
            outputTokens: number; // Number of output tokens generated
        };
        usage: {
            inputCostDollar: number; // Cost in dollars for input tokens
            outputCostDollar: number; // Cost in dollars for output tokens
            feeDollar: number; // Fee in dollars
            totalCostDollar: number; // Total cost in dollars
            totalCostAPICredits: number; // Total cost in API credits
            APICreditsLeft: number; // Remaining API credits
        };
    } | any;

    data: {
        prompt: string; // The prompt for which the response was generated
        model_chosen: string; // The chosen model for generating the response
        api_endpoint_name: string; // Name of the API endpoint used
        creation_time_unix: number; // Unix timestamp of response creation time
        hashedAPIKey: string; // Hashed API key used for the request
    } | any;
};
