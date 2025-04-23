# CommunityTaught.org: A Comprehensive Learning Progress Tracking Platform for 100Devs Students

## Project Overview

CommunityTaught.org is a comprehensive web application designed to track and manage learning progress for 100Devs classes and homework assignments. The platform provides an integrated solution for students to monitor their educational journey, track homework completion, and access resources.

### Key Features
- Homework and lesson tracking system
- User authentication with multiple login methods (GitHub and Google OAuth)
- Interactive dashboard for tracking progress
- Resource library for learning materials
- Community project showcase

### Purpose
The application addresses the challenges of managing coursework and tracking personal progress in a coding bootcamp or online learning environment. It simplifies the process of:
- Monitoring homework completion
- Tracking lesson progress
- Providing easy access to learning resources
- Facilitating community engagement

### Benefits
- Centralized tracking of educational milestones
- Simplified progress visualization
- Easy access to learning materials
- Streamlined user experience for 100Devs students
- Supports multiple authentication methods for convenient access

## Getting Started, Installation, and Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or later)
- Yarn package manager
- MongoDB (local installation or cloud-based MongoDB Atlas account)

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

### Configuration

1. Create a `.env` file by copying the `.env.example`:
   ```bash
   cp .env.example .env
   ```

2. Configure the `.env` file with your specific settings:
   - `PORT`: The port your application will run on (default: 3000)
   - `NODE_ENV`: Set to `development` or `production`
   - `DOMAIN`: Your application's domain (e.g., `http://localhost:3000`)
   - `SECRET`: A random string for session management
   - `DB_URI`: MongoDB connection string
   - Optional: Configure SMTP, Google, and GitHub OAuth settings if needed

### Running the Application

#### Development Mode
To run the application in development mode with hot reloading:
```bash
yarn dev
```

#### Production Mode
To start the application in production mode:
```bash
yarn start
```

#### Compile Tailwind CSS
To watch and compile Tailwind CSS:
```bash
yarn css
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

### Additional Scripts
- `yarn test`: Run project tests (currently not configured)
- `yarn cy:verify`: Verify Cypress installation
- `yarn cy:info`: Get Cypress system information

### Deployment Considerations
- Ensure all environment variables are properly set
- Use a production-ready MongoDB instance
- Set `NODE_ENV` to `production`
- Configure appropriate authentication methods

### Troubleshooting
- Verify all dependencies are installed correctly
- Check MongoDB connection
- Ensure environment variables are correctly set
- Review server logs for specific error messages

## Deployment

### Deployment Platforms

This application can be deployed using multiple platforms:

#### Fly.io Deployment
Fly.io is the primary deployment platform for this application. To deploy:

1. Install the Fly CLI and login
```bash
# Install Fly CLI
brew install flyctl  # macOS
# Or for other systems, visit https://fly.io/docs/hands-on/install-flyctl/

# Login to Fly
flyctl auth login
```

2. Deploy the application
```bash
# Initialize and deploy
flyctl launch
flyctl deploy
```

#### Local Production Deployment
For local production deployment:

1. Set environment variables:
- Ensure all required environment variables are configured
- Use a `.env` file or platform-specific environment configuration

2. Build and start the application
```bash
# Install dependencies
yarn install

# Start the production server
yarn start
```

### Deployment Configuration

#### Environment Requirements
- Node.js (version specified in package.json)
- MongoDB database
- Environment variables for authentication and external services

#### Recommended Deployment Steps
1. Clone the repository
2. Install dependencies with `yarn install`
3. Configure environment variables
4. Build Tailwind CSS: `yarn run css`
5. Start the server: `yarn start`

### Deployment Considerations
- The application uses Passport for authentication with GitHub and Google
- Ensure all required environment variables are set
- Configure database connection in your deployment environment
- Use HTTPS and secure your database connection

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB

### Authentication
- **Passport.js**: Authentication middleware
- **Passport Strategies**:
  - Local authentication
  - GitHub OAuth
  - Google OAuth

### Frontend
- **Pug**: Template engine
- **Tailwind CSS**: Utility-first CSS framework

### Testing and Development
- **Cypress**: End-to-end testing framework
- **Jest**: JavaScript testing framework
- **Nodemon**: Development server with auto-restart
- **Vitest**: Lightweight testing framework

### Additional Libraries
- **dotenv**: Environment variable management
- **express-session**: Session management
- **nodemailer**: Email sending
- **validator**: Input validation

### Build and Development Tools
- **Tailwind CLI**: CSS generation
- **ESM (ECMAScript Modules)**: Module system

## Feature Highlights

### Authentication and User Management
- Secure user registration and login system
- Password reset and account recovery functionality
- Email change and account deletion options
- User verification process

### Dashboard and Progress Tracking
- Personalized user dashboard
- Track progress through classes and lessons
- View next upcoming class
- Admin users can add new classes and homework assignments

### Lesson Management
- Browse and view all lessons
- Mark lessons as watched
- Check-in for lessons
- Add, edit, and delete lessons (for admin users)

### Homework Tracking
- View and manage homework assignments
- Track homework item completion
- Submit homework
- Import homework data
- Mark additional homework extras

### Resources
- Comprehensive resources section
- Multiple resource pages accessible by users
- Community-focused content

## Configuration

### Environment Configuration

The project uses environment variables for configuration. Copy the `.env.example` file to `.env` and populate the following key configurations:

#### Server Configuration
- `PORT`: The port the application will run on (default: 3000)
- `NODE_ENV`: Environment mode (`development` or `production`)
- `DOMAIN`: Base URL of the application

#### Database Configuration
- `DB_URI`: MongoDB connection string
  - Local example: `mongodb://localhost:27017/<dbname>`
  - Atlas example: `mongodb+srv://<user>:<password>@<cluster>.<subdomain>.mongodb.net/<dbname>`

#### Authentication Configuration
##### Google OAuth
- `GOOGLE_ID`: Google OAuth client ID
- `GOOGLE_SECRET`: Google OAuth client secret

##### GitHub OAuth
- `GITHUB_ID`: GitHub OAuth client ID
- `GITHUB_SECRET`: GitHub OAuth client secret

#### Email Configuration (Optional)
- `SMTP_SERVER`: SMTP server address
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password
- `FROM_EMAIL`: Sender email address
- `FROM_NAME`: Sender name

### Development Scripts
Available npm/yarn scripts for configuration and development:
- `start`: Run the production server
- `dev`: Run the development server with nodemon
- `css`: Watch and compile Tailwind CSS
- `e2e`: Run Cypress end-to-end tests
- `e2e:watch`: Open Cypress test runner
- Various Cypress-related commands for testing and verification

### Deployment Configuration
The project includes a `fly.toml` configuration for Fly.io deployment:
- Internal port: 8080
- HTTPS forced
- Connection concurrency limits
  - Soft limit: 20 connections
  - Hard limit: 25 connections

### Testing Configuration
Cypress E2E testing configured with:
- Base URL: `http://0.0.0.0:3000`
- Chrome web security disabled
- Video recording disabled by default

## Project Structure

The project follows a structured Node.js/Express application layout with several key directories:

### Source Code
- `src/`: Primary application source code directory
  - `assets/`: Static assets for the application
    - `css/`: Stylesheet files
    - `fonts/`: Font files
    - `img/`: Image resources
    - `js/`: Client-side JavaScript files
    - `site.webmanifest`: Web app manifest file
  - `config/`: Configuration files for database and authentication
  - `controllers/`: Request handling logic for different application domains
  - `middleware/`: Express middleware functions
  - `models/`: Database models and data schemas
  - `routes/`: Application route definitions
  - `views/`: Pug template files for rendering pages
  - `server.js`: Main application entry point
  - `tailwind.css`: Tailwind CSS configuration

### Testing
- `cypress/`: End-to-end testing directory
  - `e2e/`: Cypress test specification files
  - `fixtures/`: Test data and mock resources
  - `support/`: Custom commands and support files

### Data
- `data/`: Static JSON data files for homework, lessons, and other content

### Configuration and Deployment
- `.env.example`: Template for environment configuration
- `fly.toml`: Deployment configuration for Fly.io
- `cypress.config.js`: Cypress testing configuration
- `tailwind.config.cjs`: Tailwind CSS configuration
- `package.json`: Project dependencies and scripts
- `yarn.lock`: Yarn dependency lockfile

### Documentation and Metadata
- `CONTRIBUTING.md`: Guidelines for contributing to the project
- `LICENSE`: Project licensing information
- `.gitignore`: Git ignore configuration

## Contributing

We welcome contributions from the community! Here's how you can help:

### Finding an Issue
1. Browse the [GitHub issues](https://github.com/labrocadabro/communitytaught/issues) to find a task you'd like to work on.
2. If you have a suggestion not in the issues, create a new issue describing your proposed change.

### Contribution Process
1. Wait to be assigned to the issue to avoid duplicate work.
2. Fork the repository.
3. Create a branch with the format `issue-{number}-short-description`.
4. Make your changes, focusing only on the specific issue.
5. Create a pull request linking to the original issue.
6. Respond to any review feedback.

### Running Tests
We use multiple testing frameworks:
- End-to-End Testing: Run Cypress tests with `yarn e2e`
  - Watch mode: `yarn e2e:watch`
- For browser-specific test runs:
  - Chrome: `yarn e2e:record`
  - Edge: `yarn e2e:record:edge`
  - Firefox: `yarn e2e:record:firefox`

### Code of Conduct
- Be respectful and collaborative
- Focus on the specific issue at hand
- If you discover additional improvements, create a separate issue

### Getting Help
If you have questions about contributing, feel free to comment on the issue or reach out to the maintainers.

Thank you for helping improve Community Taught!

## License

The project is licensed under the [MIT License](LICENSE).

### Key License Terms
- Free to use, modify, and distribute
- Must include original copyright notice
- Provided "AS IS" without warranty
- No liability for authors/copyright holders

For complete license details, see the [LICENSE](LICENSE) file.

## Additional Notes

### Project Background

This project originated as a personal homework tracker for the 100Devs coding bootcamp, evolving from earlier personal projects. The application was initially developed without extensive collaboration considerations, which presents ongoing opportunities for improvement.

### Known Limitations

- The current tech stack (particularly Pug templating) may present barriers to open-source contributions
- The project requires further documentation and collaborative process refinement

### Development Insights

- The project represents a significant personal learning experience in full-stack web development
- Iterative development was key, with multiple approaches explored before finding optimal solutions
- The application serves as a practical implementation of a Node.js and MongoDB-based web platform

### Future Considerations

- Improve documentation and contribution guidelines
- Evaluate templating technology for better contributor accessibility
- Continue refining application architecture and performance

### Testing and Quality Assurance

- End-to-end testing is implemented using Cypress
- Multiple browser testing configurations are supported (Chrome, Edge, Firefox)
- Continuous integration and testing scripts are available in the project's package.json

### Authentication and Security

Multiple authentication strategies are supported:
- Local authentication
- GitHub OAuth
- Google OAuth

### Performance and Scalability

- Utilizes Tailwind CSS for responsive and efficient styling
- Modular MVC (Model-View-Controller) architecture
- Designed to be easily extensible and maintainable

### Potential Contributions Welcome

Key areas for potential community contribution include:
- Documentation improvements
- Performance optimization
- Additional feature development
- Testing and bug identification