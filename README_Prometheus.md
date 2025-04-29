# CommunityTaught.org: A Comprehensive Learning Management Platform for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage 100Devs class materials and homework assignments. The platform provides a centralized system for students to track their learning progress, access resources, and manage course-related activities.

### Key Features
- Comprehensive lesson and homework tracking
- User authentication with multiple login methods (GitHub, Google, local)
- Interactive dashboard for monitoring course progress
- Resource repository for additional learning materials
- Responsive design using Tailwind CSS

### Purpose
The application solves several key challenges for 100Devs students:
- Centralized tracking of course progress
- Easy access to lesson materials and homework assignments
- Simplified progress monitoring
- Community-focused learning resource management

### Benefits
- Streamlines learning management for 100Devs students
- Provides a single platform for course-related activities
- Supports multiple authentication methods for user convenience
- Offers an intuitive interface for tracking educational progress

## Getting Started, Installation, and Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or later recommended)
- Yarn package manager
- MongoDB (local installation or cloud-based MongoDB instance)

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
cd node-mongo-boilerplate
```

2. Install dependencies:
```bash
yarn install
```

3. Configure environment variables:
- Copy `.env.example` to `.env`
- Fill in the required configuration values:
  - `PORT`: Web server port (default: 3000)
  - `SECRET`: Session secret key
  - `DB_URI`: MongoDB connection string
  - Optional: Email, Google, and GitHub authentication settings

### Development Setup

#### Running the Application

Start the development server with hot-reloading:
```bash
yarn dev
```

Start the Tailwind CSS compiler (in a separate terminal):
```bash
yarn css
```

The application will be available at `http://localhost:3000`

### Production Build

To run the application in production mode:
```bash
yarn start
```

### Testing

#### End-to-End Testing

Run Cypress E2E tests:
```bash
# Run tests in Chrome
yarn e2e

# Open Cypress interactive test runner
yarn e2e:watch
```

### Additional Configuration Notes

- Authentication supports local, Google, and GitHub login strategies
- Configure SMTP settings for email functionality in production
- Modify environment variables in `.env` to customize application behavior

## Deployment

### Prerequisites

- Node.js (version 16 or higher)
- MongoDB
- Yarn package manager

### Production Deployment

#### Fly.io Deployment

This application is configured for deployment on Fly.io:

```bash
# Install Fly.io CLI
brew install flyctl  # macOS
# Or for other systems, follow Fly.io installation instructions

# Login to Fly.io
flyctl auth login

# Deploy the application
flyctl deploy
```

The deployment configuration is managed through the `fly.toml` file, which specifies:
- Internal port: 8080
- HTTPS redirection
- Connection concurrency limits

#### Environment Configuration

1. Create a `.env` file with the following required variables:
   - `MONGODB_URI`: Connection string for your MongoDB database
   - `SESSION_SECRET`: Secret key for session management
   - Authentication provider credentials (GitHub, Google)

2. Ensure all sensitive information is properly configured in your deployment environment.

### Build and Start Commands

```bash
# Install dependencies
yarn install

# Build Tailwind CSS
yarn css

# Start production server
yarn start
```

### Deployment Platforms

The application is compatible with:
- Fly.io (current deployment platform)
- Heroku
- Vercel (with some configuration adjustments)

### Scaling and Performance

- The application supports up to 25 concurrent connections
- Recommended minimum server specifications:
  - 1 CPU
  - 1GB RAM

### Monitoring and Logs

Use Fly.io CLI for monitoring:
```bash
flyctl logs
```

### Continuous Deployment

Integrate with your preferred CI/CD platform using the existing npm/yarn scripts:
- `yarn start`: Production server
- `yarn dev`: Development with nodemon
- `yarn test`: Run test suite

## Feature Highlights

### User Authentication
- Comprehensive user account management system
- Secure user registration and login
- Password reset and account recovery
- Email change functionality
- Account deletion option

### Dashboard and User Experience
- Personalized user dashboard
- Account management page
- Resources section with multiple pages
- About page for additional information

### Lesson Management
- View all lessons
- Individual lesson pages
- Lesson tracking features:
  - Mark lessons as watched
  - Check-in functionality
- Add, edit, and delete lessons (likely for administrators)

### Homework Tracking
- Homework overview page
- Add and edit homework assignments
- Granular homework item tracking
- Ability to mark homework items as complete
- Support for extra homework tasks
- Homework submission tracking

### Resources
- Extensive resources section
- Multiple resource pages
- Community projects
- Downloadable content
- FAQ and additional support materials

## Configuration

The project supports comprehensive configuration through environment variables and configuration files:

### Environment Variables
Configuration is managed using a `.env` file with the following key settings:

- `PORT`: Defines the server port (default: 3000)
- `NODE_ENV`: Sets the application environment (e.g., development, production)
- `DOMAIN`: Base URL for the application
- `SECRET`: Session secret key for security
- `DB_URI`: MongoDB connection string

#### Authentication Configurations
- `GOOGLE_ID` and `GOOGLE_SECRET`: For Google OAuth authentication
- `GITHUB_ID` and `GITHUB_SECRET`: For GitHub OAuth authentication

#### Email Configuration
When `NODE_ENV` is set to `production`, configure SMTP settings:
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender display name

### Frontend Configuration
#### Tailwind CSS
Tailwind CSS is configured in `tailwind.config.cjs` with:
- Custom screen breakpoints
- Extended font families
- Custom color palette (twilight theme)
- Plugins: `@tailwindcss/forms`

### Testing Configuration
Cypress end-to-end testing is configured in `cypress.config.js`:
- Base URL: `http://0.0.0.0:3000`
- Chrome web security disabled
- Video recording turned off

### Deployment Configuration
The `fly.toml` file provides deployment settings for Fly.io:
- Internal port: 8080
- HTTPS enforcement
- Concurrency limits
- Automatic rollback on deployment

## Project Structure

The project follows a structured MVC (Model-View-Controller) architecture with clear separation of concerns:

### Root Directory
- `.env.example`: Template for environment configuration
- `package.json`: Project dependencies and scripts
- `fly.toml`: Deployment configuration for Fly.io
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

### Source Code (`/src`)
#### Configuration (`/src/config`)
- Database configuration and authentication setup
  - `db.js`: Database connection settings
  - `githubAuth.js`: GitHub OAuth configuration
  - `googleAuth.js`: Google OAuth configuration
  - `importData.js`: Data import utilities

#### Controllers (`/src/controllers`)
- Handle application logic and request processing
  - `auth.js`: Authentication-related operations
  - `email.js`: Email-related functionality
  - `homework.js`: Homework management
  - `lessons.js`: Lesson-related operations
  - `pages.js`: Page rendering logic

#### Middleware (`/src/middleware`)
- Request processing and authentication middleware
  - `auth.js`: Authentication checks
  - `flash.js`: Flash message handling

#### Models (`/src/models`)
- Data models representing database schemas
  - User-related models: `User.js`, `Token.js`
  - Homework-related models: `Homework.js`, `HomeworkItem.js`, `HomeworkProgress.js`, `ExtraProgress.js`
  - Lesson-related models: `Lesson.js`, `LessonProgress.js`

#### Routes (`/src/routes`)
- Define application endpoint routing
  - `mainRouter.js`: Primary route definitions
  - `emailRouter.js`: Email-related routes
  - `hwRouter.js`: Homework routes
  - `lessonRouter.js`: Lesson-related routes
  - `oauthRouter.js`: OAuth authentication routes

#### Views (`/src/views`)
- Pug template files for rendering pages
  - Layout templates in `layouts/`
  - Page-specific templates (e.g., `index.pug`, `login.pug`, `dashboard.pug`)
  - Partial templates in `partials/`
  - Mixin templates in `mixins/`
  - Resource-specific views in `resources/`

#### Assets (`/src/assets`)
- Static assets for the application
  - `/css`: Stylesheets including Font Awesome and custom styles
  - `/fonts`: Web fonts
  - `/img`: Images, icons, and thumbnails
  - `/js`: Client-side JavaScript files
  - `/data`: Static JSON data files

### Testing (`/cypress`)
- End-to-end testing configuration
  - `e2e/`: Test specification files
  - `fixtures/`: Test data
  - `support/`: Custom commands and test configurations

### Data (`/data`)
- JSON files containing static data
  - `homeworks.json`
  - `lessons.json`
  - `homeworkitems.json`
  - `homeworkextras.json`

## Technologies Used

### Web Technologies
- **Frontend**
  - Pug (template engine)
  - Tailwind CSS (styling framework)
  - Vanilla JavaScript

### Backend
- **Runtime**
  - Node.js
  - ES Module support

### Server Framework
- Express.js

### Database
- MongoDB (via Mongoose)

### Authentication
- Passport.js
  - Local authentication
  - GitHub OAuth
  - Google OAuth

### Testing
- Cypress (End-to-End Testing)
- Jest (Unit Testing)
- Vitest

### Development Tools
- Nodemon (development server)
- Morgan (HTTP request logger)

### Deployment
- Fly.io (platform configuration present)

### Utilities
- Dotenv (environment configuration)
- Validator.js (input validation)
- Nodemailer (email functionality)

### External Integrations
- GitHub API (via Octokit)
- Google OAuth

## Additional Notes

### Performance and Scalability
The application is built with performance considerations in mind, utilizing modern web technologies and efficient data management strategies. The use of MongoDB provides flexible data storage, while Tailwind CSS ensures lightweight and responsive styling.

### Authentication and Security
Multiple authentication methods are supported, including:
- Local authentication
- GitHub OAuth
- Google OAuth

Passport.js is used to manage and streamline the authentication process, providing a secure and flexible login experience.

### Testing and Quality Assurance
The project includes end-to-end (E2E) testing capabilities using Cypress, with support for multiple browsers:
- Chrome
- Edge
- Firefox

### Potential Improvements
While the project is functional, there are ongoing opportunities for enhancement:
- Refactoring template engine from Pug to a more contributor-friendly alternative
- Continuous documentation and process improvements
- Performance optimizations
- Expanded test coverage

### Compatibility
- Runs on Node.js with ES Module support
- Compatible with modern web browsers
- Responsive design suitable for desktop and mobile devices

### Data Management
The application leverages MongoDB for robust and flexible data storage, with models covering various aspects of the learning platform, including:
- User profiles
- Homework tracking
- Lesson progress
- Authentication tokens

### Future Development
The project is actively maintained with a focus on improving user experience, expanding features, and enhancing community collaboration.

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Getting Started

1. **Find an Issue**
   - Browse the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab
   - Look for open issues or create a new one if you have a suggestion
   - Comment on the issue to express your interest in working on it

2. **Contribution Process**
   - Wait to be assigned to the issue to avoid duplicate work
   - Fork the repository
   - Create a new branch named `issue-{number}-{brief-description}`
   - Make your changes
   - Submit a pull request linking to the original issue

### Development Setup

- Ensure you have Node.js installed
- Use `yarn` to install dependencies
- Use `yarn dev` to run the development server
- Use `yarn e2e` to run end-to-end tests
- Use `yarn test` for unit tests (currently not configured)

### Code Guidelines

- Follow existing code structure and patterns
- Write clear, concise, and descriptive comments
- Ensure your code passes existing tests
- Keep pull requests focused and limited to specific issues

### Testing

- End-to-end tests are implemented using Cypress
- Run tests with `yarn e2e`
- Add or update tests for new features or bug fixes

### Commit Messages

- Use clear and descriptive commit messages
- Reference the issue number in your commit message
- Follow conventional commit message format if possible

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Collaborate openly and professionally

### Reporting Issues

- Use GitHub Issues to report bugs or suggest improvements
- Provide detailed information about the issue
- Include steps to reproduce, expected behavior, and actual results

Thank you for contributing to Community Taught!

## License

This project is licensed under the MIT License. For the full license text, see the [LICENSE](LICENSE) file.

#### Key License Terms
- Free to use, modify, and distribute
- Must include original copyright notice
- Provided "as is" without warranty
- No liability for authors in case of damages

#### Copyright
Copyright (c) 2022 Laura Abro