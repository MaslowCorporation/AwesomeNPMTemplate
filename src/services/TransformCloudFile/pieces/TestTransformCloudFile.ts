import TransformCloudFile from "../TransformCloudFile.js";

export const TestTransformCloudFile = async () => {
  console.log(`Some test !`);

  const public_ids = ['tudnuwusxsluzptuf9ij', 'ijfxx8qxpdmkya7kvk17', 'z8asmhowvbdrkyzp0ec7', 'samples:sea-turtle']; // Array of public_ids of videos to concatenate
  const width = 1080; // Width of the final video
  const height = 1920; // Height of the final video

  return TransformCloudFile({
    first_asset_id_ext: "tudnuwusxsluzptuf9ij.mp4",
    transforms: {
      resource_type: 'video',
      transformation: [
        // #VIDEO1
        { 'height': height, 'width': width, 'crop': "pad", 'background': "black", 'gravity': "center" },
        {
          color: "red",
          background: "white",
          width: width / 3,
          crop: "fit",
          overlay: {
            font_family: "Neucha",
            font_size: 55,
            font_weight: "bold",
            text_align: "center",
            text: "Etape 1 Le texte est textuel texterisation caca pipo nimo fufu lorem ipsum caca cucu bunda cacologiquement fin"
          },
        },
        { 'flags': 'layer_apply', "gravity": "north_west" },

        // #VIDEO2
        { 'flags': "splice", 'overlay': `video:${public_ids[1]}` },
        { 'height': height, 'width': width, 'crop': "pad", 'background': "black", 'gravity': "center" },
        {
          color: "red",
          background: "white",
          width: width / 3,
          crop: "fit",
          overlay: {
            font_family: "Neucha",
            font_size: 55,
            font_weight: "bold",
            text_align: "center",
            text: "Etape 2 Le texte est textuel texterisation caca pipo nimo fufu lorem ipsum caca cucu bunda cacologiquement fin"
          },
        },
        { 'flags': 'layer_apply', "gravity": "north_east" },

        // #VIDEO3
        { 'flags': "splice", 'overlay': `video:${public_ids[2]}` },
        { 'height': height, 'width': width, 'crop': "pad", 'background': "black", 'gravity': "center" },
        {
          color: "red",
          background: "white",
          width: width / 3,
          crop: "fit",
          overlay: {
            font_family: "Neucha",
            font_size: 55,
            font_weight: "bold",
            text_align: "center",
            text: "Etape 3 Le texte est textuel texterisation caca pipo nimo fufu lorem ipsum caca cucu bunda cacologiquement fin"
          },
        },
        { 'flags': 'layer_apply', "gravity": "south_west" },

        // #VIDEO4
        { 'flags': "splice", 'overlay': `video:${public_ids[3]}` },
        { 'height': height, 'width': width, 'crop': "pad", 'background': "black", 'gravity': "center" },
        {
          color: "red",
          background: "white",
          width: width / 3,
          crop: "fit",
          overlay: {
            font_family: "Neucha",
            font_size: 55,
            font_weight: "bold",
            text_align: "center",
            text: "Etape 4 Le texte est textuel texterisation caca pipo nimo fufu lorem ipsum caca cucu bunda cacologiquement fin"
          },
        },
        { 'flags': 'layer_apply', "gravity": "south_east" },
      ],
    },
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
    apiKey: "<SOME_API_KEY>",
    print: false,
  });
};
