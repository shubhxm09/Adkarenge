// index.js
const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/ping', (req,res)=>res.json({ok: true}));
app.listen(5000, ()=>console.log('Server up on 5000'));
