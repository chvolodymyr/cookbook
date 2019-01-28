const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const recipe = require('./router/recipeRouter');
const history = require('./router/historyRouter');

const app = express();
const port = process.env.PORT || 5000;


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(cors({origin:true}));


mongoose.connect("mongodb://localhost:27018/CookBook", { useNewUrlParser: true , useCreateIndex: true,} );



app.use('/api/recipe',recipe);
app.use('/api/history',history);

app.listen(port, ()=> console.log(`Server has been started on ${port}`));
