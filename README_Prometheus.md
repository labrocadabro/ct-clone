# CommunityTaught.org: 100Devs Learning Progress and Homework Management Platform

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage 100Devs class progress and homework assignments. The platform provides an integrated learning experience for students participating in the 100Devs bootcamp, offering robust features for monitoring educational milestones.

### Core Purpose
The application serves as a centralized tracking system that enables students to:
- Monitor their progress through 100Devs classes
- Track and manage homework assignments
- Maintain a structured overview of their learning journey

### Key Features
- Lesson tracking and progress monitoring
- Homework assignment management
- User authentication with multiple login methods (GitHub, Google, local)
- Responsive design with Tailwind CSS
- Secure data storage using MongoDB

### Benefits
- Streamlines student learning experience
- Provides a clear visual representation of educational progress
- Supports multiple authentication methods for easy access
- Built with a modern, scalable web technology stack

### Project Origins
The application was developed as a personal project, evolving from an existing homework tracker, with the goal of creating a more comprehensive learning management tool for the 100Devs community.

## Getting Started, Installation, and Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later recommended)
- Yarn or npm
- MongoDB (local installation or cloud-based MongoDB Atlas account)

### Environment Setup

1. Clone the repository:
```bash
git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
cd node-mongo-boilerplate
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the required configuration:
     - `PORT`: Web server port (default: 3000)
     - `DB_URI`: MongoDB connection string
     - `SECRET`: Session secret key
     - Optional: Configure email, Google, and GitHub authentication settings

### Running the Application

#### Development Mode
To run the application in development mode with hot reloading:
```bash
# Start the development server
yarn dev

# Compile Tailwind CSS (in a separate terminal)
yarn css
```

#### Production Mode
To run the application in production:
```bash
# Build Tailwind CSS
yarn css

# Start the production server
yarn start
```

### Testing

#### End-to-End Testing
Run Cypress end-to-end tests:
```bash
# Run tests in Chrome
yarn e2e

# Open Cypress test runner
yarn e2e:watch
```

### Additional Configuration Notes

- Tailwind CSS is used for styling and is configured to watch for changes
- Pug is used as the template engine
- Passport handles authentication (local, Google, GitHub)
- MongoDB is used for database management

### Port and Access

By default, the application runs on `http://localhost:3000` in development mode.

## Deployment

### Deployment Platforms

The application supports deployment on multiple platforms:

#### Fly.io Deployment
This project is configured for deployment on Fly.io with the following specifications:
- Uses Heroku builder version 22
- Internal port: 8080
- HTTPS enforcement enabled
- Automatic HTTPS via Fly.io's infrastructure
- Connection concurrency limits:
  - Soft limit: 20 connections
  - Hard limit: 25 connections

#### Local Production Deployment

To deploy the application locally in production mode:

```bash
# Install dependencies
yarn install

# Start the production server
yarn start
```

#### Environment Configuration
Before deployment, ensure you have configured the following:
- Set up a `.env` file with necessary environment variables
- Configure database connection strings
- Set up authentication provider credentials

#### Build and CSS Generation
Generate CSS for production:
```bash
yarn css
```

#### Recommended Deployment Steps
1. Install all dependencies
2. Generate production CSS
3. Set environment variables
4. Start the application with `yarn start`

#### Platform Compatibility
- Node.js compatible
- MongoDB required for data persistence
- Supports deployment on:
  - Fly.io
  - Heroku
  - Vercel (with serverless configuration)
  - DigitalOcean
  - Any platform supporting Node.js applications

## Feature Highlights

### Authentication
- Multiple login methods: Local credentials, Google OAuth, and GitHub OAuth
- User account management including password reset, email change, and account deletion
- Email verification process

### User Dashboard
- Personalized dashboard for tracking learning progress
- Account settings and profile management

### Lesson Management
- Browse and view all available lessons
- Track lesson progress with "watched" and "checked in" statuses
- Add, edit, and delete lessons (for administrators/educators)

### Homework Tracking
- Comprehensive homework management system
- Track individual homework items and their completion status
- Submit and mark homework as complete
- Import homework data

### Resources
- Centralized resources page with multiple sections
- Easy navigation between different resource categories

### Additional Features
- Responsive design with Tailwind CSS
- Secure authentication middleware
- Flash messaging for user feedback

## Configuration

### Environment Variables

The project uses a `.env` file for configuration. Key configuration options include:

- `PORT`: Specifies the server port (default: 3000)
- `NODE_ENV`: Sets the application environment (development/production)
- `DOMAIN`: Base URL for the application
- `SECRET`: Session secret key
- `DB_URI`: MongoDB connection string

#### Authentication Configuration
- `GOOGLE_ID` and `GOOGLE_SECRET`: Google OAuth credentials
- `GITHUB_ID` and `GITHUB_SECRET`: GitHub OAuth credentials

#### Email Configuration
When `NODE_ENV` is set to `production`, configure SMTP settings:
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender name

### Development Scripts

The project provides several npm scripts for different purposes:
- `start`: Run the production server
- `dev`: Run the development server with nodemon
- `css`: Watch and compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- `e2e:watch`: Open Cypress in interactive mode
- `e2e:record`: Run Cypress tests and record results

### Build Configuration

#### Tailwind CSS
- Configuration file: `tailwind.config.cjs`
- Input CSS: `src/tailwind.css`
- Output CSS: `src/assets/css/index.css`

#### Deployment
- Configured for deployment on Fly.io
- Uses Heroku builder
- Supports HTTPS
- Configures service concurrency limits

#### Cypress Configuration
- Base URL: `http://0.0.0.0:3000`
- Chrome web security disabled
- Video recording can be enabled

### Supported Features
- Local authentication
- Google OAuth login
- GitHub OAuth login
- MongoDB database integration
- SMTP email configuration
- Tailwind CSS styling
- Pug templating
- Cypress end-to-end testing

## Project Structure

The project follows a structured directory layout designed to separate concerns and organize different aspects of the application:

### Root Directory
- `.env.example`: Template for environment configuration
- `fly.toml`: Configuration for Fly.io deployment
- `package.json`: Project dependencies and scripts
- `yarn.lock`: Yarn dependency lockfile
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

### Source Code Structure
- `src/`: Primary application source code
  - `assets/`: Static assets for the application
    - `css/`: Stylesheets (including Font Awesome and custom styles)
    - `fonts/`: Web font files
    - `img/`: Image resources (thumbnails, resources, icons)
    - `js/`: Client-side JavaScript files for interactive features
    - `site.webmanifest`: Web app manifest file
    - `tailwind.css`: Tailwind CSS stylesheet

  - `config/`: Configuration files for database and authentication
    - `db.js`: Database configuration
    - `githubAuth.js`: GitHub OAuth configuration
    - `googleAuth.js`: Google OAuth configuration
    - `importData.js`: Data import utilities

  - `controllers/`: Application logic and request handlers
    - `auth.js`: Authentication controllers
    - `email.js`: Email-related controllers
    - `homework.js`: Homework management controllers
    - `lessons.js`: Lesson management controllers
    - `pages.js`: Page rendering controllers

  - `middleware/`: Express middleware functions
    - `auth.js`: Authentication middleware
    - `flash.js`: Flash message middleware

  - `models/`: Database models and schemas
    - Various models like `User.js`, `Homework.js`, `Lesson.js`, etc.

  - `routes/`: Express route definitions
    - `emailRouter.js`
    - `hwRouter.js`
    - `lessonRouter.js`
    - `mainRouter.js`
    - `oauthRouter.js`

  - `views/`: Pug template files
    - Multiple view files for different pages
    - `layouts/`: Base layout templates
    - `mixins/`: Reusable template components
    - `partials/`: Shared template fragments
    - `resources/`: Views for specific resource pages

  - `server.js`: Main application entry point

### Testing
- `cypress/`: End-to-end testing configuration
  - `e2e/`: Cypress test specifications
  - `fixtures/`: Test data
  - `support/`: Cypress support files

### Data
- `data/`: Static JSON data files
  - `homeworkextras.json`
  - `homeworkitems.json`
  - `homeworks.json`
  - `lessons.json`

The project is organized to maintain a clear separation of concerns, with distinct directories for different types of application components, making the codebase modular and easy to navigate.

## Technologies Used

### Backend
- **Runtime Environment**: Node.js (ES Module)
- **Web Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: 
  - Passport.js
  - Passport strategies:
    - Local authentication
    - GitHub OAuth
    - Google OAuth

### Frontend
- **Templating Engine**: Pug
- **CSS Framework**: Tailwind CSS
- **Font Icons**: Font Awesome

### Development Tools
- **Package Manager**: Yarn
- **Development Server**: Nodemon
- **Testing Frameworks**: 
  - Cypress (End-to-End Testing)
  - Jest (Unit Testing)
  - Vitest

### Additional Libraries and Tools
- **Environment Configuration**: dotenv
- **Logging**: Morgan
- **Email**: Nodemailer
- **Validation**: Validator
- **GitHub API Integration**: @octokit/core
- **Session Management**: express-session
- **CORS Handling**: cors

### Deployment and Infrastructure
- **Configuration**: fly.toml (suggests Fly.io deployment)

## Additional Notes

### Project Context

This application was developed as a comprehensive tracking system for 100Devs classes and homework, serving as a personal project that has grown into a community resource. The project reflects continuous learning and iterative development.

### Known Limitations

- The project was initially built without extensive collaboration considerations
- The use of Pug templating may present a barrier to potential contributors
- Documentation and contribution processes are still being refined

### Future Development Considerations

- Improve project documentation and contribution guidelines
- Explore alternative templating solutions that are more contributor-friendly
- Continue refactoring and optimizing the existing codebase

### Performance Insights

The application leverages an MVC architecture with modular design, utilizing:
- Node.js for server-side logic
- MongoDB for data persistence
- Passport.js for authentication
- Tailwind CSS for styling

### Deployment Notes

- The application is currently deployed at [CommunityTaught.org](https://communitytaught.org/)
- Supports multiple authentication methods, including local, GitHub, and Google OAuth
- Requires a MongoDB database for full functionality

### Developer Observations

The project embodies key software development principles:
- Iterative design
- Continuous improvement
- Learning through building
- Embracing complexity while maintaining readability

## Contributing

We welcome contributions from the community! Here's how you can help improve the project:

### Getting Started

1. **Find an Issue**
   - Browse through the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues)
   - Choose an issue that interests you
   - If no existing issue matches your proposed change, create a new issue explaining your suggestion

2. **Contribution Process**
   - Wait to be assigned to the issue to avoid duplicate work
   - Fork the repository
   - Create a branch named with the issue number and a brief description (e.g., `issue-1-lesson-card-styling`)
   - Make your changes, focusing only on the specific issue
   - Create a pull request linking to the original issue

### Contribution Guidelines

- Make sure your code follows the project's existing coding style
- Include tests for new features or bug fixes when applicable
- Write clear, concise commit messages
- Update documentation if your changes affect existing functionality

### Development Setup

- Use `yarn dev` for development mode
- Use `yarn e2e` to run end-to-end tests
- Use `yarn css` to watch Tailwind CSS changes

### Submitting Changes

1. Ensure all tests pass
2. Create a pull request with a clear description of your changes
3. Link your pull request to the relevant issue
4. Wait for code review and address any feedback

**Note**: By contributing, you agree that your contributions will be licensed under the project's MIT License.

## License

This project is licensed under the MIT License. 

### License Details

The MIT License is a permissive free software license that allows you to:
- Use the software commercially
- Modify the software
- Distribute the software
- Privately use the software

### Conditions

- Include the original license and copyright notice in any substantial portion of the software
- The software is provided "as is", without warranties

For the full license text, see the [LICENSE](LICENSE) file in the repository.

#### Copyright

Copyright (c) 2022 Laura Abro