const express = require('express');
const router = express.Router();
const path = require('node:path');

const logger = require('logger');

const uuid = require('uuid')

const api = require('./api/index');

router.use('/api', api);

router.use('/', (req, res, next) => {
  logger(`IPaddress: ${req.ip} | reqURL: ${req.url} | secretId: ${req.cookies.secretid}`);

  if (!req.cookies.secretid) {
    res.cookie('secretid', uuid.v4(), {
      httpOnly: true,
      sameSite: 'strict', // 적절한 SameSite 설정을 고려해주세요
      // secure: true, // HTTPS에서만 쿠키 전송
      // maxAge: 3600000, // 적절한 만료 시간 설정 (예: 1시간)
      // domain: 'yourdomain.com' // 적절한 도메인 설정
    });
  }

  const urlPath = req.path;

  if (urlPath.toLowerCase().startsWith('/api')) {
    // API 요청 처리
    return next();
  }

  // 정적 파일 제공
  try {
    const filePath = path.join(process.cwd(), 'public', 'index.html');
    res.sendFile(filePath);
  } catch (error) {
    // 에러 처리
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
// router.all('*', controller.all);

module.exports = router;