# CommunityTaught.org: A Comprehensive Learning Progress Tracking Platform for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage 100Devs class and homework progress. It provides an integrated platform for students to monitor their learning journey, track completed lessons and homework assignments, and access valuable resources.

### Key Features
- User authentication with multiple login methods (GitHub, Google, local email)
- Lesson tracking and progress monitoring
- Homework assignment tracking and completion status
- Resource library for additional learning materials
- Community-focused learning platform

### Core Purpose
The application addresses the challenge of tracking and organizing learning progress for students in the 100Devs coding bootcamp. It offers a centralized system that helps learners:
- Monitor their completed lessons and homework
- Keep track of individual learning milestones
- Access learning resources and community information
- Manage their educational journey in a structured manner

### Technical Architecture
Built as a robust web application using a modern JavaScript stack, the project leverages:
- Server-side rendering with MVC architecture
- User authentication with Passport.js
- Database management with MongoDB
- Responsive design using Tailwind CSS
- Server-side templating with Pug

The platform aims to simplify learning tracking and provide a supportive environment for coding students, making educational progress more transparent and manageable.

## Getting Started, Installation, and Setup

### Prerequisites

- Node.js (version 18 or later recommended)
- npm or Yarn
- MongoDB (local installation or cloud-based instance)

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
   - Fill in the required configuration:
     - `PORT`: Web server port (default: 3000)
     - `DB_URI`: MongoDB connection string
     - `SECRET`: Session secret key
     - Optional: Email, OAuth, and other settings as needed

### Running the Application

#### Development Mode
To run the application in development mode with hot reloading:
```bash
yarn dev
# or
npm run dev
```

#### Production Mode
To run the application in production:
```bash
yarn start
# or
npm start
```

### Additional Setup

#### Tailwind CSS
To compile Tailwind CSS (watch mode):
```bash
yarn css
# or
npm run css
```

#### Testing

##### End-to-End Tests
Run Cypress E2E tests:
```bash
# Run tests in Chrome
yarn e2e

# Open Cypress interactive mode
yarn e2e:watch
```

### Database Configuration
Ensure you have a MongoDB database set up. You can use:
- Local MongoDB installation
- MongoDB Atlas cloud service
- Other MongoDB-compatible database providers

Provide the full connection URI in the `DB_URI` environment variable.

### Authentication Setup
The application supports multiple authentication methods:
- Local username/password
- Google OAuth
- GitHub OAuth

Configure the respective environment variables in `.env` for the authentication methods you wish to use.

## Deployment

### Deployment Platforms

The application is configured for deployment on Fly.io, offering a streamlined hosting solution for Node.js applications.

#### Fly.io Deployment

The project includes a `fly.toml` configuration file, which specifies the deployment settings for Fly.io:

- Internal Port: `8080`
- HTTPS Enforcement: Enabled
- Automatic HTTPS Redirect: Configured
- Connection Limits: 
  - Soft Limit: 20 connections
  - Hard Limit: 25 connections

##### Deployment Prerequisites

- Fly.io CLI installed
- Fly.io account
- Project dependencies installed via Yarn

##### Deployment Steps

1. Install Fly.io CLI
2. Login to Fly.io:
   ```bash
   flyctl auth login
   ```

3. Deploy the application:
   ```bash
   flyctl deploy
   ```

### Environment Configuration

Ensure all required environment variables are set before deployment. Refer to the `.env.example` file for required configuration parameters.

### Build and Start Commands

The application supports the following npm scripts:

- Production Start: `npm start`
  - Runs the application in production mode
- Development Mode: `npm run dev`
  - Runs the application with nodemon for automatic reloading
- CSS Compilation: `npm run css`
  - Compiles Tailwind CSS for production

### Runtime Requirements

- Node.js (LTS version recommended)
- MongoDB database connection
- Configured environment variables for authentication and services

### Deployment Considerations

- Ensure all dependencies are installed via `yarn install`
- Set up required environment variables for production
- Configure database connection in production settings
- Verify authentication providers are correctly configured

## Feature Highlights

The application provides a comprehensive learning platform with several key features:

### Authentication and User Management
- Multiple authentication methods supported:
  - Local registration and login
  - GitHub OAuth authentication
  - Google OAuth authentication
- Secure user account management with password reset functionality
- User dashboard for tracking progress and accessing course content

### Learning Management
- Lesson Tracking
  - View and track individual lessons
  - Mark lessons as completed
  - Progress tracking for lesson completion

### Homework Management
- Comprehensive homework tracking system
  - Add and manage homework assignments
  - Track homework progress
  - Monitor completion status of individual homework items
  - Extra homework resources and tracking

### Resource Hub
- Curated resources section including:
  - Community projects
  - Downloadable resources
  - Frequently Asked Questions (FAQ)
  - Stream team information
  - Coding challenges

### User Experience
- Responsive mobile-friendly design
- Dark/light mode compatibility
- Accessible navigation with mobile menu support
- Flash messaging for user feedback
- Back-to-top functionality for easy navigation

### Additional Capabilities
- Email communication functionality
- Error handling with custom 404 page
- Performance monitoring and logging

## Configuration

The project uses various configuration methods to customize its behavior and deployment:

### Environment Configuration

The application is configured using environment variables, which can be set in a `.env` file. Key configuration options include:

- `PORT`: Defines the port the server will run on (default: 3000)
- `NODE_ENV`: Sets the application environment (development/production)
- `DOMAIN`: Base URL of the application
- `SECRET`: Session secret key for security
- `DB_URI`: MongoDB connection string

### Authentication Configuration

The application supports multiple authentication methods:

- **Local Authentication**:
  - SMTP settings can be configured for email-based login
  - Configure `SMTP_SERVER`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

- **OAuth Providers**:
  - Google Login: Set `GOOGLE_ID` and `GOOGLE_SECRET`
  - GitHub Login: Set `GITHUB_ID` and `GITHUB_SECRET`

### Frontend Configuration

#### Tailwind CSS

The project uses Tailwind CSS with a custom configuration:
- Responsive breakpoints defined: xs, sm, md, lg, xl, 2xl
- Custom font families: logo, main, awesome
- Custom color palette (twilight)
- Plugins: @tailwindcss/forms

#### Cypress Testing

Cypress is configured with:
- Base URL: http://0.0.0.0:3000
- Chrome web security disabled
- Video recording turned off

### Deployment Configuration

The `fly.toml` file provides deployment settings for Fly.io:
- Internal port: 8080
- HTTPS forced
- Concurrency limits: 
  - Soft limit: 20 connections
  - Hard limit: 25 connections

### Security Notes

- Always use strong, unique values for `SECRET`
- Keep environment variables confidential
- Use different configurations for development and production environments

## Project Structure

The project follows a structured organization to maintain clarity and separation of concerns:

### Root Directory
- `.env.example`: Template for environment configuration
- `package.json`: Project dependencies and scripts
- `fly.toml`: Deployment configuration for Fly.io
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

### Source Code Structure
- `src/`: Primary application source code
  - `assets/`: Static resources
    - `css/`: Stylesheets
    - `fonts/`: Font files
    - `img/`: Image assets
    - `js/`: Client-side JavaScript files
    - `site.webmanifest`: Web app manifest
    - `tailwind.css`: Tailwind CSS styles
  
  - `config/`: Application configuration files
    - Database, authentication, and data import configurations
  
  - `controllers/`: Request handling logic
    - Manages authentication, email, homework, lessons, and page rendering
  
  - `middleware/`: Express middleware
    - Authentication and flash message handling
  
  - `models/`: Data models
    - Defines schema and interactions for Users, Homework, Lessons, and Progress tracking
  
  - `routes/`: Express route definitions
    - Handles routing for various application features
  
  - `server.js`: Main application entry point
  
  - `views/`: View templates
    - `layouts/`: Base layout templates
    - `mixins/`: Reusable template components
    - `partials/`: Shared template sections
    - Individual page templates for different views

### Testing
- `cypress/`: End-to-end testing
  - `e2e/`: Test specifications
  - `fixtures/`: Test data
  - `support/`: Test utilities and custom commands

### Data
- `data/`: Static JSON data files
  - Contains predefined data for homeworks and lessons

### Deployment and Development
- `.gitignore`: Version control exclusion rules
- `yarn.lock`: Yarn dependency lockfile

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **Mongoose**: MongoDB object modeling tool
- **Passport.js**: Authentication middleware
  - Supports GitHub, Google, and local authentication strategies

### Frontend
- **Pug**: Template engine for rendering views
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library

### Authentication
- **Passport.js**
  - GitHub OAuth
  - Google OAuth
  - Local authentication

### Database
- **MongoDB**: NoSQL database
- **connect-mongodb-session**: MongoDB session store

### Testing
- **Cypress**: End-to-end testing framework
- **Jest**: JavaScript testing framework
- **Vitest**: Vite-native unit testing framework

### Development Tools
- **Nodemon**: Automatic server restart during development
- **Dotenv**: Environment variable management
- **Morgan**: HTTP request logging middleware

### Third-Party Integrations
- **Octokit**: GitHub API client
- **Nodemailer**: Email sending library
- **Validator.js**: String validation and sanitization

### Deployment
- **Fly.io**: Cloud platform for deployment (based on fly.toml configuration)

## Additional Notes

### Performance and Scalability Considerations

The application is built as a learning project and may require architectural improvements for large-scale deployment. Key considerations include:
- Current template engine (Pug) may limit contributor accessibility
- Potential performance optimizations needed for handling large datasets
- Requires careful database indexing and query optimization

### Third-Party Integrations

The project supports multiple authentication strategies:
- GitHub OAuth
- Google OAuth
- Local authentication

### Development Environment Notes

#### Testing
- End-to-end testing is implemented using Cypress
- Multiple browser testing options available (Chrome, Firefox, Edge)
- Currently lacks comprehensive unit test coverage

#### Monitoring and Logging
- Uses Morgan for HTTP request logging
- Basic error handling implemented

### Future Roadmap Suggestions

- Improve documentation for easier contributor onboarding
- Enhance test coverage
- Explore alternative template engines for better maintainability
- Implement more robust error handling and logging mechanisms

### Security Considerations

- Utilizes Passport.js for authentication
- Environment-based configuration with `.env` file
- Supports secure session management
- OAuth integration provides additional authentication layers

### Data Management

- Leverages MongoDB for flexible, document-based data storage
- Supports importing class and homework data from JSON files
- Includes models for tracking user progress across lessons and homework

### Known Limitations

- Project is primarily a personal learning platform
- May require significant refactoring for enterprise-level deployment
- Current architecture prioritizes functionality over scalability

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Getting Started

1. **Find an Issue**
   - Browse the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab
   - Look for an issue that interests you
   - If no existing issue matches your proposed change, create a new issue explaining your suggestion

2. **Contribution Process**
   - Wait to be assigned to an issue to prevent duplicate work
   - Fork the repository
   - Create a new branch named `issue-{number}-brief-description`
   - Make your changes, focusing only on the specific issue
   - Create a pull request linking to the original issue

### Development Setup

- **Prerequisites**: Node.js, npm or yarn
- **Install Dependencies**: `yarn install`
- **Development Scripts**:
  - `yarn dev`: Run development server
  - `yarn css`: Watch and compile Tailwind CSS
  - `yarn e2e`: Run end-to-end tests
  - `yarn test`: Run unit tests (currently placeholder)

### Code Guidelines

- Follow existing code structure and patterns
- Write clear, concise commit messages
- Add tests for new functionality when applicable
- Ensure all tests pass before submitting a pull request

### Testing

- End-to-end testing is done with Cypress
- Run tests using `yarn e2e`
- Browser-specific test runs are available (`yarn e2e:record:chrome`, `:edge`, `:firefox`)

### Pull Request Process

1. Ensure your code follows project standards
2. Update documentation if your changes affect existing functionality
3. Your pull request will be reviewed and merged after approval

### Code of Conduct

Contributions are expected to be respectful, inclusive, and constructive. Be kind to other contributors and maintain a positive, collaborative environment.

## License

This project is licensed under the MIT License. 

### License Details

- **Type**: MIT License
- **Copyright**: © 2022 Laura Abro

The MIT License is a permissive free software license that allows users to:
- Use the software for any purpose
- Modify the software
- Distribute the software
- Sublicense the software
- Use the software commercially

#### Key Conditions
- Include the original copyright notice and license in any substantial portion of the software
- Provide the software "as is" with no warranty

For the full license text, see the [LICENSE](LICENSE) file in the repository.