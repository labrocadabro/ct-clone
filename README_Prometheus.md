# Community Taught: An Open-Source Learning Management Platform for Collaborative Education

## Project Overview

Community Taught is a comprehensive web application designed to support an educational learning platform with robust features for tracking and managing lessons, homework, and user progress.

### Core Purpose
The project serves as a modern, full-featured learning management system that enables:
- Structured lesson tracking and progression
- Homework management and progress monitoring
- User authentication through multiple providers (Google and GitHub)
- Resource sharing and community engagement

### Key Features
- **Multi-Provider Authentication**: Seamless login using Google and GitHub accounts
- **Lesson Tracking**: Comprehensive system for tracking lesson completion and progression
- **Homework Management**: Detailed homework tracking with progress monitoring
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly user experience
- **Secure Session Management**: Robust session handling with MongoDB storage
- **Flexible Architecture**: Model-View-Controller (MVC) design for maintainability

### Technical Highlights
- Node.js and Express.js backend
- MongoDB database integration
- Passport.js for authentication
- Pug templating engine
- Tailwind CSS for styling
- Comprehensive end-to-end testing with Cypress

This application provides an intuitive, secure platform for learners to manage their educational journey, track progress, and engage with learning resources efficiently.

## Getting Started, Installation, and Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or later recommended)
- npm or Yarn
- MongoDB (local installation or cloud-based MongoDB URI)

### Quick Start

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

3. Configure environment variables:
- Copy `.env.example` to `.env`
- Fill in the required configuration values:
  - `PORT`: Default is 3000
  - `DB_URI`: MongoDB connection string
  - `SECRET`: Session secret (any random string)
  - Optional: Configure SMTP, Google, and GitHub OAuth credentials if needed

4. Development Server
To run the application in development mode:
```bash
# Start the development server with hot-reloading
npm run dev
# or
yarn dev

# Compile Tailwind CSS (in a separate terminal)
npm run css
# or 
yarn css
```

5. Production Build
To run the application in production mode:
```bash
# Start the production server
npm start
# or
yarn start
```

### Additional Scripts

- End-to-end testing:
```bash
# Run Cypress tests
npm run e2e
# or
yarn e2e

# Open Cypress interactive test runner
npm run e2e:watch
# or
yarn e2e:watch
```

### Accessing the Application
- By default, the application runs on `http://localhost:3000`
- Ensure MongoDB is running and the connection URI is correctly configured

### Notes
- For local development, a local MongoDB instance is recommended
- For production, consider using a cloud MongoDB service like Atlas
- Authentication methods include local login, Google OAuth, and GitHub OAuth

## Deployment

### Prerequisites

- Node.js (version specified in `package.json`)
- MongoDB
- Yarn or npm package manager

### Deployment Platforms

#### Fly.io Deployment

The project is configured for deployment on Fly.io:

```bash
# Install Fly CLI
# Follow Fly.io installation instructions for your operating system

# Login to Fly
fly auth login

# Deploy the application
fly deploy
```

#### Local Deployment

For local production deployment:

1. Install dependencies:
```bash
yarn install
```

2. Build Tailwind CSS:
```bash
yarn css
```

3. Start the application:
```bash
yarn start
```

### Environment Configuration

1. Create a `.env` file based on `.env.example`
2. Configure the following essential environment variables:
   - `MONGODB_URI`: Connection string for MongoDB
   - `SESSION_SECRET`: Secret key for session management
   - `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`: GitHub OAuth credentials
   - `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Google OAuth credentials

### Production Considerations

- Ensure all environment variables are securely configured
- Use a production-ready MongoDB instance
- Set up proper authentication and security measures
- Configure HTTPS and SSL certificates
- Implement proper logging and monitoring

### Recommended Hosting Platforms

- Fly.io (current configuration)
- Heroku
- Render
- DigitalOcean App Platform

## Feature Highlights

The application provides a comprehensive learning platform with robust features designed to enhance user experience and learning management:

### Authentication and User Management
- Secure user registration with email validation
- Email-based login with comprehensive validation
- Password reset and change functionality
- Account verification through email tokens
- Option to delete account and manage account settings

### Dashboard and Tracking
- Personalized user dashboard
- Progress tracking for lessons and homework
- Ability to mark lessons as watched or checked in
- Homework item completion tracking
- Detailed view of learning progress

### Learning Resources
- Comprehensive resources section
- Multiple resource pages accessible by category
- Community projects and downloadable resources
- Stream team and additional learning materials

### Homework Management
- Add, edit, and manage homework assignments
- Track individual homework items
- Toggle homework item and extra task completion status
- Import homework data

### Lesson Management
- Browse and view all lessons
- Add, edit, and delete lessons
- Access lessons by permalink
- Track lesson watching and check-in status

The platform supports both local authentication and potential OAuth integrations, providing a flexible and secure learning environment.

## Configuration

The project provides multiple configuration options through environment variables and configuration files:

### Environment Configuration

The application uses a `.env` file for environment-specific configurations. Key configuration options include:

- `PORT`: Specifies the server port (default: 3000)
- `NODE_ENV`: Sets the application environment (development/production)
- `DOMAIN`: Base URL for the application
- `SECRET`: Session secret key
- `DB_URI`: MongoDB connection string

#### Authentication Configurations
- Google OAuth:
  - `GOOGLE_ID`: Google OAuth client ID
  - `GOOGLE_SECRET`: Google OAuth client secret

- GitHub OAuth:
  - `GITHUB_ID`: GitHub OAuth client ID
  - `GITHUB_SECRET`: GitHub OAuth client secret

#### Email Configuration
When `NODE_ENV` is set to `production`, the following SMTP settings are used:
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender name

### Build and Development Configuration

#### NPM Scripts
- `start`: Run the production server
- `dev`: Run the development server with nodemon
- `css`: Compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- Various Cypress-related scripts for testing and verification

### Tailwind CSS Configuration

Tailwind is configured with custom:
- Responsive screen breakpoints
- Extended font families
- Custom color palette (twilight theme)
- Custom text decoration and max-width utilities

### Cypress Configuration

End-to-end testing is configured with:
- Base URL set to `http://0.0.0.0:3000`
- Chrome web security disabled
- Video recording disabled by default

### Note
A `.env.example` file is provided as a template for setting up environment variables. Ensure to create a `.env` file with your specific configuration before running the application.

## Project Structure

The project follows a standard MVC (Model-View-Controller) architecture with the following key directories:

### Project Directories

#### `src/`
The main source code directory containing the core application structure:
- `assets/`: Static resources for the application
  - `css/`: Stylesheets
  - `fonts/`: Custom font files
  - `img/`: Image assets (thumbnails, resources, icons)
  - `js/`: Client-side JavaScript files
  - `site.webmanifest`: Web app manifest file

- `config/`: Configuration files for database, authentication, and data import
- `controllers/`: Request handling logic for different application features
- `middleware/`: Custom Express middleware for authentication and request processing
- `models/`: Database models defining data structures
- `routes/`: Express route definitions for different application endpoints
- `views/`: Pug template files for rendering pages
  - `layouts/`: Base layout templates
  - `mixins/`: Reusable Pug template components
  - `partials/`: Shared template fragments
  - `resources/`: Views for specific resource pages

#### `data/`
Contains JSON data files for homeworks, lessons, and related content

#### `cypress/`
End-to-end testing directory
- `e2e/`: Test specifications
- `fixtures/`: Test data
- `support/`: Custom commands and test configuration

### Root Directory Files
- `.env.example`: Template for environment configuration
- `package.json`: Project dependencies and scripts
- `fly.toml`: Deployment configuration for Fly.io
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

### Key Application Components
- Authentication managed through `src/config/githubAuth.js` and `src/config/googleAuth.js`
- Server entry point: `src/server.js`
- Database models cover users, lessons, homework, and progress tracking
- Client-side interactivity implemented through JavaScript files in `src/assets/js/`

## Technologies Used

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Document Mapper) for MongoDB
- **Passport.js**: Authentication middleware
  - Supports local, GitHub, and Google OAuth strategies

### Frontend
- **Pug**: Template engine for HTML rendering
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library

### Authentication
- **OAuth 2.0**: GitHub and Google authentication
- **Passport Strategies**:
  - Passport Local
  - Passport GitHub
  - Passport Google OAuth 2.0

### Testing
- **Cypress**: End-to-end testing framework
- **Jest**: JavaScript testing framework
- **Vitest**: Vite-native unit testing framework

### Development Tools
- **Nodemon**: Automatic server restart during development
- **dotenv**: Environment variable management
- **Morgan**: HTTP request logging middleware

### Additional Libraries
- **@octokit/core**: GitHub API client
- **Validator.js**: String validation and sanitization
- **Nodemailer**: Email sending functionality
- **cors**: Cross-origin resource sharing middleware

### Deployment and Infrastructure
- **Fly.io**: Cloud deployment platform (noted from fly.toml)

## Additional Notes

### Project Maturity and Collaboration
The project is actively evolving, with ongoing improvements in documentation and collaboration processes. While functional, the codebase is still maturing and may require additional refinement.

### Known Limitations
- The current template engine (Pug) may present a barrier to contributor entry due to its less common syntax
- Some architectural decisions were made based on initial personal development needs and may benefit from community-driven improvements

### Development Philosophy
The project embodies an iterative approach to software development, embracing the principle that initial implementations can and should be refined. Key takeaways include:
- Recognizing when a solution feels overly complex
- Being willing to refactor and simplify code
- Prioritizing readability and maintainability

### Future Considerations
- Explore alternative template engines that might be more contributor-friendly
- Continue improving project documentation and contribution guidelines
- Optimize existing code based on performance and readability feedback

### Support and Community
For support, feature requests, or to report issues, please use the GitHub issues section. The project welcomes contributions from developers of all skill levels who are interested in improving the 100Devs class and homework tracking experience.

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

#### 1. Find an Issue
- Browse the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab
- Look for open issues or create a new issue for proposed changes
- Add a comment indicating your interest in working on the issue

#### 2. Contribution Process
- Wait to be assigned to the issue to avoid duplicate work
- Fork the repository
- Create a new branch named with the issue number and a brief description (e.g., `issue-1-lesson-card-styling`)
- Make your changes
- Create a pull request linking to the original issue

#### Development Setup
- Use `yarn` for package management
- Run development server: `yarn dev`
- Compile CSS: `yarn css`
- Run end-to-end tests: `yarn e2e`

#### Code Guidelines
- Follow existing code structure and patterns
- Ensure new code is compatible with the project's MVC architecture
- Write clear, concise comments
- Keep pull requests focused on a single issue

#### Testing
- Add tests for new features or bug fixes
- Use Cypress for end-to-end testing
- Run tests before submitting a pull request

#### Pull Request Process
- Provide a clear description of changes
- Link the pull request to the relevant issue
- Be prepared to make requested modifications during review

Thank you for contributing to the Community Taught project!

## License

This project is licensed under the MIT License. 

### License Details

The MIT License is a permissive open-source software license that allows you to:
- Use the software commercially
- Modify the software
- Distribute the software
- Privately use the software

Key conditions include:
- Providing the original license and copyright notice in any substantial portion of the software
- The software is provided "as is" without warranty

#### Full License

For the complete license text, see the [LICENSE](LICENSE) file in the repository.

### Copyright

Copyright (c) 2022 Laura Abro