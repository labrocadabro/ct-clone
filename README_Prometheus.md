# CommunityTaught.org: A Comprehensive Learning Progress Tracking Platform for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage learning progress for 100Devs classes and homework. It provides an integrated platform for students to monitor their educational journey, track assignments, and maintain a record of their learning milestones.

### Core Purpose
The application serves as a centralized tracking system for 100Devs students, offering:
- Detailed lesson tracking
- Homework progress monitoring
- User authentication and personalized dashboards
- Resource management for learning

### Key Features
- Secure user authentication via GitHub and Google OAuth
- Interactive lesson and homework tracking
- Progress visualization
- Resource library for learning materials
- Responsive design using Tailwind CSS

### Key Benefits
- Simplifies learning progress tracking
- Provides a centralized platform for 100Devs students
- Enhances learning organization and motivation
- Supports multiple authentication methods
- Open-source and community-driven

## Getting Started, Installation, and Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or later recommended)
- npm or Yarn
- MongoDB (local installation or MongoDB Atlas account)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
cd node-mongo-boilerplate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure Environment Variables
Create a `.env` file in the project root by copying the `.env.example`:
```bash
cp .env.example .env
```

Edit the `.env` file and set the following required variables:
- `PORT`: The port your application will run on (default: 3000)
- `SECRET`: A random string for session management
- `DB_URI`: Your MongoDB connection URI
- `DOMAIN`: Your application's domain (default: http://localhost:3000)

### Optional Configuration
- For email functionality: Configure SMTP settings in the `.env` file
- For Google/GitHub OAuth: Add `GOOGLE_ID`, `GOOGLE_SECRET`, `GITHUB_ID`, and `GITHUB_SECRET`

### Running the Application

#### Development Mode
To run the application in development mode with hot reloading:
```bash
npm run dev
# or
yarn dev
```

#### Production Mode
To run the application in production mode:
```bash
npm start
# or 
yarn start
```

### Additional Commands

- Compile Tailwind CSS (watch mode):
```bash
npm run css
# or
yarn css
```

- Run End-to-End Tests:
```bash
npm run e2e
# or
yarn e2e
```

### Deployment Notes
- Set `NODE_ENV` to `production` in your production environment
- Ensure all environment variables are correctly configured
- Use a production-ready MongoDB instance

### Troubleshooting
- Verify all dependencies are installed correctly
- Check MongoDB connection URI
- Ensure required environment variables are set

## Deployment

### Prerequisites

- Node.js (version specified in `package.json`)
- MongoDB database
- Yarn or npm package manager

### Environment Configuration

1. Create a `.env` file based on the `.env.example` template
2. Configure necessary environment variables, including:
   - Database connection string
   - Authentication credentials
   - Port configurations

### Local Deployment

To deploy the application locally:

```bash
# Install dependencies
yarn install

# Start the development server
yarn dev

# Build CSS (if needed)
yarn css

# Start production server
yarn start
```

### Production Deployment

#### Fly.io Deployment

This application is configured for deployment on Fly.io:

```bash
# Install Fly CLI
# Follow Fly.io documentation for initial setup

# Launch the application
fly launch

# Deploy to production
fly deploy
```

Key deployment configurations:
- Internal port: 8080
- HTTPS enabled
- Automatic HTTPS certificate management
- Connection concurrency limits applied

#### Docker Deployment

While no explicit Dockerfile is present, the application can be containerized:

1. Create a `Dockerfile` with Node.js base image
2. Copy application files
3. Install dependencies
4. Expose port 8080
5. Start the application with `yarn start`

#### Additional Deployment Notes

- Ensure all environment variables are properly set in the production environment
- Configure MongoDB connection for production database
- Set up appropriate security groups and network configurations
- Implement monitoring and logging for the production instance

### Continuous Integration

End-to-end testing can be performed using:

```bash
# Run Cypress tests
yarn e2e

# Watch Cypress tests
yarn e2e:watch
```

## Feature Highlights

### Authentication
- Multiple authentication methods supported:
  - Local registration and login
  - GitHub OAuth authentication
  - Google OAuth authentication
- Secure password reset functionality
- User account management

### Learning Platform Features
- Interactive Lesson Management
  - View all available lessons
  - Detailed lesson pages
  - Track lesson progress
  - Mark lessons as completed

### Homework Tracking
- Comprehensive homework tracking system
  - Add new homework assignments
  - View homework details
  - Track homework progress
  - Mark homework items as completed

### User Dashboard
- Personalized dashboard displaying:
  - Lesson progress
  - Homework status
  - Account information

### Resource Hub
- Extensive resources section including:
  - Community projects
  - Downloadable resources
  - FAQ
  - Coding challenges
  - Stream team information

### Additional Features
- Responsive design with Tailwind CSS
- Flash messaging for user notifications
- Mobile-friendly interface
- Error handling with custom 404 page

## Configuration

### Environment Configuration

The project uses a `.env` file for configuration. Key configuration options include:

- `PORT`: Defines the server port (default: 3000)
- `NODE_ENV`: Sets the application environment (development/production)
- `DOMAIN`: Base URL of the application
- `SECRET`: Session secret key
- `DB_URI`: MongoDB connection string

#### Authentication Configuration

The application supports multiple authentication methods:

##### Local Authentication
- Requires SMTP settings for email functionality:
  - `SMTP_SERVER`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `FROM_EMAIL`
  - `FROM_NAME`

##### OAuth Authentication
- Google Login:
  - `GOOGLE_ID`
  - `GOOGLE_SECRET`
- GitHub Login:
  - `GITHUB_ID`
  - `GITHUB_SECRET`

### Development Configurations

#### Tailwind CSS
Configured in `tailwind.config.cjs` with:
- Custom screen breakpoints
- Extended theme colors (twilight palette)
- Custom font families
- Form plugins

#### Cypress Testing
Configured in `cypress.config.js`:
- Base URL: `http://0.0.0.0:3000`
- Chrome web security disabled
- Video recording optional

#### Deployment Configuration
Fly.io deployment configuration in `fly.toml`:
- Internal port: 8080
- HTTPS forced
- Concurrency limits
  - Hard limit: 25 connections
  - Soft limit: 20 connections

### NPM Scripts

Key scripts for configuration and development:
- `start`: Run production server
- `dev`: Run development server with nodemon
- `css`: Watch and compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- Various Cypress utility commands

## Project Structure

The project follows a standard Node.js web application structure with clear separation of concerns:

### Top-Level Directory
- `.env.example`: Template for environment configuration
- `fly.toml`: Configuration for Fly.io deployment
- `package.json`: Project dependencies and scripts
- `tailwind.config.cjs`: Tailwind CSS configuration
- `cypress.config.js`: Cypress testing configuration

### Source Code Structure
- `src/`: Main application source code
  - `assets/`: Static assets
    - `css/`: Stylesheets
    - `fonts/`: Custom font files
    - `img/`: Images and graphics
    - `js/`: Client-side JavaScript files
    - `site.webmanifest`: Web app manifest
    - `tailwind.css`: Tailwind CSS styles
  
  - `config/`: Application configuration files
    - Database, authentication, and data import configurations
  
  - `controllers/`: Request handling logic
    - Authentication, email, homework, lessons, and page controllers
  
  - `middleware/`: Express middleware
    - Authentication and flash message middleware
  
  - `models/`: Data models
    - User, homework, lesson, and progress-related models
  
  - `routes/`: Application route definitions
    - Routers for email, homework, lessons, main routes, and OAuth
  
  - `server.js`: Main server entry point
  
  - `views/`: Pug template files
    - Page templates
    - Layout and partial templates
    - Mixins for reusable view components

### Testing
- `cypress/`: End-to-end testing
  - `e2e/`: Test specification files
  - `fixtures/`: Test data
  - `support/`: Test utility files

### Data
- `data/`: Static JSON data files
  - Homework and lesson related data

### Deployment and Development
- `.gitignore`: Git ignore configuration
- `yarn.lock`: Yarn dependency lock file

## Technologies Used

#### Backend
- Node.js
- Express.js (Web Framework)
- Mongoose (MongoDB Object Modeling)
- Passport.js (Authentication)
  - Passport Local
  - Passport GitHub
  - Passport Google OAuth 2.0

#### Frontend
- Pug (Template Engine)
- Tailwind CSS (Styling Framework)
- Font Awesome (Icon Library)

#### Database
- MongoDB

#### Authentication
- GitHub OAuth
- Google OAuth
- Local Authentication

#### Testing
- Cypress (End-to-End Testing)
- Jest (Unit Testing)
- Vitest

#### Development Tools
- Nodemon (Development Server)
- Dotenv (Environment Configuration)
- Morgan (HTTP Request Logging)

#### Utilities
- Validator.js (Input Validation)
- Nodemailer (Email Sending)
- CORS (Cross-Origin Resource Sharing)

#### Version Control & Deployment
- Git
- Fly.io (Deployment Platform, based on fly.toml)

#### External Libraries
- Octokit (GitHub API Client)

## Additional Notes

### Performance and Scaling
The application is built with performance considerations in mind, utilizing an MVC architecture and leveraging modern Node.js technologies. For optimal performance, consider:
- Using a production-grade MongoDB instance
- Implementing caching mechanisms for frequently accessed data
- Monitoring application metrics in a production environment

### Authentication Strategies
Multiple authentication methods are supported:
- Local authentication
- Google OAuth
- GitHub OAuth

Each strategy requires specific configuration in the `.env` file, including client IDs and secrets for OAuth providers.

### Environment Considerations
- Development environments can run with minimal configuration
- Production deployments require complete environment variable setup
- The application supports different configuration modes via `NODE_ENV`

### Security Notes
- Always use strong, unique values for session secrets
- Keep environment variables secure and out of version control
- Use HTTPS in production environments
- Regularly update dependencies to patch potential vulnerabilities

### Monitoring and Logging
- Morgan middleware is integrated for request logging
- Consider implementing additional logging for critical application events
- Use Node.js and MongoDB monitoring tools for performance insights

### Browser and Device Support
- Tailwind CSS provides responsive design capabilities
- End-to-end testing is configured with Cypress across multiple browsers
- Supports Chrome, Edge, and Firefox for comprehensive testing

## Contributing

We welcome contributions from the community! To contribute to this project, please follow these guidelines:

### Finding an Issue
- Browse the [GitHub issues](https://github.com/labrocadabro/communitytaught/issues) to find tasks you'd like to work on
- If you have an idea not currently listed, create a new issue explaining your proposed change

### Contribution Process
1. **Issue Assignment**: 
   - Find an issue you're interested in
   - Request to be assigned to prevent duplicate work

2. **Development Workflow**:
   - Fork the repository
   - Create a branch named with the issue number and a brief description (e.g., `issue-1-lesson-card-styling`)
   - Make changes focused on the specific issue
   - Commit with clear, descriptive commit messages

3. **Pull Request Submission**:
   - Create a pull request linking to the original issue
   - Provide a detailed description of your changes
   - Explain the rationale behind your modifications

4. **Review Process**:
   - Wait for project maintainers to review your pull request
   - Be prepared to make requested changes
   - Collaborate and communicate openly

### Best Practices
- Make changes related to the specific issue
- Create separate issues/branches for unrelated changes
- Maintain a respectful and collaborative attitude

Thank you for helping improve the project!

## License

This project is licensed under the MIT License. 

### License Details

The MIT License is a permissive free software license that allows users to do almost anything with the project's code with limited restrictions. 

#### Key Permissions
- Commercial use
- Modification
- Distribution
- Private use

#### Limitations
- No liability
- No warranty

For the full license text, see the [LICENSE](LICENSE) file in the repository.

© 2022 Laura Abro