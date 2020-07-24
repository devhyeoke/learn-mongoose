## LEARN MONGOOSE
---
:blush:  **INDEX**
- Setup Project
- Install mongoDB & mongoose
- Start Server

### Setup Project
---
```
$ git clone https://github.com/devhyeoke/learn-mongoose.git
$ cd learn-mongoose
```

### Install mongoDB & mongoose
---
#### 1. Install mongoDB
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

#### 2. Install mongoDB
```
// terminal -> /project_forlder
$ npm i mongoose
```



