const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const commentRoute = require('./routes/commentRoute');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err)
    });

const app = express();

// middlewares

app.use(cookieParser());
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});