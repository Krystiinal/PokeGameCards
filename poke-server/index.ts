import express from "express";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

app.get("/api/notes", (req, res) => {
    res.json({ message: "success!" });
})

app.listen(4545, () => {
    console.log("Server running on localhost:4545")
})