const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const cookieParser = require('cookie-parser');
const config = require('./config/key');

// 서버에서 분석해서 가져오기
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! 이리오너라!');
});

// 회원가입 기능
app.post('/register', async (req, res) => {
  // 회원가입할 때 필요한 정보들을 client에서 가져오면,
  // 그것들을 데이터 베이스에 넣어준다.

  // body parser를 통해 body에 담긴 정보를 가져온다.
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ Success: false, err });
  }
});

// 로그인 기능
app.post('/login', async (req, res) => {
  // 요청된 이메일 데이터베이스에서 찾기
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
      // 있다면 비밀번호가 맞는지 확인
      const isMatch = await user.comparePassword(req.body.password);
      if (!isMatch) {
        return res.status(400).json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });
      }
      // 맞다면 토큰을 생성하고 저장하기
      const token = await user.generateToken();
      res.cookie('x_auth, token').status(200).json({ loginSuccess: true, userId: user._id });
    }
  } catch (err) {
    res.statue(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
