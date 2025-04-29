# CommunityTaught.org: A Comprehensive Learning Management System for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage 100Devs class progress and homework assignments. Built as a full-featured learning management system, the platform provides students with a centralized tool to monitor their educational journey.

### Core Purpose
The application serves as a specialized tracking system for 100Devs students, offering:
- Detailed lesson tracking and progress monitoring
- Homework assignment management
- User authentication and personalized dashboards
- Resource compilation for learning support

### Key Features
- Authenticated user accounts with multiple login methods (GitHub, Google, local)
- Lesson progress tracking
- Homework assignment tracking and completion status
- Interactive dashboard for students
- Resource library for additional learning materials
- Responsive design using Tailwind CSS

### Benefits
- Centralized platform for tracking learning progress
- Simplified homework management
- Easy access to class-related resources
- Supports student engagement and accountability
- Provides a clear overview of educational milestones

## Getting Started, Installation, and Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or later recommended)
- Yarn package manager
- MongoDB (local installation or cloud-based MongoDB service)

### Installation Steps

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
- Fill in the required configuration:
  - `PORT`: Default is 3000
  - `SECRET`: A random string for session management
  - `DB_URI`: MongoDB connection string
  - Optional: Configure SMTP, Google, and GitHub OAuth settings as needed

### Development Run

To run the application in development mode:

```bash
# Start the development server with hot reloading
yarn dev

# Compile Tailwind CSS (in a separate terminal)
yarn css
```

The application will be available at `http://localhost:3000`

### Production Build

To run the application in production:

1. Set `NODE_ENV` to `production` in the `.env` file
2. Start the server:
```bash
yarn start
```

### Testing

#### End-to-End Testing
```bash
# Run Cypress tests in Chrome
yarn e2e

# Open Cypress interactive test runner
yarn e2e:watch
```

### Additional Configuration Notes

- Authentication supports local login, Google OAuth, and GitHub OAuth
- Configure OAuth credentials in the `.env` file
- SMTP settings are optional but recommended for email functionality

## Deployment

The application is designed to be deployed on various platforms with minimal configuration.

### Deployment Platforms

#### Fly.io Deployment
The project includes a `fly.toml` configuration for easy deployment on Fly.io:
- Automatically sets up HTTPS
- Configures internal port to 8080
- Supports automatic rollbacks

##### Prerequisites
- Install [Fly CLI](https://fly.io/docs/hands-on/install-flyctl/)
- Create a Fly.io account

##### Deployment Steps
1. Authenticate with Fly.io:
   ```bash
   flyctl auth login
   ```

2. Launch the application:
   ```bash
   flyctl launch
   ```

3. Deploy the application:
   ```bash
   flyctl deploy
   ```

### Environment Configuration
- Set required environment variables in a `.env` file
- Essential variables include database connection strings, authentication keys, and other sensitive configuration

### Production Considerations
- Use a production-ready MongoDB instance
- Configure environment-specific settings
- Ensure all sensitive information is properly secured

### Server Requirements
- Node.js (version specified in `package.json`)
- MongoDB database
- Recommended hosting platforms: Fly.io, Heroku, DigitalOcean

### Build and Start Commands
- Build CSS: `npm run css`
- Start in production: `npm start`
- Development mode: `npm run dev`

## Feature Highlights

### Authentication and User Management
- **Secure User Registration**: Email-based registration with validation
- **Multi-step Login Process**: Supports local authentication with email and password
- **Email Verification**: Users must verify their email address after registration
- **Password Management**:
  - Reset forgotten passwords
  - Change existing passwords
  - Set new passwords for accounts
- **Account Security**:
  - Account deletion functionality
  - Email change with re-verification

### Lesson Management
- **Comprehensive Lesson Tracking**:
  - View all available lessons 
  - Mark lessons as watched
  - Check in to lessons
  - Add, edit, and delete lessons (likely for administrators)
- **Lesson Navigation**:
  - Browse lessons by permalink
  - Access individual lesson details

### Homework Management
- **Homework Tracking**:
  - View all homework assignments
  - Toggle homework item completion status
  - Mark extra homework activities
  - Submit homework assignments
- **Homework Administration**:
  - Add and edit homework assignments
  - Import homework data
  - Manage homework progress

### Dashboard and Navigation
- **User Dashboard**: Centralized view of user progress and activities
- **Resources Section**: 
  - Multiple resource pages
  - Categorized learning materials
- **Responsive Navigation**:
  - Accessible pages for about, account, resources
  - Intuitive routing between different sections of the application

### Flash Messaging System
- Provides real-time feedback for:
  - Authentication events
  - Form submissions
  - Error handling
  - Success notifications

## Configuration

The project offers flexible configuration options to customize its behavior and deployment:

### Environment Variables

Configuration is managed through environment variables defined in a `.env` file. Key configuration options include:

- `PORT`: Specifies the server port (default: 3000)
- `NODE_ENV`: Sets the application environment (development/production)
- `DOMAIN`: Base URL for the application
- `SECRET`: Session secret key for security
- `DB_URI`: MongoDB connection string

#### Authentication Configuration
- `GOOGLE_ID` and `GOOGLE_SECRET`: Google OAuth credentials
- `GITHUB_ID` and `GITHUB_SECRET`: GitHub OAuth credentials

#### Email Configuration (Optional)
When `NODE_ENV` is set to production, configure SMTP settings:
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender display name

### Tailwind CSS Configuration

Customized Tailwind configuration in `tailwind.config.cjs` includes:
- Custom screen breakpoints (xs, sm, md, lg, xl, 2xl)
- Extended color palette with `twilight` color theme
- Custom font families
- Additional plugins: `@tailwindcss/forms`

### Cypress Testing Configuration

Cypress end-to-end testing configuration in `cypress.config.js` provides:
- Base URL set to `http://0.0.0.0:3000`
- Video recording disabled
- Chrome web security disabled

### Deployment Configuration

Fly.io deployment configuration (`fly.toml`) specifies:
- Internal port: 8080
- HTTPS enforcement
- Concurrency limits
- Auto-rollback on deployment

### Available Scripts

Configuration and development scripts in `package.json`:
- `start`: Run production server
- `dev`: Run development server with nodemon
- `css`: Watch and compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- Various Cypress-related utility commands

## Project Structure

The project follows a structured directory layout to organize different aspects of the application:

### Root Directory
- `.env.example`: Template for environment configuration
- `cypress.config.js`: Cypress testing configuration
- `fly.toml`: Deployment configuration for Fly.io
- `package.json`: Node.js project dependencies and scripts
- `tailwind.config.cjs`: Tailwind CSS configuration

### Source Code Structure
- `src/`: Main application source code
  - `assets/`: Static assets
    - `css/`: Stylesheets (Font Awesome and custom CSS)
    - `fonts/`: Web fonts
    - `img/`: Images and graphics
    - `js/`: Client-side JavaScript files
    - `site.webmanifest`: Web app manifest
    - `tailwind.css`: Tailwind CSS styles
  
  - `config/`: Application configuration files
    - Database, GitHub authentication, Google authentication, and data import configurations
  
  - `controllers/`: Request handling logic
    - Authentication, email, homework, lessons, and page-related controllers
  
  - `middleware/`: Express middleware
    - Authentication and flash message middleware
  
  - `models/`: Data models
    - User, homework, lesson, progress tracking, and token models
  
  - `routes/`: Application route definitions
    - Routers for email, homework, lessons, main routes, and OAuth
  
  - `server.js`: Main application entry point
  
  - `views/`: Pug template files
    - Page templates, layouts, mixins, and partials

### Testing
- `cypress/`: End-to-end testing
  - `e2e/`: Test specification files
  - `fixtures/`: Test data
  - `support/`: Custom commands and test configuration

### Data
- `data/`: Static JSON data files for homeworks and lessons

### Deployment and Development
- `.gitignore`: Git ignore configuration
- `CONTRIBUTING.md`: Guidelines for project contributions
- `LICENSE`: Project licensing information
- `README.md`: Project documentation
- `yarn.lock`: Yarn dependency lock file

## Technologies Used

#### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **Mongoose**: MongoDB object modeling tool
- **Passport.js**: Authentication middleware
  - Supports GitHub, Google, and local authentication strategies

#### Frontend
- **Pug**: Template engine for HTML rendering
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library

#### Authentication
- GitHub OAuth
- Google OAuth
- Local authentication

#### Database
- **MongoDB**: NoSQL database
- **connect-mongodb-session**: MongoDB session store

#### Development Tools
- **Nodemon**: Automatic server restart during development
- **Cypress**: End-to-end testing framework
- **Jest**: JavaScript testing framework
- **Vitest**: Vite-native unit testing framework

#### Additional Libraries
- **dotenv**: Environment variable management
- **cors**: Cross-origin resource sharing
- **validator.js**: Input validation
- **morgan**: HTTP request logging
- **nodemailer**: Email sending functionality

#### Deployment
- **fly.toml**: Configuration for Fly.io deployment platform

## Additional Notes

### Future Development Considerations

The project is currently in an active development stage with several areas identified for potential improvement:

- Collaboration Readiness: The current implementation was initially built without extensive collaboration in mind. The project would benefit from:
  - Improved documentation
  - Streamlined contribution processes
  - Potentially reconsidering the templating engine (Pug) to make contribution more accessible

### Performance and Scalability

The application uses an MVC architecture with Node.js, Express, and MongoDB, providing a solid foundation for future scaling. Key considerations include:
- Efficient data management through Mongoose models
- Support for multiple authentication strategies (GitHub, Google, local)
- Flexible session management

### Monitoring and Maintenance

While the project currently lacks extensive test coverage, there are initial provisions for:
- End-to-end testing with Cypress
- Multiple browser testing configurations
- Potential for expanding testing infrastructure

### Deployment Notes

The project is designed to be deployable with minimal configuration:
- Supports environment-based configuration via `.env`
- Compatible with various hosting platforms
- Includes scripts for development and production environments

### Known Limitations

- Email functionality requires additional setup (e.g., MailHog for local development)
- Database initialization requires manual data import from the `/data` folder
- Authentication relies on external providers and local strategies

### Security Considerations

- Utilizes Passport.js for secure authentication
- Supports multiple authentication methods
- Environment-based credential management

## Contributing

We welcome contributions from the community! By contributing, you help improve the project and support its ongoing development.

### Getting Started

#### 1. Find an Issue
- Browse the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab
- Look for an issue that interests you
- Add a comment requesting to work on the issue

#### 2. Contribution Process
1. Wait to be assigned to the issue to prevent duplicate work
2. Fork the repository
3. Create a branch named with the issue number and a brief description (e.g., `issue-1-lesson-card-styling`)
4. Make your changes
5. Create a pull request, explaining:
   - What changes were made
   - Why the changes were necessary
   - Link the pull request to the original issue

### Guidelines
- Create a new issue for unrelated changes not tied to an existing issue
- Branch off the main branch for each issue
- Ensure your code follows the existing project structure and style
- Be prepared to make requested changes during the review process

### Development Setup
- Use `yarn dev` for development mode
- Use `yarn e2e` to run end-to-end tests
- Use `yarn e2e:watch` to open Cypress for interactive testing

### Testing
- The project uses Cypress for end-to-end testing
- Add or update tests for any new functionality
- Ensure all tests pass before submitting a pull request

### Code of Conduct
Be respectful, inclusive, and constructive in all interactions. We aim to maintain a welcoming environment for all contributors.

## License

This project is licensed under the MIT License. 

For the full license text, see the [LICENSE](LICENSE) file in the repository.

#### Key Permissions
- Commercial use
- Modification
- Distribution
- Private use

#### Key Limitations
- No warranty
- Limited liability

Copyright (c) 2022 Laura Abro