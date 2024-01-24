import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Sercer started at port ${port}`);
});

// ACCESS THE HOME PAGE WITH HTTP
app.get("/",(request, response) => {
     response.send("Hello world")
})