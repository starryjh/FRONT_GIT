const express =require('express');
const app = express();
const path = require('path');
const fs = require('fs')

const PORT = 3000;

app.get('/cookies', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','cookies.html'));
})
app.listen(PORT, ()=>{
    console.log('server starting', PORT);
})

//git init - 형상관리 시작
//git and cooie-app.js
//git add . (모든파일을 올리기)
//git commit -m "설명"
//git log ; 커밋 정보 확인