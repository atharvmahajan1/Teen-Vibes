const OpenAI = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const multerS3 = require("multer-s3");
const mammoth = require("mammoth");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");
const stream = require("stream");

// Configure Multer for file upload
// const upload = multer({ dest: "synopsis/files/" });

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const storage = multer.memoryStorage();
const upload = multer({ storage: multer.memoryStorage() });
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "sid-test-bucket001",
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString());
//     },
//   }),
// });

const openai = new OpenAI(`Bearer ${process.env.OPENAI_API_KEY}`);

exports.openAiTextController = catchAsyncErrors(async (req, res, next) => {
  const { text } = req.body;
  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `Using the scale of Becks Depression Inventory, want you to score the words in this post without diagnosing the mental state or depression: ${text} `,
    max_tokens: 2070,
    temperature: 0,
  });
  // let response = await completion.data.choices[0].text;

  res.status(200).json({
    success: true,
    completion,
  });

  console.log(completion);
});

exports.opeAiFileController = [
  upload.single("file"),
  catchAsyncErrors(async (req, res, next) => {
    console.log("this is working");
    const file = req.file;
    console.log(file);
    // console.log(file.mimetype);
    let text;

    if (file.mimetype === "text/plain") {
      text = file.buffer.toString("utf-8");
    } else if (file.mimetype === "application/pdf") {
      text = await pdfParse(file.buffer);
    } else if (
      file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({ buffer: file.buffer });
      text = result.value;
    } else {
      return res.status(400).json({ message: "Unsupported file type" });
    }

    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Using the scale of Becks Depression Inventory, want you to score the words in this post without diagnosing the mental state or depression: ${text} `,
      max_tokens: 2070,
      temperature: 0,
    });

    res.status(200).json({
      success: true,
      completion,
    });
  }),
];
