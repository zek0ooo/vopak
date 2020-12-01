const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/device-config', ()=>{});

app.listen(5000, ()=>{});
