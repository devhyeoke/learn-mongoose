# LEARN MONGOOSE
:blush: &nbsp;&nbsp; **INDEX**
- Setup Project
- Install mongoDB & mongoose
- Add ".env" file
- Start Server

## Setup Project
```
$ git clone https://github.com/devhyeoke/learn-mongoose.git
$ cd learn-mongoose
```

## Install mongoDB & mongoose

1. Install mongoDB
```
// install mongoDB
$ brew i nstall mongodb/brew
$ brew install mongodb-commuity@4.2

// create folder for saving database
$ sudo mkdir -p /data/db

// start
$ brew services start mongodb-community@4.2
$ mongo

// create root user
> use admin
> db.createUser({ user: 'your_name', pwd: 'your_password', roles: ['root'] });
```
2. Install mongoose
```
// terminal -> /learn-mongoose
$ npm i mongoose
```

## Add ".env" file
1. create file
```
// terminal -> /learn-mongoose
$ touch .env
```
2. add code to .env 
```
COOKIE_SECRET=your_secret_code
```

## Server Start
```
$ npm start
```



