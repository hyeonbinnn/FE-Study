const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { User } = require('./models/user');
const { auth } = require('./middleware/auth');
const mongoose = require('mongoose');

// 서버에서 분석해서 가져오기
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB에 연결되었습니다.');
  })
  .catch((error) => {
    console.error('MongoDB 연결에 실패했습니다.', error);
  });

app.get('/', (req, res) => res.send('Hello World! 이리오너라!'));

app.get('/api/hello', (req, res) => {
  res.send('헬로우 미스터 정');
});

app.get('/api/greet', (req, res) => {
  res.send('안녕, 나는 정저저저저저저저정쓰');
});

// 회원가입 기능
app.post('/api/users/register', async (req, res) => {
  // 회원가입할 때 필요한 정보들을 client에서 가져오면,
  // 그것들을 데이터 베이스에 넣어준다.

  // body parser를 통해 body에 담긴 정보를 가져온다.
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.json({ success: false, err });
  }
});

// 로그인 기능
app.post('/api/users/login', async (req, res) => {
  // 요청된 이메일 데이터베이스에서 찾기
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
    }
    // 있다면 비밀번호가 맞는지 확인
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });
    }
    // 맞다면 토큰을 생성하고 저장하기
    const token = await user.generateToken();
    res.cookie('x_auth', token).status(200).json({ loginSuccess: true, userId: user._id });
  } catch (err) {
    return res.status(400).send(err);
  }
});

// role 0: admin
// role 1: 일반 유저

// 사용자 인증
app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? true : false,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.user._id }, { token: '' });
    return res.status(200).send({ success: true });
  } catch (error) {
    return res.json({ success: false, error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
