import express from "express";
import cors from "cors";
import UserRoute from "./route/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// ubah port localhost disini dan mengecek server sudah running
app.listen(4000, ()=> console.log('Server up and running...'));
