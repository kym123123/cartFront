const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname)); // 현재 js파일이 실행중인 경로 = __dirname

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/index.html'));
});

app.listen(port, () => console.log('listening on port', port));
