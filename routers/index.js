const express = require('express');
const router = express.Router();

const path = require('node:path');

// const main = require('./main/index.js');
// const user = require('./users/index.js');
// const login = require('./login/index.js');
const middleware = require('./middleware.controller');

router.use('/', middleware);

// router.use('*', middleware);
// // router.use('/', main);
// // router.use('/user', user);
// // router.use('/login', login);
// router.use('/', async (req, res, next) => {
//   const urlPath = req.path;

//   if (urlPath.toLowerCase().startsWith('/api')) {
//     // API 요청 처리
//     return next();
//   }

//   // 정적 파일 제공
//   try {
//     const filePath = path.join(process.cwd(), 'public', 'index.html');
//     res.sendFile(filePath);
//   } catch (error) {
//     // 에러 처리
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

module.exports = router;