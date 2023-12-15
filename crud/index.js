import express from "express";
import cors from "cors";
import UserRoute from "./route/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// kalo ada port yang conflict krn port sama ubah disini
app.listen(4000, ()=> console.log('Server up and running...'));
