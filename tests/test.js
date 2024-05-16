/*

const {
  GetChatGPTOutput,
  GetChatGPTFunction,
  TranslateText,
  TranslateObject,
  GetChatGPTArt,
  EditChatGPTArt,
  UploadFileToCloud,
  DeleteFileFromCloud,
  GetAPISubscriptionLink,
  GetAPIUsageData,
} = require("maslowutils");

const fs = require("fs");
const path = require("path");

*/

// customer id = cus_OEnDYc0MNfYH1k
// api key = 9e118622622956921a7ba76a03193faa

/*

GetChatGPTFunction({
  apiKey: "95561caf4ddcf9af39d3dfaa474558dc",

  functionName: "CompileArduinoCode",
  functionLanguage: "javascript (import/export)",
  functionPurpose:
    "This function compiles some Arduino source code, stored in inoCode",
  functionArgs: "inoCode (string, du code arduino)",
  functionReturnValue:
    "Compile inoCode into hex code, and return the path of a newly created .hex file, if success, null if error. Use the arduino-cli, child-process, and fs",
});

*/

/*

GetAPIUsageData({
  stripeCustomerId: "cus_OCEEHCXw9qG9x4",
});

*/

/*

GetChatGPTOutput({
  prompt: "Qui est le créateur de Pokémon ?",
  apiKey: "95561caf4ddcf9af39d3dfaa474558dc",
});

/*

TranslateText({
  text: "Bonjour, je m'appelle D'Artagneul et je suis un guerrier médiéval et spirituel, du royaume de Bordeciel",
  apiKey: "95561caf4ddcf9af39d3dfaa474558dc",
  language: "Créole Francais",
});

*/

/*

TranslateObject({
  obj: {
    tudor: "Meunier, tu dors, ton moulin va trop fort",
    gang: "Bonjour, je m'appelle D'Artagneul et je suis un guerrier médiéval et spirituel, du royaume de Bordeciel",
  },
  apiKey: "95561caf4ddcf9af39d3dfaa474558dc",
  language: "Créole Francais",
});

*/

/*

GetChatGPTArt({
  prompt: "A oil painting of Abraham Maslow.",
  apiKey: "95561caf4ddcf9af39d3dfaa474558dc",
  params: {
    imgWidth: 256,
    imgHeight: 256,
  },
});

*/

/*

// pour react native
const file = {
  // Replace with your file URL/path
  uri: 'https://via.placeholder.com/256',
  name: 'image123.jpg',
  type: 'image/jpeg', // Replace with the appropriate file type
};

EditChatGPTArt({
  prompt: "Pikachu with blue skin, smoking a cigar",
  apiKey: "95561caf4ddcf9af39d3dfaa474558dc",
  photoData: createFileStreamFromFilePath(
    "C:/Users/Shadow/Desktop/maslowutils/tests/test_files/pika.png"
  ),
  // pour react native
  // photoData: file,
});

function createFileStreamFromFilePath(filePath) {
  try {
    const fileStream = fs.createReadStream(filePath);

    return fileStream;
  } catch (error) {
    console.log("Error creating blob:", error);
  }
}

*/

/*

function createFileStreamFromFilePath(filePath) {
  try {
    const fileStream = fs.createReadStream(filePath);

    return fileStream;
  } catch (error) {
    console.log("Error creating blob:", error);
  }
}

// pour react native
const file = {
  // Replace with your file URL/path
  uri: 'https://via.placeholder.com/256',
  name: 'image123.jpg',
  type: 'image/jpeg', // Replace with the appropriate file type
};

UploadFileToCloud({
  apiKey: "95561caf4ddcf9af39d3dfaa474558dc",
  fileData: createFileStreamFromFilePath(
    "C:/Users/Shadow/Desktop/maslowutils/tests/test_files/pika.mp4"
  ),
  // pour react native
  // fileData: file,
});

*/

/*

DeleteFileFromCloud({
  publicId: "p6oe30hda41wabzw2ugd",
  apiKey: "95561caf4ddcf9af39d3dfaa474558dc",

  // https://cloudinary.com/documentation/image_upload_api_reference#destroy_optional_parameters
  params: {
    resource_type: "video",
  },
});

*/

// GetAPISubscriptionLink({});
