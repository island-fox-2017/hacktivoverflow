# hacktivovercute

Hacktiv Overcute is simple forum for asking anything like stackoverflow.com

## Build Setup

``` bash
# running client-side
npm install
npm run dev

# running server-side
npm install
node app.js
```

## REST API Index

| Method | URL      | Description                    |
|--------|----------|--------------------------------|
| POST   | /login   | log in                         |
| POST   | /signup  | Create user                    |
| POST   | /getdata | Verify and get data user login |

## REST API User

| Method | URL             | Description                 |
|--------|-----------------|-----------------------------|
| GET    | /api/users      | Get all users               |
| POST   | /api/users      | Create user                 |
| PUT    | /api/users/:id  | Update specified user by id |
| DELETE | /api/users/:id  | Delete specified user by id |

## REST API Thread

| Method | URL                                    | Description                                    |
|--------|----------------------------------------|------------------------------------------------|
| GET    | /api/threads                           | Get all articles                               |
| GET    | /api/threads/:id/replies               | Get specified replies by threads id            |
| GET    | /api/threads/:id/reply                 | Get all reply by thread id                     |
| POST   | /api/threads/                          | Create article by user id                      |
| POST   | /api/threads/:id/reply                 | Create reply article by user id per article id |
| PUT    | /api/threads/:id                       | Update article by article id per user id       |
| PUT    | /api/threads/:id/reply/:repid          | Update reply by article id per user id         |
| PUT    | /api/threads/:id/upvote                | Give up vote by article id                     |
| PUT    | /api/threads/:id/reply/:repid/upvote   | Give up vote for reply by per article id       |
| PUT    | /api/threads/:id/downvote              | Give down vote by per article id               |
| PUT    | /api/threads/:id/reply/:repid/downvote | Give down vote for reply by per article id     |
| DELETE | /api/threads/:id                       | Delete article by article id                   |
| DELETE | /api/threads/:id/reply/:repid          | Delete reply article by article id             |
