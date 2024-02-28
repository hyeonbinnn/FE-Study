// http 패키지를 사용한다는 코드, require 해당패키지를 불러와서 사용할 수 있게 하는 역할
const http = require('http');
const { resourceUsage } = require('process');
const { runInNewContext } = require('vm');

http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200);
      res.end('main url');
    } else if (req.url === '/upload') {
      res.writeHead(200);
      res.end('upload url');
    } else if (req.url === '/delete') {
      res.writeHead(200);
      res.end('delete url');
    } else {
      res.writeHead;
      404;
      res.end('not found!!!');
    }
  })
  .listen(3000, () => {
    console.log('3000번 포트 서버 접속 완료!!');
  });
