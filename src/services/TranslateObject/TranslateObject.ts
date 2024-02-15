import { Delay } from "../Delay/Delay.js";
import GetGPTCode from "../GetGPTCode/GetGPTCode.js";
import { TryParse } from "../TryParse/TryParse.js";
import { TestTranslateObject } from "./pieces/TestTranslateObject.js";

/**
 *  
 * Uncomment this code below, and run the 
 * 
 * npm run run-service TranslateObject
 * 
 * command to test this SDK method quickly and dirty ;-)
 * 
 **
(async () => {
  await TestTranslateObject();
})();
*/

/**
 * 
 * @param progressIntervalMs, 
 * how much time between each 
 * job progress callback update 
 * , in milliseconds
 * 
 * @param prompt, the question you want to ask to ChatGPT. A string.
 * 
 * @param apiKey, the MaslowGPT API Key, a string.
 * 
 * @param params, an object of options, 
 * for your background job in the backend, 
 * if you need to customize the shizzle.
 * 
 * @param jobId, a job id, 
 * in order to keep polling for status of an existing job,
 * in case of a network disruption
 * 
 * @param onJobCreated, a callback that gives you the job id 
 * of the latest job you just created in the backend.
 * This job id allows you to check your background job, using 
 * the GetWorkStatus method, and also this method 
 * (using the jobId property).
 * 
 * @param onSuccess, a callback that gives you the fruit of your backend's  
 * hard work
 * 
 * @param onError, a callback when the shizzle got messy.
 *  
 * @param onProgress, a callback that gets called every progressIntervalMs
 * milliseconds, to give updates on the ongoing background job
 * 
 * @param print, do we print some basic logging info ?
 * 
 * @param model_chosen, the openai model you want to use.
 * "gpt-4", "gpt-3.5-turbo", etc...
 * 
 * @returns 
 */
export default async function TranslateObject({
  model_chosen,
  obj,
  language,
  apiKey,
  retries = 10,
  progressIntervalMs = 1000,
  onJobCreated,
  onSuccess,
  onError,
  onProgress,
  print = false,
  jobId,
}: {
  model_chosen?: string;
  apiKey: string;
  obj: any;
  language: string;
  retries?: number;
  progressIntervalMs: number;
  onProgress?: (progress: any) => void;
  onSuccess?: (output: any) => void;
  onJobCreated?: (jobId: string) => void;
  onError?: (error: any) => void;
  print?: boolean;
  jobId?: string;
}): Promise<any> {
  try {
    // Split obj into subobjects if it contains more than 15 keys
    const subObjects: any[] = [];
    if (Object.keys(obj).length > 15) {
      let keys = Object.keys(obj);
      while (keys.length > 0) {
        subObjects.push(
          keys.splice(0, 15).reduce((acc: any, key) => {
            acc[key] = obj[key];
            return acc;
          }, {})
        );
      }
    } else {
      subObjects.push(obj);
    }

    const translatedObjects: any[] = [];
    const translatedObjectsRaw: any[] = [];

    let itemCount = 0;
    
    

    for (const individualSubObject of subObjects) {
      let retryCount = 0;
      let translatedObjDataRaw: any = null;
      

      while (retryCount <= retries) {
        

        print && console.log(`⌛ ${itemCount + 1} / ${subObjects.length}: Translation in progress`);

        translatedObjDataRaw = await GetGPTCode({
          progressIntervalMs,
          model_chosen,
          prompt: `Translate all the key values of ${JSON.stringify(individualSubObject, null, 2)} to ${language}, and return the translated JSON object.`,
          onSuccess: (chatGPTOutput) => {
            print && console.log(`✅ ${itemCount + 1} / ${subObjects.length}: Translation successful! Take a look: ${chatGPTOutput.answer.codePart}`);
          },
          onProgress: (progress) => { },
          onError: (e) => {
            print && console.log(`❌ ${itemCount + 1} / ${subObjects.length}: Translation failed... Let's retry ;-)`);
          },
          apiKey,
        });

        // if there's a result
        if (translatedObjDataRaw !== null) {
          // if this result is parseable into an object
          if (TryParse(translatedObjDataRaw.answer.codePart)) {
            break; // Break the loop if we got an object from result
          } else {
            print && console.log(`❌ ${itemCount + 1} / ${subObjects.length}: Oops....We couldn't parse the raw translation into an object... Let's retry ;-)`);
          }
        } 

        retryCount++;

        await Delay(progressIntervalMs)

        // Optionally, you can introduce a delay between retries here
        // For example: await new Promise(resolve => setTimeout(resolve, 1000));
      }

      

      if (translatedObjDataRaw === null) {
        throw new Error(`❌ The object translation failed after ${retries + 1} retries. Giving up.`);
      }

      const codePartObj = JSON.parse(translatedObjDataRaw.answer.codePart);
      translatedObjects.push(codePartObj);
      translatedObjectsRaw.push(translatedObjDataRaw)

      

      itemCount++;
    }

    

    const bigTranslatedObject = Object.assign({}, ...translatedObjects);

    const totalCost = translatedObjectsRaw.reduce(
      (acc, translatedObjDataRaw) => {
        const usage = translatedObjDataRaw.usage;
        acc.inputCostDollar += usage.inputCostDollar;
        acc.outputCostDollar += usage.outputCostDollar;
        acc.feeDollar += usage.feeDollar;
        acc.totalCostDollar += usage.totalCostDollar;
        acc.totalCostAPICredits += usage.totalCostAPICredits;
        acc.APICreditsLeft = usage.APICreditsLeft;
        return acc;
      },
      {
        inputCostDollar: 0,
        outputCostDollar: 0,
        feeDollar: 0,
        totalCostDollar: 0,
        totalCostAPICredits: 0,
        APICreditsLeft: 0,
      }
    );

    const result = {
      answer: bigTranslatedObject,
      usage: totalCost,
    };

    print && console.log(
      `
✅  The Object Translation is successful! Take a look: 

${JSON.stringify(bigTranslatedObject, null, 2)}

✅ Mission accomplished !!!!
`);

    if (onSuccess) {
      onSuccess(result);
    }

    return result;
  } catch (error) {
    if (onError) {
      onError(error);
    }
    return null;
  }
}
