# CommunityTaught.org: A Comprehensive Learning Progress Tracking Platform for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage learning progress for 100Devs students. The platform provides an integrated solution for monitoring class participation, homework assignments, and student progress.

### Core Purpose
The application serves as a centralized hub for 100Devs students to:
- Track their progress through coding classes
- Manage and submit homework assignments
- Monitor individual learning milestones

### Key Features
- User authentication with multiple login methods (GitHub, Google, local)
- Lesson tracking and progress monitoring
- Homework assignment management
- Resource library for additional learning materials
- Dashboard for personalized student progress

### Benefits
- Simplifies learning tracking for coding students
- Provides a centralized platform for course-related activities
- Offers easy access to resources and assignment management
- Supports multiple authentication methods for user convenience

### Technical Architecture
Built as a full-stack web application using a modern, modular architecture with:
- Node.js backend
- Express.js web framework
- MongoDB for data storage
- Pug templating engine
- Tailwind CSS for responsive design
- Passport.js for authentication

## Getting Started, Installation, and Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
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
yarn install
# or
npm install
```

3. Configure environment variables:
- Copy `.env.example` to `.env`
- Fill in the required configuration values:
  - `PORT`: Default is 3000
  - `SECRET`: A random string for session management
  - `DB_URI`: MongoDB connection string
  - Optional OAuth and email settings for additional features

### Development Setup

#### Running the Application

Start the development server with hot-reloading:
```bash
yarn dev
# or
npm run dev
```

#### Compiling CSS

If you're making changes to Tailwind CSS, run the CSS watcher:
```bash
yarn css
# or
npm run css
```

### Production Deployment

To run the application in production mode:
```bash
yarn start
# or
npm start
```

### Testing

#### End-to-End Testing

Run Cypress tests:
```bash
# Run tests in Chrome
yarn e2e
# Open Cypress interactive mode
yarn e2e:watch
```

### Additional Configuration Notes

- Authentication supports local login, Google OAuth, and GitHub OAuth
- Email functionality requires SMTP configuration in production
- Customize environment variables in `.env` for your specific setup

## Deployment

### Deployment Prerequisites

Before deploying, ensure you have the following:
- Node.js (version compatible with ES modules)
- MongoDB database connection
- Environment variables configured

### Production Deployment

#### Fly.io Deployment
The application is configured for deployment on Fly.io:

```bash
# Install Fly CLI
fly launch

# Set environment variables
fly secrets set NODE_ENV=production
fly secrets set MONGODB_URI=your_mongodb_connection_string

# Deploy the application
fly deploy
```

#### General Deployment Steps

1. Install production dependencies:
```bash
yarn install --production
```

2. Build Tailwind CSS:
```bash
npx tailwindcss -i ./src/tailwind.css -o ./src/assets/css/index.css
```

3. Start the application:
```bash
yarn start
```

### Environment Configuration

Create a `.env` file with the following key configurations:
- `MONGODB_URI`: MongoDB connection string
- `SESSION_SECRET`: Secret for session management
- `GITHUB_CLIENT_ID`: GitHub OAuth client ID
- `GITHUB_CLIENT_SECRET`: GitHub OAuth client secret
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret

### Recommended Hosting Platforms
- Fly.io (configured)
- Render
- Heroku
- DigitalOcean App Platform

### Scaling Considerations
- The application uses a MongoDB database
- Recommended minimum: 1 CPU, 512MB RAM
- Scale connections up to 25 concurrent users

### Notes
- Ensure all environment variables are securely configured
- Use a production-ready MongoDB instance
- Set `NODE_ENV=production` for optimized performance

## Feature Highlights

### User Authentication and Account Management
- Secure user registration with email validation
- Email-based login with password authentication
- Password reset functionality
- Email verification process
- Account email change and management
- Option to delete user account

### Learning Management System
#### Lessons
- Comprehensive lesson tracking system
- Ability to mark lessons as watched
- Check-in functionality for lessons
- Navigation between lessons (previous/next)
- Lesson progress tracking for authenticated users

#### Homework Management
- Detailed homework tracking
- Support for required and optional homework items
- Ability to mark individual homework items as complete
- Homework submission tracking
- Progress tracking for homework and extra assignments

### User Dashboard
- Personalized dashboard for tracking learning progress
- View of completed and pending lessons
- Overview of homework assignments
- Progress visualization

### Additional Features
- Support for multiple authentication methods (local, potentially OAuth)
- Responsive design with mobile-friendly interfaces
- Flash messaging system for user notifications
- Import/export of learning progress

## Configuration

### Environment Configuration

The project uses environment variables for configuration. Copy the `.env.example` file to `.env` and fill in the following settings:

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Application environment (development/production)
- `DOMAIN`: Base URL of the application
- `SECRET`: Session secret key
- `DB_URI`: MongoDB connection string

#### Authentication Configuration

##### Local Authentication
- SMTP settings for email functionality:
  - `SMTP_SERVER`: SMTP server address
  - `SMTP_PORT`: SMTP server port
  - `SMTP_USER`: SMTP username
  - `SMTP_PASS`: SMTP password
  - `FROM_EMAIL`: Sender email address
  - `FROM_NAME`: Sender name

##### OAuth Authentication
- Google OAuth:
  - `GOOGLE_ID`: Google OAuth client ID
  - `GOOGLE_SECRET`: Google OAuth client secret

- GitHub OAuth:
  - `GITHUB_ID`: GitHub OAuth client ID
  - `GITHUB_SECRET`: GitHub OAuth client secret

### Build and Development Configuration

#### NPM Scripts
- `start`: Run production server
- `dev`: Run development server with nodemon
- `css`: Watch and compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- Various Cypress-related scripts for testing and verification

#### Tailwind CSS Customization
- Custom breakpoints defined
- Extended color palette with 'twilight' theme
- Custom font families
- Includes `@tailwindcss/forms` plugin
- Safelist for dynamic class generation

#### Cypress Configuration
- Base URL: `http://0.0.0.0:3000`
- Chrome web security disabled for testing
- Video recording off by default

#### Deployment Configuration (Fly.io)
- Internal port: 8080
- HTTPS enforced
- Concurrency limits:
  - Soft limit: 20 connections
  - Hard limit: 25 connections
- Auto-rollback enabled
- Uses Heroku builder

## Project Structure

The project follows a structured directory layout designed to separate concerns and organize different aspects of the application:

### Root Directory
- `.env.example`: Template for environment configuration
- `package.json`: Project dependencies and scripts
- `cypress.config.js`: Cypress testing configuration
- `fly.toml`: Deployment configuration for Fly.io
- `tailwind.config.cjs`: Tailwind CSS configuration

### `src/` Directory
Primary application source code organized into key subdirectories:

#### `src/assets/`
- `css/`: Stylesheets (including Font Awesome and custom styles)
- `fonts/`: Web font files
- `img/`: Image assets, including thumbnails, favicons, and resource images
- `js/`: Client-side JavaScript files for various functionalities
- `site.webmanifest`: Web app manifest file

#### `src/config/`
Configuration files for:
- Database connection
- GitHub authentication
- Google authentication
- Data import processes

#### `src/controllers/`
Handle application logic for:
- Authentication
- Email management
- Homework
- Lessons
- Page rendering

#### `src/middleware/`
Application middleware for:
- Authentication checks
- Flash messaging

#### `src/models/`
Data models representing application entities:
- User
- Homework
- Lessons
- Progress tracking
- Tokens

#### `src/routes/`
Define application routes:
- Main routing
- OAuth authentication
- Homework
- Lessons
- Email

#### `src/views/`
Pug template files for rendering pages:
- Page templates
- Layouts
- Mixins (reusable template components)
- Partials (shared page elements)

### `data/`
JSON files containing static data for:
- Homework items
- Lessons
- Homework extras

### `cypress/`
End-to-end testing configuration:
- `e2e/`: Test specification files
- `fixtures/`: Test data
- `support/`: Custom commands and test configuration

## Technologies Used

#### Backend
- **Runtime**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: 
  - Passport.js
  - Passport strategies:
    - Local authentication
    - GitHub OAuth
    - Google OAuth

#### Frontend
- **Template Engine**: Pug
- **Styling**: Tailwind CSS

#### Testing
- **End-to-End Testing**: Cypress
- **Unit Testing**: 
  - Jest
  - Vitest

#### Development Tools
- Nodemon (development server)
- Morgan (HTTP request logger)

#### Deployment
- Fly.io (hosting platform)

#### Libraries and Utilities
- Dotenv (environment configuration)
- Validator.js (input validation)
- Nodemailer (email functionality)
- CORS (Cross-Origin Resource Sharing)

#### Authentication Libraries
- @octokit/core (GitHub API)
- @octokit/auth-oauth-user (GitHub OAuth)

#### Session Management
- Express-session
- Connect-mongodb-session

## Additional Notes

### Project Origins and Philosophy

This project emerged from a personal need to track progress in the 100Devs bootcamp, evolving from a previous homework tracker into a comprehensive web application. The development approach emphasizes continuous improvement and learning, acknowledging that initial implementations may require iteration.

### System Integrations

The application integrates multiple authentication methods, including:
- GitHub OAuth
- Google OAuth
- Email and password authentication

### Data Management

The project utilizes MongoDB for data storage, with a structured approach to tracking:
- User progress
- Homework assignments
- Lesson tracking
- Extra homework items

### Third-Party Dependencies

Key external services and tools used in the project include:
- MongoDB (database)
- Mailhog (for email testing)
- Cypress (for end-to-end testing)

### Performance Considerations

The project is built with a focus on modularity, using:
- Middleware for authentication and request handling
- Separation of concerns between routes, controllers, and models
- Client-side JavaScript for interactive features

### Known Limitations

The project acknowledges some technical debt, particularly:
- Initial lack of collaboration-friendly design
- Use of Pug templating, which may be less familiar to contributors
- Ongoing need for documentation and process improvements

### Future Development Priorities

Areas identified for potential enhancement include:
- Improving project documentation
- Refactoring for better contributor accessibility
- Exploring alternative templating solutions
- Continuing to optimize application performance and user experience

## Contributing

We welcome contributions to the Community Taught project! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Getting Started

1. **Find an Issue**
   - Browse the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab
   - Look for open issues you'd like to work on
   - If you have a suggestion, create a new issue explaining the proposed change

2. **Contribution Process**
   - Wait to be assigned to an issue to avoid duplicate work
   - Fork the repository
   - Create a branch named `issue-[number]-[short-description]`
   - Make your changes
   - Create a pull request linking to the original issue

### Development Setup

- Use `yarn dev` to run the development server
- Use `yarn css` to watch and compile Tailwind CSS
- Use `yarn e2e:watch` to run Cypress end-to-end tests
- Ensure all tests pass before submitting a pull request

### Testing

The project uses:
- Cypress for end-to-end testing
- Jest for unit testing
- Vitest for additional testing support

### Code Guidelines
- Follow the existing code style in the project
- Write clear, concise, and meaningful commit messages
- Include tests for new features or bug fixes
- Update documentation when necessary

### Pull Request Process
- Describe the purpose of your changes
- Link your pull request to the relevant issue
- Be prepared to make requested modifications during review

### Reporting Issues
- Use the GitHub Issues tab
- Provide a clear and descriptive title
- Include steps to reproduce the issue
- Specify the expected vs. actual behavior

Thank you for contributing to Community Taught!

## License

This project is licensed under the MIT License. 

### License Details

The MIT License is a permissive free software license that allows users to:
- Use the software for any purpose
- Modify the software
- Distribute the software
- Sublicense the software
- Use the software commercially

### Conditions

- Include the original copyright notice
- Include the original license text in any substantial copy of the software

### Liability

The software is provided "as is" without any warranty. The authors are not liable for any claims or damages related to the software.

### Full License

For the complete license text, see the [LICENSE](LICENSE) file in the repository.

### Copyright

Copyright (c) 2022 Laura Abro