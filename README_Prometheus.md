## 🌟 Project Overview

Community Taught is a comprehensive web learning platform designed to empower coding education through an interactive, community-driven experience. The application serves as a centralized hub for learners to track their progress, access resources, and engage with coding curriculum.

### Purpose and Core Functionality
The primary goal of Community Taught is to provide a structured, supportive environment for individuals learning coding and software development. Key functionalities include:
- Comprehensive lesson tracking and management
- Interactive homework assignment system
- User progress monitoring and dashboards
- Seamless authentication across multiple platforms
- Resource sharing and community project showcasing

### Key Features
1. **Flexible Authentication**
   - Multiple login options (Local, GitHub, Google OAuth)
   - Secure user account management
   - Password reset functionality

2. **Learning Ecosystem**
   - Detailed lesson browsing and tracking
   - Homework submission and progress monitoring
   - Ability to mark lessons and assignments as complete
   - Personalized learning dashboards

3. **Community Resources**
   - Extensive resource library
   - Downloadable learning materials
   - Community project showcase
   - FAQ and supplementary learning content

### Typical Use Cases
- **For Individual Learners**
  - Track coding education progress
  - Submit and manage homework assignments
  - Access learning resources
  - Connect with coding community

- **For Educators/Mentors**
  - Monitor student progress
  - Distribute learning materials
  - Manage lesson content
  - Facilitate community learning

### Technical Highlights
- Modern MVC architecture
- Responsive design with Tailwind CSS
- Full-stack JavaScript application
- OAuth-enabled authentication
- MongoDB-powered data management

## Getting Started

### Prerequisites
- Node.js (version 16 or later)
- MongoDB (local installation or MongoDB Atlas account)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Configuration

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Configure the following environment variables in `.env`:
   - `PORT`: Default development port (default: 3000)
   - `NODE_ENV`: Set to `development`
   - `DOMAIN`: Your local development URL
   - `SECRET`: A random string for session management
   - `DB_URI`: MongoDB connection string
     - Local example: `mongodb://localhost:27017/your_database`
     - Atlas example: `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/your_database`

   Optional configurations:
   - Email settings (SMTP) for local authentication
   - Google/GitHub OAuth credentials if using social login

### Running the Application

1. Start the development server:
   ```bash
   # Run the application
   npm run dev

   # Compile Tailwind CSS (in a separate terminal)
   npm run css
   ```

2. Open your browser and navigate to `http://localhost:3000`

### Testing

- Run end-to-end tests:
  ```bash
  # Open Cypress test runner
  npm run e2e:watch

  # Run Cypress tests in headless mode
  npm run e2e
  ```

### Additional Notes
- Ensure MongoDB is running before starting the application
- For production, set `NODE_ENV` to `production`
- Refer to the `.env.example` file for all possible configuration options

## Deployment

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB database
- Environment variables configured

### Local Deployment

1. **Clone the Repository**
   ```bash
   git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
   cd node-mongo-boilerplate
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the project root with the following variables:
   - `MONGODB_URI`: MongoDB connection string
   - `SESSION_SECRET`: Random secret for session management
   - `GITHUB_CLIENT_ID`: GitHub OAuth client ID (optional)
   - `GITHUB_CLIENT_SECRET`: GitHub OAuth client secret (optional)
   - `GOOGLE_CLIENT_ID`: Google OAuth client ID (optional)
   - `GOOGLE_CLIENT_SECRET`: Google OAuth client secret (optional)

4. **Run Development Server**
   ```bash
   # Start development server with hot-reloading
   npm run dev

   # Compile Tailwind CSS (in a separate terminal)
   npm run css
   ```

### Production Deployment Options

#### 1. Fly.io Deployment
The project includes a `fly.toml` configuration for easy deployment on Fly.io:

```bash
# Install Fly CLI
brew install flyctl  # macOS
# Or download from https://fly.io/docs/hands-on/install-flyctl/

# Login to Fly
flyctl auth login

# Deploy the application
flyctl launch
flyctl deploy
```

#### 2. Vercel Deployment
For a frontend-focused deployment:
- Connect your GitHub repository to Vercel
- Set build command: `npm run build`
- Set start command: `npm start`
- Configure environment variables in Vercel dashboard

#### 3. Docker Deployment
Create a `Dockerfile`:
```dockerfile
FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
```

Build and run Docker container:
```bash
# Build Docker image
docker build -t community-taught .

# Run Docker container
docker run -p 8080:8080 \
  -e MONGODB_URI=your_mongodb_uri \
  -e SESSION_SECRET=your_secret \
  community-taught
```

### Additional Deployment Notes
- Ensure all environment variables are securely configured
- Use a production-grade MongoDB instance (Atlas, MongoDB Cloud)
- Set up proper HTTPS and security headers in production
- Configure appropriate CORS settings

### Continuous Deployment
- GitHub Actions can be set up for automated testing and deployment
- Integrated E2E testing with Cypress: `npm run e2e`

## Project Structure

The project follows a structured directory layout to organize different aspects of the application:

### Root Directory
- `package.json`: Defines project dependencies, scripts, and metadata
- `.env.example`: Template for environment configuration
- `fly.toml`: Configuration for Fly.io deployment
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

### `/src` Directory
The main source code directory containing the core application logic:

#### Configuration (`/src/config`)
- `db.js`: Database configuration
- `githubAuth.js`: GitHub authentication setup
- `googleAuth.js`: Google authentication setup
- `importData.js`: Data import utilities

#### Controllers (`/src/controllers`)
Handles request processing and business logic:
- `auth.js`: Authentication-related operations
- `email.js`: Email-related functionality
- `homework.js`: Homework management
- `lessons.js`: Lesson-related operations
- `pages.js`: Page rendering and routing

#### Middleware (`/src/middleware`)
- `auth.js`: Authentication middleware
- `flash.js`: Flash message middleware

#### Models (`/src/models`)
Defines data models for the application:
- `User.js`: User account model
- `Homework.js`, `HomeworkItem.js`, `HomeworkProgress.js`: Homework-related models
- `Lesson.js`, `LessonProgress.js`: Lesson-related models
- `Token.js`: Authentication token model

#### Routes (`/src/routes`)
Defines application routes:
- `mainRouter.js`: Main application routes
- `hwRouter.js`: Homework-related routes
- `lessonRouter.js`: Lesson-related routes
- `oauthRouter.js`: OAuth authentication routes
- `emailRouter.js`: Email-related routes

#### Views (`/src/views`)
Pug templates for rendering pages:
- Main views: `index.pug`, `login.pug`, `register.pug`, etc.
- Layouts and partials for consistent page structure
- Resource-specific views in `/resources`
- Mixins for reusable view components

#### Assets (`/src/assets`)
- `/css`: Stylesheets including Font Awesome and custom styles
- `/fonts`: Font files
- `/img`: Images, icons, and thumbnails
- `/js`: Client-side JavaScript files

#### Cypress Tests (`/cypress`)
- `/e2e`: End-to-end test files for various application features
- `/fixtures`: Test data
- `/support`: Custom commands and test configurations

### `/data` Directory
Contains JSON data files for homeworks and lessons

This structure ensures a clean separation of concerns, making the application modular, maintainable, and easy to navigate.

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

### Authentication
- **Passport.js**: Authentication middleware with multiple authentication strategies
  - Passport Local
  - GitHub OAuth
  - Google OAuth

### Frontend
- **Pug**: Template engine for generating HTML
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

### Testing & Development
- **Cypress**: End-to-end testing framework
- **Jest**: JavaScript testing framework
- **Nodemon**: Utility that monitors for changes and automatically restarts the server

### Additional Libraries
- **Dotenv**: Environment variable management
- **Morgan**: HTTP request logger middleware
- **Validator.js**: String validation and sanitization library
- **Nodemailer**: Email sending library

### Authentication Libraries
- **Passport-local-mongoose**: Mongoose plugin for simplified local authentication
- **Connect-mongodb-session**: MongoDB session store for Express sessions

### Version Control & Deployment
- **Git**: Distributed version control system
- **GitHub**: Repository hosting and collaboration platform

## 🌟 Feature Highlights

### 1. Authentication and User Management
- Multiple authentication methods:
  - Local email/password registration
  - OAuth login with GitHub
  - OAuth login with Google
- Secure password reset functionality
- User profile management
- Session-based authentication

### 2. Learning Progress Tracking
- Comprehensive lesson tracking system
  - Browse available lessons
  - Mark lessons as completed
  - Track individual lesson progress
- Homework assignment management
  - Submit and track homework
  - Monitor homework completion status
- Interactive progress dashboards
  - Visual representation of learning achievements
  - Detailed progress insights

### 3. Resource Hub
- Extensive resource library
  - Community project showcases
- Downloadable learning materials
- FAQ and additional learning resources
- Community-driven content

### 4. User Experience
- Responsive design using Tailwind CSS
- Mobile-friendly interface
- Intuitive navigation
- Clean, modern user interface

### 5. Community Features
- View community projects
- Access shared learning resources
- Collaborative learning environment

### 6. Technical Capabilities
- RESTful API design
- Modular application architecture
- Real-time progress tracking
- Secure data management with MongoDB

## Configuration

### Environment Variables

The project uses a `.env` file for configuration. Copy the `.env.example` file to `.env` and configure the following variables:

- `PORT`: The port on which the application will run (default: 3000)
- `NODE_ENV`: Application environment (development/production)
- `DOMAIN`: Base URL of the application
- `SECRET`: Session secret key
- `DB_URI`: MongoDB connection string

#### Authentication Configurations
- For Google Login:
  - `GOOGLE_ID`: Google OAuth Client ID
  - `GOOGLE_SECRET`: Google OAuth Client Secret

- For GitHub Login:
  - `GITHUB_ID`: GitHub OAuth Client ID
  - `GITHUB_SECRET`: GitHub OAuth Client Secret

#### Email Configuration (Optional)
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender name

### Development Scripts

The project provides several npm scripts for different purposes:

- `npm start`: Run the production server
- `npm run dev`: Run the development server with nodemon
- `npm run css`: Watch and compile Tailwind CSS
- `npm run e2e`: Run Cypress end-to-end tests
- `npm run e2e:watch`: Open Cypress in interactive mode
- `npm run e2e:record`: Run Cypress tests and record results

### Tailwind CSS Configuration

Tailwind CSS is configured in `tailwind.config.cjs` with custom:
- Responsive breakpoints
- Extended color palette (twilight theme)
- Custom font families
- Additional plugins: `@tailwindcss/forms`

### Cypress Configuration

E2E testing is configured in `cypress.config.js` with:
- Base URL: `http://0.0.0.0:3000`
- Chrome web security disabled
- Video recording off by default

### Dependencies

Key dependencies include:
- Express.js
- Mongoose
- Passport.js (for authentication)
- Pug (template engine)
- Tailwind CSS

Development dependencies:
- Nodemon
- Cypress
- Jest

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

MIT License is a permissive free software license that allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the conditions specified in the license.

© 2022 Laura Abro