## 🌟 Project Overview

### Purpose
Community Taught is an innovative web application designed to revolutionize coding education through an interactive, community-driven learning platform. The application serves as a comprehensive learning management system that empowers learners by providing seamless progress tracking, resource sharing, and collaborative learning experiences.

### Core Functionality
At its heart, Community Taught is a robust educational platform that combines multiple features to support learners' coding journeys:

1. **Learning Path Management**
   - Track and manage coding lessons
   - Mark lesson progress
   - View comprehensive learning dashboards
   - Submit and track homework assignments

2. **User Engagement**
   - Flexible authentication (local, GitHub, and Google OAuth)
   - Personalized user profiles
   - Progress tracking and performance insights

3. **Resource Ecosystem**
   - Curated resource library
   - Community project showcases
   - Downloadable learning materials
   - FAQ and support resources

### Key Features
- 🔐 Multi-method Authentication
- 📚 Interactive Lesson Tracking
- 📝 Homework Management System
- 🌐 Community Project Showcase
- 📊 Personal Progress Dashboards
- 🎨 Responsive Design with Tailwind CSS

### Typical Use Cases
- **For Individual Learners**
  - Self-paced coding education
  - Progress monitoring
  - Access to learning resources
  - Community interaction

- **For Coding Instructors**
  - Lesson management
  - Student progress tracking
  - Assignment distribution
  - Resource sharing

- **For Community Administrators**
  - Platform content management
  - User engagement tracking
  - Resource curation

The application is built with a modern, modular architecture using Node.js, Express, MongoDB, and follows the MVC design pattern, ensuring scalability, maintainability, and a smooth user experience.

## Getting Started

### Prerequisites
- Node.js (version 16 or later)
- MongoDB (local installation or MongoDB Atlas account)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
   cd node-mongo-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Configuration

1. Create a `.env` file in the project root by copying the `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Configure the following environment variables in `.env`:
   - `PORT`: Default development port (3000)
   - `NODE_ENV`: Set to `development`
   - `DOMAIN`: Your local application URL
   - `SECRET`: A random string for session management
   - `DB_URI`: MongoDB connection string
     - Local example: `mongodb://localhost:27017/yourdbname`
     - Atlas example: `mongodb+srv://<user>:<password>@<cluster>.<subdomain>.mongodb.net/<dbname>`

   Optional configurations:
   - Email settings (SMTP)
   - Google/GitHub OAuth credentials (if using social login)

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
   This will run the application with nodemon, automatically restarting on file changes.

2. For Tailwind CSS compilation (in a separate terminal):
   ```bash
   npm run css
   ```

### Additional Commands
- `npm start`: Run the production server
- `npm run e2e`: Run Cypress end-to-end tests
- `npm run e2e:watch`: Open Cypress in interactive mode

### Accessing the Application
Open your browser and navigate to `http://localhost:3000`

### Troubleshooting
- Ensure MongoDB is running
- Check that all required environment variables are set
- Verify Node.js and npm are installed correctly

### Development Notes
- The application uses Pug for templating
- Passport.js is configured for authentication
- Tailwind CSS is used for styling

## Deployment

### Prerequisites
- Node.js (v16 or later recommended)
- MongoDB 
- npm or yarn

### Local Deployment
1. Clone the repository
```bash
git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
cd node-mongo-boilerplate
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
- Copy `.env.example` to `.env`
- Fill in required configuration (database connection, authentication keys)

4. Run the application locally
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### Deployment Platforms

#### Fly.io Deployment
This project is configured for deployment on Fly.io:
```bash
# Install Fly CLI
brew install flyctl  # macOS
# Or for other platforms, visit https://fly.io/docs/hands-on/install-flyctl/

# Login to Fly
flyctl auth login

# Deploy the application
flyctl deploy
```

#### Docker Deployment
1. Build the Docker image
```bash
docker build -t communitytaught .
```

2. Run the Docker container
```bash
docker run -p 8080:8080 \
  -e MONGODB_URI=your_mongodb_connection_string \
  -e SESSION_SECRET=your_session_secret \
  communitytaught
```

#### Vercel/Netlify Deployment
While primarily a Node.js/Express application, you can deploy using:
1. Connect your GitHub repository
2. Set build commands:
   - Install dependencies: `npm install`
   - Build CSS: `npm run css`
   - Start command: `npm start`

### Environment Configuration
Ensure the following environment variables are set:
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 8080)
- `SESSION_SECRET`: Secret for session management
- OAuth provider keys for GitHub and Google authentication

### Continuous Deployment
The application supports:
- GitHub Actions
- Fly.io automatic deployments
- Docker container deployments

### Notes
- The application uses Tailwind CSS, which requires a build step
- Ensure all dependencies are installed before deployment
- Set appropriate environment variables for production

## Project Structure

The project follows a structured organization to maintain clarity and separation of concerns:

### Root Directory
- `package.json`: Defines project dependencies, scripts, and metadata
- `.env.example`: Template for environment configuration
- `fly.toml`: Configuration for Fly.io deployment
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

### Source Code (`src/`)
- `assets/`: Static resources for the application
  - `css/`: Stylesheets (FontAwesome and custom CSS)
  - `js/`: Client-side JavaScript files for interactivity
  - `img/`: Image assets (thumbnails, icons, resources)
  - `fonts/`: Web font files
  - `data/`: Static JSON data files

- `config/`: Application configuration files
  - Database connection
  - Authentication providers (GitHub, Google)
  - Data import utilities

- `controllers/`: Request handling logic
  - Authentication
  - Email management
  - Homework and lesson controllers
  - Page rendering

- `middleware/`: Express middleware
  - Authentication checks
  - Flash message handling

- `models/`: Mongoose data models
  - User
  - Homework and lesson tracking
  - Progress tracking

- `routes/`: Express route definitions
  - Authentication routes
  - Homework and lesson routes
  - Main application routes

- `views/`: Pug template files
  - Page templates
  - Layouts and partials
  - Mixins for reusable components

### Testing (`cypress/`)
- `e2e/`: End-to-end test specifications
- `fixtures/`: Test data
- `support/`: Custom commands and test configuration

### Data (`data/`)
- JSON files containing static data for homeworks and lessons

This structure separates concerns, making the codebase modular, maintainable, and easy to navigate.

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB

### Authentication
- **Passport.js**: Authentication middleware
  - Supports GitHub and Google OAuth
  - Local authentication strategy

### Frontend
- **Pug**: Template engine for rendering views
- **Tailwind CSS**: Utility-first CSS framework
  - Configured with `@tailwindcss/forms` plugin

### Testing
- **Cypress**: End-to-end testing framework
- **Jest**: JavaScript testing framework

### Development Tools
- **Nodemon**: Automatically restarts server during development
- **Morgan**: HTTP request logger middleware
- **dotenv**: Environment variable management

### Additional Libraries
- **Validator.js**: String validation and sanitization
- **Nodemailer**: Email sending functionality
- **Octokit**: GitHub API client

### OAuth Providers
- GitHub OAuth
- Google OAuth

### Deployment & Infrastructure
- Supports modular project structure
- ES Module support
- Environment configuration management

## 🌟 Feature Highlights

### 1. Authentication and User Management
- **Multiple Authentication Methods**:
  - Local account registration
  - GitHub OAuth login
  - Google OAuth login
- Secure password reset functionality
- User profile management
- Session-based authentication with Passport.js

### 2. Learning Progression Tracking
- **Lesson Management**:
  - Comprehensive lesson catalog
  - Interactive lesson tracking
  - Mark lessons as completed
  - Progress tracking for individual lessons

### 3. Homework Tracking System
- Create and submit homework assignments
- Track homework progress
- View individual homework item completion status
- Detailed homework dashboard

### 4. Resource Center
- **Community Resources**:
  - Community projects showcase
  - Downloadable learning materials
  - FAQ section
  - Additional learning resources and references

### 5. Responsive User Interface
- Mobile-friendly design
- Built with Tailwind CSS
- Consistent and modern UI/UX
- Accessible across different devices and screen sizes

### 6. Interactive User Experience
- Dynamic progress tracking
- Real-time updates
- Intuitive navigation
- Clean, minimalistic interface

## Configuration

### Environment Variables
The project uses environment variables for configuration. Create a `.env` file in the project root with the following settings:

- `PORT`: The port on which the server will run (default: 3000)
- `NODE_ENV`: Application environment (`development` or `production`)
- `DOMAIN`: Base URL of the application
- `SECRET`: Session secret key (can be any random string)
- `DB_URI`: MongoDB connection URI
  - Local example: `mongodb://localhost:27017/<dbname>`
  - Atlas example: `mongodb+srv://<user>:<password>@<cluster>.<subdomain>.mongodb.net/<dbname>?retryWrites=true&w=majority`

#### Optional Configuration

**Email Configuration** (for local login):
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender name

**OAuth Providers**:
- `GOOGLE_ID` and `GOOGLE_SECRET`: For Google OAuth login
- `GITHUB_ID` and `GITHUB_SECRET`: For GitHub OAuth login

### Build and Development Scripts
The project provides several npm scripts for different purposes:

- `npm start`: Run the production server
- `npm run dev`: Run the development server with hot-reloading
- `npm run css`: Watch and compile Tailwind CSS
- `npm run e2e`: Run end-to-end tests in Chrome
- `npm run e2e:watch`: Open Cypress in interactive mode
- `npm run e2e:record`: Run Cypress tests and record results

### Testing Configuration
- End-to-end testing is configured with Cypress
- Cypress settings can be found in `cypress.config.js`
  - Base URL: `http://0.0.0.0:3000`
  - Video recording is disabled by default
  - Chrome web security is disabled

### Dependencies
Key dependencies include:
- Express.js for web server
- Mongoose for MongoDB interaction
- Passport.js for authentication
- Tailwind CSS for styling
- Pug as the template engine

### Development Tools
Dev dependencies include:
- Nodemon for development server reloading
- Cypress for end-to-end testing
- Jest for unit testing
- Tailwind CSS for utility-first styling

## License

This project is licensed under the MIT License. For the full license details, see the [LICENSE](LICENSE) file in the repository.

Key points of the MIT License:
- Commercial use is permitted
- Modifications and distribution are allowed
- Private and commercial use is allowed
- A copy of the license and copyright notice must be included with the software

Copyright (c) 2022 Laura Abro