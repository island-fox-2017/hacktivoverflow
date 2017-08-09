# hacktivoverflow
Simple question answer app REST API
with express and mongodb

## REST API hacktiv-overflow

List of hacktiv-overflow routes:

| Route                   | HTTP          | Description      |
| -------------           |:-------------:| :----------------|
| /user/signin            |POST           | Login   |
| /user/signup            |POST           | Register with new user info   |
| /question               |GET            | Get all question|
| /question/:id           |GET            | Get specify question info|
| /question               |POST           | post new question|
| /question/:id           |DELETE         | delete question|
| /question/:id           |PUT            | edit question|
| /question/:id/answer    |PUT            | Put answer to the question|
| /question/:id/answer/:id|DELETE         | Delete answer From the question|
