const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key');

const bodyParser = require('body-parser');
const { User } = require('./models/User');

//클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongooes = require('mongoose');
//connector 보호해야함
mongooes.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected ... '))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

app.post('/register', (req, res) => {
    //회원 가입 시 필요한 정보들을 client에서 가져오면
    //데이터 베이스에 넣어준다.

    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true });
    });
});

app.listen(port, () => console.log(`Express app listen ${port}...`));