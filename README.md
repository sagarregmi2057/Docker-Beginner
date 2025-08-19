# Node.js Express Application

This is a simple Node.js application using Express, designed to serve a basic API and static files. The application is containerized using Docker for easy deployment.

## Prerequisites

- [Node.js](https://nodejs.org/) (for local development)
- [Docker](https://www.docker.com/) (for containerized deployment)
- [Docker Compose](https://docs.docker.com/compose/) (optional, for managing services)

## Project Structure

- `index.js`: Main application file containing the Express server setup.
- `public/`: Directory for serving static files (e.g., HTML, CSS, JavaScript).
- `Dockerfile`: Configuration for building the Docker image.
- `package.json`: Node.js project dependencies and scripts.sd

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   node index.js
   ```

4. Access the application at `http://localhost:3000`.

### Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t my-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 my-app
   ```

   - The application will be accessible at `http://localhost:3000`.
   - The `-p 3000:3000` flag maps port 3000 on the host to port 3000 in the container.

3. (Optional) Custom port mapping:
   - To map a different host port (e.g., 2000) to the container port (3000):
     ```bash
     docker run -p 2000:3000 my-app
     ```
   - Access the application at `http://localhost:2000`.

### Docker Port Mapping Syntax

- `-p <hostPort>:<containerPort>`
  - `<hostPort>`: The port on your host machine (e.g., 3000).
  - `<containerPort>`: The port the application listens to inside the container (e.g., 3000).

Example:
- If the app runs on port 8000 inside the container but you want to access it on port 3000 on your host:
  ```bash
  docker run -p 3000:8000 my-app
  ```
- Access the application at `http://localhost:3000`.

### Using Docker Compose

1. Create a `docker-compose.yml` file (example below):
   ```yaml
   version: '3'
   services:
     app:
       image: my-app
       build: .
       ports:
         - "3000:3000"
   ```

2. Run the application with Docker Compose:
   ```bash
   docker-compose up
   ```

3. Access the application at `http://localhost:3000`.

## Dockerfile Explanation

The `Dockerfile` contains the following instructions:

```dockerfile
FROM node:latest
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]
```

- `FROM node:lat`est: Uses the latest Node.js image as the base.
- `COPY . .`: Copies all files from the current directory to the container.
- `RUN npm install`: Installs project dependencies.
- `EXPOSE 3000`: Exposes port 3000 for the application (though this is informational; use `-p` to map ports).
- `CMD [ "node", "index.js" ]`: Runs the application with `node index.js`.

## Example API Endpoint

- **GET** `/`: Returns a JSON response:
  ```json
  { "message": "Welcome to the Express server!" }
  ```

## Static Files

Static files are served from the `public/` directory. Place your HTML, CSS, or JavaScript files in the `public/` folder, and they will be accessible at `http://localhost:3000/<filename>`.

## Notes

- Ensure Node.js and npm are installed for local development.
- The default port is 3000, but it can be customized using the `PORT` environment variable or Docker port mapping.
- For production, consider adding a `.dockerignore` file to exclude unnecessary files (e.g., `node_modules`, `.git`).