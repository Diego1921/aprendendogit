const express = require('express');

const app = espress()
 app.get('/teste',(req, res)=> {
    return res.json({hello: 'word alterado'})

 });

 app.listen(3333);