# About forum back end

## Endpoints

### Categories

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/categories     | Creates a category.                                                              |
| GET    | /api/categories     | Returns an array of all the categories objects contained in the database.                                                               |
| GET    | /api/categories/:id | Returns the category object with the specified `id`.                                                                                  |
| GET    | /api/categories/:id/forums | Returns an array of all the forums in the category object with the specified `id`.                                                                                  |
| PUT    | /api/categories/:id | Updates the category with the specified `id`. Returns the modified document. |
| DELETE | /api/categories/:id | Removes the category with the specified `id` and returns the deleted category.                                                            |

POST, PUT, and DELETE are exclusively Administrator actions.

### Forums

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/forums     | Creates a forum.                                                              |
| GET    | /api/forums     | Returns an array of all the forums objects contained in the database.                                                               |
| GET    | /api/forums/:id | Returns the forum object with the specified `id`.                                                                                  |
| GET    | /api/forums/:id/threads | Returns an array of all the threads in the forum object with the specified `id`.                                                                                  |
| GET    | /api/forums/:id/posts | Returns an array of all the posts in the forum object with the specified `id`.                                                                                  |
| PUT    | /api/forums/:id | Updates the forum with the specified `id`. Returns the modified document. |
| DELETE | /api/forums/:id | Removes the forum with the specified `id` and returns the deleted forum.                                                            |

POST, PUT, and DELETE are exclusively Administrator actions.

### Messages

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/messages     | Creates a message.                                                              |
| GET    | /api/messages     | Returns an array of all the message objects contained in the database.                                                               |
| GET    | /api/messages/:id | Returns the message object with the specified `id`.                                                                                  |
| DELETE | /api/messages/:id | Removes the message with the specified `id` and returns the deleted message.                                                            |

### Reputation

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/reputation     | Creates a reputation.                                                              |
| GET    | /api/reputation/:id | Returns the reputation object with the specified `id`.                                                                                  |
| DELETE | /api/reputation/:id | Removes the reputation with the specified `id` and returns the deleted reputation.                                                            |

DELETE is an Administrator and Moderator action.

### Threads

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/threads     | Creates a thread.                                                              |
| GET    | /api/threads     | Returns an array of all the threads objects contained in the database.                                                               |
| GET    | /api/threads/:id | Returns the thread object with the specified `id`.                                                                                  |
| GET    | /api/threads/:id/posts | Returns an array of all the posts in the thread object with the specified `id`.                                                                                  |
| PUT    | /api/threads/:id | Updates the thread with the specified `id`. Returns the modified document. |
| DELETE | /api/threads/:id | Removes the thread with the specified `id` and returns the deleted thread.                                                            |

### Users

| Method | URL            | Description                                                                                                                       |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/users     | Creates a user.                                                              |
| GET    | /api/users     | Returns an array of all the users objects contained in the database.                                                               |
| GET    | /api/users/:id | Returns the user object with the specified `id`.                                                                                  |
| GET    | /api/users/:id/threads | Returns an array of all the threads in the user object with the specified `id`.                                                                                  |
| GET    | /api/users/:id/posts | Returns an array of all the posts in the user object with the specified `id`.                                                                                  |
| GET    | /api/users/:id/messages | Returns an array of all the messages in the user object with the specified `id`.                                                                                  |
| GET    | /api/users/:id/reputation | Returns an array of all the reputation in the user object with the specified `id`.                                                                                  |
| PUT    | /api/users/:id | Updates the user with the specified `id`. Returns the modified document. |
| DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                                            |

DELETE is exclusively an Administrator action.

## Database Model

![alt text](../images/database/database-model.png "Database Model")