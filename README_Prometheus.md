# CommunityTaught.org: A Comprehensive Learning Progress Tracking Platform for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage learning progress for 100Devs classes and homework. It provides an integrated platform for students to monitor their educational journey, track homework completion, and access learning resources.

### Key Features
- User authentication with multiple login methods (GitHub, Google, local email)
- Lesson tracking and progress monitoring
- Homework assignment tracking and completion status
- Resource hub for learning materials and community projects
- Responsive design using Tailwind CSS

### Purpose
The application solves several key challenges for learning communities:
- Centralized tracking of educational progress
- Easy access to class and homework information
- Simplified resource management for students
- Community-oriented learning support

### Benefits
- Streamlines learning management for 100Devs students
- Provides a single platform for tracking educational milestones
- Supports multiple authentication methods for convenient access
- Open-source and community-driven development

## Getting Started, Installation, and Setup

### Prerequisites

Before getting started, ensure you have the following installed:
- Node.js (version 18 or later recommended)
- Yarn package manager
- MongoDB (local installation or cloud-hosted instance)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/labrocadabro/node-mongo-boilerplate.git
cd node-mongo-boilerplate
```

2. Install dependencies:
```bash
yarn install
```

### Configuration

1. Create a `.env` file in the project root by copying the `.env.example`:
```bash
cp .env.example .env
```

2. Configure the following environment variables in the `.env` file:
- `PORT`: Application port (default: 3000)
- `NODE_ENV`: Set to `development` or `production`
- `DOMAIN`: Your application's base URL
- `SECRET`: A random string for session management
- `DB_URI`: MongoDB connection string
- Optional OAuth configurations for Google and GitHub login
- Optional SMTP settings for email functionality

### Running the Application

#### Development Mode
To run the application in development mode with hot-reloading:
```bash
yarn dev
```

#### Production Mode
1. Build Tailwind CSS:
```bash
yarn css
```

2. Start the application:
```bash
yarn start
```

### Additional Scripts

- `yarn test`: Run tests (currently not configured)
- `yarn e2e`: Run end-to-end Cypress tests
- `yarn e2e:watch`: Open Cypress in interactive mode
- `yarn css`: Watch and compile Tailwind CSS

### Testing

End-to-end tests are implemented using Cypress. Run tests with:
```bash
yarn e2e
```

### Development Tools

- Nodemon for development server with auto-reload
- Tailwind CSS for styling
- Cypress for end-to-end testing
- Passport.js for authentication

### Troubleshooting

- Ensure all environment variables are correctly set
- Verify MongoDB connection string
- Check that you have the correct Node.js version installed

## Deployment

### Prerequisites
- Node.js (v16 or later recommended)
- Yarn package manager
- MongoDB database
- (Optional) Fly.io account for deployment

### Environment Configuration
1. Copy `.env.example` to `.env`
2. Fill in the required environment variables:
   - `PORT`: Application listening port
   - `NODE_ENV`: Set to `production` for production deployment
   - `DOMAIN`: Your application's domain
   - `SECRET`: Session secret key
   - `DB_URI`: MongoDB connection string
   - Optionally configure SMTP, Google, and GitHub OAuth settings

### Local Deployment
```bash
# Install dependencies
yarn install

# Build Tailwind CSS
yarn css

# Start the application
yarn start
```

### Production Deployment Options

#### Fly.io Deployment
1. Install [Fly CLI](https://fly.io/docs/hands-on/install-flyctl/)
2. Login to Fly
```bash
flyctl auth login
```
3. Deploy the application
```bash
flyctl launch
flyctl deploy
```

#### Docker Deployment
While no explicit Dockerfile exists, you can create one:
```dockerfile
FROM node:16
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
```

### Additional Deployment Notes
- Ensure all environment variables are correctly set
- MongoDB must be accessible from your deployment environment
- For OAuth login, configure Google and GitHub application credentials
- Use a production-grade MongoDB instance (e.g., MongoDB Atlas)

### Scaling and Performance
- The application supports up to 25 concurrent connections
- Recommended to use a process manager like PM2 for production

## Feature Highlights

The application provides a comprehensive learning platform with the following key features:

### Authentication and User Management
- Secure user registration with email validation
- Email-based login with password protection
- Password reset functionality
- Email verification process
- Account management (change password, change email, delete account)
- OAuth support for alternative login methods (GitHub and Google)

### Homework Tracking
- Create and manage homework assignments
- Track homework progress
- Mark individual homework items as complete
- Submit homework assignments
- View homework details and due dates
- Support for both required and optional homework items
- Import homework progress from external sources

### Learning Dashboard
- Personalized dashboard for users
- Track lesson progress
- View completed and pending lessons
- Check-in and mark lessons as watched
- Progress tracking across multiple classes

### Resources and Additional Features
- Access to downloadable resources
- Community project showcase
- FAQ and additional learning materials
- Responsive design for various devices

### Administrative Capabilities
- Admin users can add, edit, and manage homework assignments
- Import and manage learning progress data
- User progress tracking and management

## Project Structure

The project follows a structured MVC (Model-View-Controller) architecture with clear separation of concerns. The main directories are organized to support different aspects of the application:

### Root Directory
- `.env.example`: Template for environment configuration
- `package.json`: Project dependencies and scripts
- `fly.toml`: Configuration for Fly.io deployment
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration

### Source Code Structure (`/src`)
- `assets/`: Static resources for the application
  - `css/`: Stylesheet files
  - `fonts/`: Web font files
  - `img/`: Images and graphics
  - `js/`: Client-side JavaScript files
  - `site.webmanifest`: Web app manifest

- `config/`: Application configuration files
  - Database connection
  - Authentication strategies (GitHub, Google)
  - Data import utilities

- `controllers/`: Request handlers for different application domains
  - Authentication
  - Email management
  - Homework tracking
  - Lesson management
  - Page rendering

- `middleware/`: Express middleware functions
  - Authentication checks
  - Flash message management

- `models/`: Mongoose data models
  - User-related models (User, Token)
  - Homework tracking models
  - Lesson progress models

- `routes/`: Express route definitions
  - Main application routes
  - OAuth authentication routes
  - Homework and lesson-specific routes

- `views/`: Pug template files
  - Page templates
  - Layouts
  - Partials and mixins
  - Resource-specific views

### Testing Directory (`/cypress`)
- `e2e/`: End-to-end test files
- `fixtures/`: Test data
- `support/`: Cypress support files and custom commands

### Data Directory (`/data`)
- JSON files containing static data for homeworks, lessons, and related content

This structure promotes modularity, makes the codebase easy to navigate, and separates concerns between different components of the web application.

## Technologies Used

### Backend
- **Runtime**: Node.js (ES Module)
- **Web Framework**: Express.js
- **Database**: MongoDB
- **ORM/ODM**: Mongoose
- **Authentication**: 
  - Passport.js
  - Passport strategies:
    - Local authentication
    - GitHub OAuth
    - Google OAuth

### Frontend
- **Templating Engine**: Pug
- **CSS Framework**: Tailwind CSS
- **Fonts**: 
  - Poppins
  - Orienta
  - Font Awesome 6

### Testing & Development
- **End-to-End Testing**: Cypress
- **Unit Testing**: 
  - Jest
  - Vitest
- **Development Tools**:
  - Nodemon
  - Supertest

### Additional Libraries & Utilities
- **Email**: Nodemailer
- **Environment Management**: dotenv
- **Validation**: validator.js
- **GitHub API Integration**: @octokit/core
- **Session Management**: express-session
- **CORS Handling**: cors
- **Logging**: morgan

### Deployment & Infrastructure
- **Configuration**: 
  - Fly.io (fly.toml present)
  - Environment-based configuration

### Development Workflow
- **Package Manager**: Yarn
- **Module System**: ES Modules
- **Code Quality**: Integrated testing and development scripts

## Additional Notes

### Project Background

This project originated as a personal learning initiative for tracking 100Devs class and homework progress. While functional, the project is still evolving and has several areas identified for potential improvement.

### Known Limitations

- The current implementation uses Pug templating, which may be less familiar to potential contributors
- Authentication and database setup require multiple manual configuration steps
- The project lacks comprehensive test coverage

### Future Development Considerations

- Improve documentation and contribution processes
- Explore alternative templating solutions that are more contributor-friendly
- Enhance authentication and setup workflows
- Implement more robust testing strategies

### Performance and Scalability

The application is built on a Node.js and MongoDB stack, which provides flexibility for future scaling. Current performance considerations include:
- Using Tailwind CSS for efficient styling
- Modular MVC architecture
- Support for multiple authentication strategies (GitHub, Google, local)

### Maintenance Notes

- Regular database imports may be necessary to keep lesson and homework data current
- Email functionality requires additional configuration (e.g., Mailhog setup)
- Ongoing refinement of the project structure and contribution guidelines is anticipated

### Development Insights

The project represents a significant learning journey, emphasizing the importance of:
- Iterative development
- Adaptability in architectural decisions
- Preparing projects for potential community contributions

## Contributing

We welcome contributions from the community! By contributing, you help improve the project and make it better for everyone.

### Getting Started

1. **Find an Issue**
   - Browse through the [GitHub Issues](https://github.com/labrocadabro/communitytaught/issues) tab
   - Look for open issues you're interested in working on
   - If you have a suggestion, create a new issue explaining the proposed change

2. **Contribution Process**
   - Wait to be assigned to an issue to avoid duplicate work
   - Fork the repository
   - Create a new branch with a clear name (e.g., `issue-X-description`)
   - Make your changes
   - Create a pull request linking to the original issue

### Development Setup

- The project uses Node.js with MongoDB
- Key development scripts:
  - `yarn dev`: Run the development server
  - `yarn css`: Watch and compile Tailwind CSS
  - `yarn e2e`: Run end-to-end tests
  - `yarn e2e:watch`: Open Cypress for interactive testing

### Code Guidelines

- Make sure to create a new branch for each issue
- Keep your changes focused and related to the specific issue
- If you discover additional changes needed, create a separate issue
- Explain your changes clearly in the pull request description

### Testing

- The project uses Cypress for end-to-end testing
- Run tests using `yarn e2e`
- Ensure your changes pass existing tests
- Add new tests if you're introducing new functionality

### Submitting a Pull Request

1. Explain what you've changed and why
2. Link your pull request to the original issue
3. Be prepared to make requested changes during review

### Code of Conduct

Please be respectful and collaborative. We aim to create an inclusive environment for all contributors.

### Questions?

If you have any questions about contributing, please open an issue or reach out to the maintainers.

## License

This project is licensed under the MIT License. 

### License Details
- **Type**: MIT License
- **Copyright**: © 2022 Laura Abro

A copy of the full license is available in the [LICENSE](LICENSE) file in the repository root.

#### Key Permissions
- Commercial use
- Modification
- Distribution
- Private use

#### Key Limitations
- No warranty provided
- Authors are not liable for damages

For complete license terms, please review the full LICENSE file.