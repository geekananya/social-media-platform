# Connect: A Social Media Platform
Built Using: ReactJS, NodeJs, Express and MongoDB.

# Features
- **Fully responsive** on desktop and mobile.
- Secure Authentication
- Create new text and image posts.
- Like posts
- Search posts by tags.
- View and Edit your profile.
- View Trending tags and Active users

# Run the project
1. Clone this repository.
2. Migrate to the server directory by running `cd server` command on terminal.
3. Run the command `npm install` on terminal to install required packages.
4. Run `npm start` to start the server.
2. Migrate to the client directory by running `cd client` command on terminal.
3. Run the command `npm install` on terminal to install required packages.
4. Run `npm start`.
5. Set relevant environment variables to configure Firebase Auth.

### Setup the environment variables
`client\.env.local`
| Variable  | Description |
| ------------- | ------------- |
| VITE_apiKey  | Firebase API Key  |
| VITE_messagingSenderId  | Firebase Messaging sender ID  |
| VITE_appId  | Firebase app id  |
| proxy  | Server API URL (accessible through import.meta.env.proxy)  |
| VITE_defaultemail  | Testing email for easy login (Make sure it represents a valid user in your Firebase and DB) |
| VITE_defaultpass  | Corresponding password for testing email  |

`server\.env`
| Variable  | Description |
| ------------- | ------------- |
| MONGODB_URI  | Your MongoDB deployment URI  |
| PORT  | Server Port number  |
| IMGUR_CLIENT_ID  | Imgur API client ID  |
| IMGUR_CLIENT_SECRET  | Imgur client secret  |
| VITE_messagingSenderId  | Firebase API Key  |

# Dependencies
### Libraries and Frameworks:
- **MERN** (React, NodeJs, Express, MongoDB)
- **Redux-Toolkit** for State Management
- **Tachyons** for styling
- **Dotenv** to load environment variables locally
- **Fontawesome** for icons

### APIs and Services:
- **Firebase** for User Authentication
- **MongoDB Atlas** for Database Hosting
- **Imgur** API for hosting images
- **Robohash** for default user profile pictures

### Deployment/Hosting:
- **Netlify** for Frontend
- **Render** for Backend
- **MongoDB Atlas** for Database

# Contributing
Contributions are welcome! Here's how you can contribute:
- [Open an issue](https://github.com/geekananya/social-media-platform/issues/new) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/geekananya/social-media-platform/fork) to add new features/make quality-of-life improvements/fix bugs.
- Star this repository to help it reach more people!
- Make feature requests.