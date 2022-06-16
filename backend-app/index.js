const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const port = process.env.PORT || 3000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/upload_files", upload.single("avatar"), (req, res) => {
  console.log(req.body);
  res.json({ message: "Successfully uploaded files" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})