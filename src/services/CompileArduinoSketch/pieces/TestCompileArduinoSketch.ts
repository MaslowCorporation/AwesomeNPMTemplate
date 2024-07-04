import { Constants } from "../../../constants/constants.js";
import CompileArduinoSketch from "../CompileArduinoSketch.js";

export const TestCompileArduinoSketch = async () => {
  console.log(`Some test !`);

  return CompileArduinoSketch({
    codeString: `
// Pin number where the LED is connected
const int ledPin = 13;

void setup() {
  // Set the LED pin as an output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Turn the LED on
  digitalWrite(ledPin, HIGH);
  delay(1000); // Wait for 1 second

  // Turn the LED off
  digitalWrite(ledPin, LOW);
  delay(1000); // Wait for 1 second
}
    
`,
    progressIntervalMs: 1000,

    onJobCreated: (jobId) => {
      console.log(`The background HTTP job got created successfully ! it's id is: ${jobId}`);
    },
    onSuccess: (output) => {
      console.log(`Success: ${JSON.stringify(output, null, 2)}`);
    },
    onError: (e) => {
      console.log(`Error: ${JSON.stringify(e?.response?.data, null, 2)}`);
    },
    onProgress: (progress) => {
      console.log(`Job Progress: ${JSON.stringify(progress, null, 2)}`);
    },
    apiKey: Constants.MASLOW_GPT_API_KEY,
    print: false,
    // jobId: "<SOME_JOB_ID>"
  });
};
