const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const port = 5000;

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("./dist"));

app.post("/dream", async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
    });

    const { url } = aiResponse.data.data[0];

    return res.json(url);

  } catch (error) {
    console.error(error)
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});

