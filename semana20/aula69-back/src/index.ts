import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import dotenv from 'dotenv';
import {fileRouter} from './router/FileRouter';

dotenv.config();
export const app = express();
app.use(cors({ origin: true}));
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/files/", fileRouter);

export default app;