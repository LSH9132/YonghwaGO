const sqlite3 = require('sqlite3');
const path = require('node:path');

const db = new sqlite3.Database(path.join(process.cwd(), 'db', 'notification.db'), sqlite3.OPEN_READWRITE, (err) => {
  console.log('Connecting notification db...');
  if (err) {
    console.error(err);
  } else {
    console.log('Notification database has connected.');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// const closeDatabaseAndExit = () => {
//   db.close(async (err) => {
//     if (err) {
//       console.error('Error closing notification database:', err);
//       // process.exit(1); // 에러 종료
//     } else {
//       console.log('Notification database has been closed.');
//       // process.exit(0); // 정상 종료
//     }
//   });
// };

// process.on('exit', closeDatabaseAndExit);
// process.on('SIGINT', closeDatabaseAndExit); // Ctrl+C 종료
// process.on('SIGTERM', closeDatabaseAndExit); // 프로세스 종료 시그널

exports.get = (req, res, next) => {
  console.log('succ')
  // res.render('index', { title: 'Express' });
  return next();
}

// db.close((err) => {
//   console.log()
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully closed notification db.');
//   }
// });

// var express = require('express');
// var router = express.Router();

// router.get('/:id', function (req, res) {
//   return res.send(req.params.id + ' page');
// });

// module.exports = router;