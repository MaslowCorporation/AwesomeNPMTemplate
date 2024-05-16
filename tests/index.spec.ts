import "mocha";
import { assert } from "chai";
import { GetChatGPTOutput } from "../src/services/GetChatGPTOutput/GetChatGPTOutput";

describe("GetChatGPTOutput", () => {
  it("should be a function", () => {
    assert.isFunction(GetChatGPTOutput);
  });

  it("Here's the test playground", () => {
    /*const expected = "Goodbye from my example modern npm package!";
    const actual = goodBye();
    assert.equal(actual, expected);*/

    GetChatGPTOutput({
      model_chosen: "cacarus",
      apiKey: "Zuzu",
      prompt: "Zukaka",
    });
  });
});
