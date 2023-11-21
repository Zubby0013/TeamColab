import express, { Application } from "express";
import cors from "cors"

const app: Application = express();
const port: number = 1000;

app.use(express.json());
app.use(cors());

const server = app.listen(port, () =>{
    console.log("server listening on port: ", port)
});

process.on("uncaughtException", (err: Error) =>{
    console.log("uncaughtException", err)
    process.exit(1);
})

process.on("unhandledRejection", (reason) =>{
    console.log("unhandledRejection", reason)
    server.close(() =>{
        process.exit(1);
    })
})