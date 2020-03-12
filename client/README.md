# About forum front end

## Views

### User Views

#### Member List

#### User Profile

#### Header When Logged In

#### Header When Logged Out

#### User Dashboard

#### User Thread List

#### User Post List

#### User Reputation List

#### User Message list

#### Moderator Views

##### Header When Moderator Logged In

##### Moderator Dashboard

#### Administrator Views

##### Header When Admin Logged In

##### Administrator Dashboard


### Category Views

#### All Categories / Landing Page

#### Single Category


### Thread Views

#### All Threads in Single Forum

#### Single Thread

### Post Views

#### Posts in Single Thread

#### Single Post


### Message Views

#### All Messages in Admin Dashboard

#### All To Messages for Single User

#### All From Messages for Single User

#### Single Message


### Reputation Views

#### All Reputation in Admin Dashboard

#### All Reputation given to Single User

#### Single Reputation



## CRUD Actions

### Users

| Method | API URL Used                 | Description                               | Frontend URL                                     |
| ------ | -----------------------------| ------------------------------------------|------------------------------------------------- |
| POST   | /api/authentication/register | User registration.                        | /register                                        |
| POST   | /api/reputation/login        | User login page.                          | /login                                           |
| GET    | /api/reputation/logout       | User logout page.                         | /logout                                          |
| GET    | /api/users                   | Memberlist & Admin Dashboard.             | /memberlist                                      |
| GET    | /api/users/:id               | Single User Profile.                      | /user/:username                                  |
| GET    | /api/users/:id/threads       | All Threads of a Single User.             | /user/:username/threads                          |
| GET    | /api/users/:id/posts         | All Posts of a Single User.               | /user/:username/posts                            |
| GET    | /api/users/:id/messages/to   | All Received Messages of a Single User.   | /user/:username/received-messages                |
| GET    | /api/users/:id/messages/from | All Sent Messages of a Single User.       | /user/:username/sent-messages                    |
| GET    | /api/users/:id/reputation    | All Reputation Given to a Single User.    | /user/:username/reputation                       |
| PUT    | /api/users/:id               | Edit User Profile.                        | /control-panel                                   |
| DELETE | /api/users/:id               | Delete User from Admin Dashboard          | /admin/users                                     |

### Categories

### Forums

### Threads

### Posts

### Messages

### Reputation