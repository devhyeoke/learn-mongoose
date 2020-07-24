const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const ejs  = require('ejs');
require('dotenv').config();

// 메인 라우터 설정
const indexRouter = require('./routes/index');
const connect = require('./schemas');

// express app 생성
const app = express();
connect();

//  뷰 설정
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.set('port', process.env.PORT || 8001);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    // 요청이 왔을 때 세션에 수정사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정
	resave: false, 
	// 세션에 저장할 내역이 없더라도 세션을 저장할 것인지에 대한 설정
	// 보통 방문자를 추적할 때 사용함
	saveUninitialized: false, 
	secret: process.env.COOKIE_SECRET,
	cookie: {
		httpOnly: true,
		secure: false,
	},
}));
app.use(flash());

// router url 설정
app.use('/', indexRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
