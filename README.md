# AI Research Lead Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Technologies Used

- Next.js 15.2
- TypeScript
- Tailwind CSS
- Framer Motion
- Docker

## Docker Deployment

This project is designed to be run exclusively through Docker. Local development is not supported.

### Prerequisites

- Docker
- Docker Compose

### Environment Variables

Create a `.env.production` file with:

```env
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

### Running the Application

1. Build and start the containers:

```bash
docker-compose up --build
```

2. To run in detached mode:

```bash
docker-compose up --build -d
```

3. To stop the containers:

```bash
docker-compose down
```

The application will be available at `http://localhost:3000`

## Project Structure

```
.
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utility functions
├── public/          # Static assets
├── styles/          # Global styles
├── Dockerfile       # Docker configuration
└── docker-compose.yml # Docker Compose configuration
```

## License

Private - All rights reserved
