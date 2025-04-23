# Project Overview

## Purpose and Core Functionality

CommunityTaught.org is a comprehensive web application designed to track and manage learning progress for 100Devs classes and homework. The platform provides students with an intuitive interface to monitor their educational journey, track homework completion, and access various learning resources.

## Key Features

- **User Authentication**: Secure login using multiple authentication methods (GitHub, Google, local email/password)
- **Homework Tracking**: 
  - Detailed tracking of homework assignments
  - Progress monitoring for individual homework items
  - Ability to mark homework as complete
- **Lesson Management**: 
  - Browse and track progress through different class lessons
  - View lesson details and related resources
- **Resource Hub**: 
  - Access to community projects
  - Download resources and guides
  - FAQ and additional learning materials

## Typical Use Cases

1. **Student Progress Tracking**: 
   - Monitor completion status of homework assignments
   - Track progress through 100Devs class curriculum
   - Maintain a comprehensive overview of learning journey

2. **Resource Discovery**: 
   - Access curated learning resources
   - Find community projects and inspiration
   - Download helpful guides and templates

3. **Community Learning**: 
   - Connect with other learners
   - Share progress and achievements
   - Access supplementary learning materials

## Technical Architecture

- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Frontend Templating**: Pug
- **Styling**: Tailwind CSS
- **Authentication**: Passport.js (supporting multiple strategies)

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- MongoDB (local or cloud instance)
- Yarn package manager

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

### Environment Configuration

1. Create a `.env` file in the project root directory by copying the `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Configure the following environment variables in the `.env` file:
   - `PORT`: Development server port (default: 3000)
   - `NODE_ENV`: Set to `development`
   - `DOMAIN`: Your local development URL
   - `SECRET`: A random string for session management
   - `DB_URI`: MongoDB connection string
   
   Optional configurations:
   - SMTP settings for email functionality
   - Google/GitHub OAuth credentials for authentication

### Running the Application

1. Start the development server:
   ```bash
   # Run server with hot-reloading
   yarn dev

   # Compile Tailwind CSS (in a separate terminal)
   yarn css
   ```

2. Open your browser and navigate to `http://localhost:3000`

### Additional Commands

- Run end-to-end tests: `yarn e2e`
- Start Cypress test runner: `yarn e2e:watch`

### Troubleshooting
- Ensure MongoDB is running and the connection URI is correct
- Check that all required environment variables are set
- Verify Node.js and Yarn are installed correctly

## Deployment

### Prerequisites
- Node.js (version specified in `package.json`)
- MongoDB database
- Environment variables configured

### Environment Configuration
1. Copy `.env.example` to `.env`
2. Fill in the required environment variables:
   - `PORT`: Application port (default: 3000)
   - `NODE_ENV`: Set to `development` or `production`
   - `DOMAIN`: Your application's domain
   - `SECRET`: Session secret key
   - `DB_URI`: MongoDB connection string
   - Authentication provider credentials (optional):
     - Google OAuth: `GOOGLE_ID`, `GOOGLE_SECRET`
     - GitHub OAuth: `GITHUB_ID`, `GITHUB_SECRET`
   - SMTP settings for email functionality

### Local Development
```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Generate Tailwind CSS
yarn css

# Run end-to-end tests
yarn e2e
```

### Production Deployment Options

#### Fly.io Deployment
This project includes a `fly.toml` configuration for deployment on Fly.io:
```bash
# Install Fly CLI
brew install flyctl  # macOS
# Or use appropriate installation method for your OS

# Login to Fly
flyctl auth login

# Deploy the application
flyctl deploy
```

#### Vercel Deployment
For static assets and server-side rendering:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root
3. Follow the interactive prompts

#### Docker Deployment
```bash
# Build Docker image
docker build -t communitytaught .

# Run the container
docker run -p 3000:3000 --env-file .env communitytaught
```

### Deployment Considerations
- Ensure all environment variables are set in your production environment
- Configure MongoDB connection for production
- Set up authentication providers if using OAuth
- Enable HTTPS and secure your application

## Project Structure

The project follows a structured directory layout to organize different aspects of the application:

### Root Directory
- `.env.example`: Template for environment configuration
- `package.json`: Project dependencies and scripts
- `tailwind.config.cjs`: Tailwind CSS configuration
- `cypress.config.js`: Cypress testing configuration

### `src/` Directory
The main source code directory containing core application components:

- `assets/`: Static resources
  - `css/`: Stylesheet files (including Font Awesome and custom CSS)
  - `fonts/`: Web font files
  - `img/`: Image assets (thumbnails, resources, favicons)
  - `js/`: Client-side JavaScript files for interactive features
  - `site.webmanifest`: Web app manifest file

- `config/`: Configuration files for database and authentication
  - `db.js`: Database connection setup
  - `githubAuth.js`: GitHub OAuth configuration
  - `googleAuth.js`: Google OAuth configuration
  - `importData.js`: Data import utilities

- `controllers/`: Business logic and request handling
  - `auth.js`: Authentication-related operations
  - `email.js`: Email-related functionalities
  - `homework.js`: Homework management
  - `lessons.js`: Lesson-related operations
  - `pages.js`: Page rendering logic

- `middleware/`: Express middleware
  - `auth.js`: Authentication middleware
  - `flash.js`: Flash message middleware

- `models/`: Mongoose data models
  - User-related models like `User.js`, `Token.js`
  - Homework and lesson models: `Homework.js`, `Lesson.js`
  - Progress tracking models: `HomeworkProgress.js`, `LessonProgress.js`

- `routes/`: Express route definitions
  - `emailRouter.js`: Email-related routes
  - `hwRouter.js`: Homework routes
  - `lessonRouter.js`: Lesson routes
  - `mainRouter.js`: Main application routes
  - `oauthRouter.js`: OAuth authentication routes

- `views/`: Pug template files
  - Page templates for different routes
  - Layouts, partials, and mixins for modular view composition

- `server.js`: Main application entry point
- `tailwind.css`: Tailwind CSS entry point

### `data/` Directory
Contains JSON files with static data:
- `homeworkextras.json`
- `homeworkitems.json`
- `homeworks.json`
- `lessons.json`

### `cypress/` Directory
End-to-end testing configuration and specs:
- `e2e/`: Cypress test files for various application flows
- `fixtures/`: Test data
- `support/`: Custom commands and test configuration

This structure promotes separation of concerns, making the codebase modular, maintainable, and easy to navigate.

## 🚀 Technologies Used

### Backend
- **Runtime**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**:
  - Passport.js
  - Passport Local Strategy
  - GitHub OAuth
  - Google OAuth

### Frontend
- **Templating Engine**: Pug
- **CSS Framework**: Tailwind CSS
- **Font Awesome**: For icons and branding

### Testing & Development
- **End-to-End Testing**: Cypress
- **Unit Testing**: 
  - Jest
  - Vitest
- **Development Tools**:
  - Nodemon (for auto-reloading)
  - Dotenv (environment configuration)

### Additional Libraries
- **GitHub Integration**: Octokit Core
- **Email**: Nodemailer
- **Validation**: Validator.js
- **Session Management**: Express Session
- **CORS Handling**: CORS middleware

### Deployment & Infrastructure
- **Logging**: Morgan
- **Environment**: ES Modules

## 🌟 Feature Highlights

CommunityTaught.org is a comprehensive learning management platform designed for 100Devs students, offering the following key features:

### 🔐 Authentication & User Management
- Secure user registration and login system
- Email-based authentication with verification
- Password reset and account recovery
- Account management features:
  - Change password
  - Update email address
  - Account deletion

### 📊 User Dashboard
- Personalized dashboard for tracking learning progress
- Overview of completed and pending lessons
- Homework tracking and progress monitoring

### 📚 Learning Resources
- Extensive resources section with multiple pages
- Access to community projects, downloads, and additional learning materials
- Categorized and organized learning content

### 🎓 Lesson & Homework Tracking
- Comprehensive lesson catalog
- Homework management system
- Progress tracking for individual homework items
- Ability to mark lessons and homework as complete

### 🌐 Responsive Design
- Mobile-friendly interface
- Accessible across different devices and screen sizes

### Additional Features
- Error handling with user-friendly flash messages
- Secure middleware for authenticated routes
- Integration with MongoDB for persistent data storage

## Configuration

### Environment Variables
The project uses a `.env` file for configuration. Copy `.env.example` to `.env` and configure the following settings:

#### Core Configuration
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Application environment (development/production)
- `DOMAIN`: Base URL of the application

#### Database Configuration
- `DB_URI`: MongoDB connection string
  - Local example: `mongodb://localhost:27017/<dbname>`
  - Atlas example: `mongodb+srv://<user>:<password>@<cluster>.<subdomain>.mongodb.net/<dbname>`

#### Email Configuration (Optional)
For local authentication and email functionality:
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender name

#### Authentication Providers
##### Google OAuth
- `GOOGLE_ID`: Google OAuth Client ID
- `GOOGLE_SECRET`: Google OAuth Client Secret

##### GitHub OAuth
- `GITHUB_ID`: GitHub OAuth Client ID
- `GITHUB_SECRET`: GitHub OAuth Client Secret

### Development Scripts
The project uses various npm/yarn scripts for different tasks:

- `start`: Run the production server
- `dev`: Run the development server with auto-reload
- `css`: Watch and compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- `e2e:watch`: Open Cypress in interactive mode
- `e2e:record`: Run Cypress tests and record results

### Cypress Configuration
Cypress is configured with the following key settings:
- Base URL: `http://0.0.0.0:3000`
- Video recording: Disabled
- Chrome web security: Disabled

### Tailwind CSS
Tailwind CSS is used for styling. Configuration can be found in `tailwind.config.cjs`.

### Additional Notes
- Ensure all necessary environment variables are set before running the application
- For local development, use `yarn dev` to start the server
- For production, set `NODE_ENV` to `production` and use `yarn start`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2022 Laura Abro

The MIT License is a permissive free software license that allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the conditions specified in the license.