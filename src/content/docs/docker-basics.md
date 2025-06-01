---
title: 'Docker Basics'
description: 'A beginner-friendly guide to Docker fundamentals, containers, images, and common commands'
pubDate: 2025-04-03
category: 'DevOps'
order: 1
tags: ['docker', 'containers', 'devops', 'cloud-native']
heroImage: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg'
---

# Docker Basics

Docker is a platform for developing, shipping, and running applications in containers. Containers package an application with all its dependencies, ensuring it works the same regardless of the environment.

## Core Concepts

### Containers

Containers are lightweight, standalone, executable packages that include everything needed to run an application:

- Code
- Runtime
- System tools
- System libraries
- Settings

<div class="note">
Unlike virtual machines, containers share the host system's kernel but run in isolated user spaces.
</div>

### Images

Docker images are read-only templates used to create containers. They contain:

- A filesystem snapshot
- Application code
- Dependencies
- Environment variables
- Commands to run

Images are built in layers, which helps optimize storage and transfer efficiency.

### Dockerfile

A Dockerfile is a text file that contains instructions for building a Docker image.

```dockerfile
# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
```

### Registry

A Docker registry is a repository for Docker images. The default registry is Docker Hub, but you can use private registries as well:

- Docker Hub (public registry)
- Amazon Elastic Container Registry (ECR)
- Google Container Registry (GCR)
- Azure Container Registry (ACR)
- Self-hosted registries

## Getting Started

### Installation

Docker is available for all major operating systems. Visit [Docker's official website](https://www.docker.com/get-started) for installation instructions.

### Basic Commands

Check your Docker installation:

```bash
docker --version
```

Run your first container:

```bash
docker run hello-world
```

## Working with Images

### Pulling Images

Pull an image from a registry:

```bash
docker pull ubuntu:20.04
```

List all local images:

```bash
docker images
```

### Building Images

Build an image from a Dockerfile:

```bash
docker build -t myapp:1.0 .
```

Tag an image:

```bash
docker tag myapp:1.0 username/myapp:1.0
```

Push an image to a registry:

```bash
docker push username/myapp:1.0
```

### Managing Images

Remove an image:

```bash
docker rmi myapp:1.0
```

Remove dangling (unused) images:

```bash
docker image prune
```

## Working with Containers

### Running Containers

Run a container:

```bash
docker run nginx
```

Run a container in detached mode (background):

```bash
docker run -d nginx
```

Run a container with port mapping:

```bash
docker run -d -p 8080:80 nginx
```

Run a container with a volume:

```bash
docker run -d -v /host/path:/container/path nginx
```

Run a container with environment variables:

```bash
docker run -d -e VARIABLE_NAME=value nginx
```

### Managing Containers

List running containers:

```bash
docker ps
```

List all containers (including stopped ones):

```bash
docker ps -a
```

Stop a container:

```bash
docker stop container_id
```

Start a stopped container:

```bash
docker start container_id
```

Remove a container:

```bash
docker rm container_id
```

Remove all stopped containers:

```bash
docker container prune
```

### Container Logs and Execution

View container logs:

```bash
docker logs container_id
```

Follow log output:

```bash
docker logs -f container_id
```

Execute a command in a running container:

```bash
docker exec -it container_id bash
```

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications.

### docker-compose.yml

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - ./:/app
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://postgres:postgres@db:5432/mydb
  
  db:
    image: postgres:13
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=mydb

volumes:
  postgres_data:
```

### Basic Compose Commands

Start services:

```bash
docker-compose up
```

Start services in detached mode:

```bash
docker-compose up -d
```

Stop services:

```bash
docker-compose down
```

Stop services and remove volumes:

```bash
docker-compose down -v
```

View logs:

```bash
docker-compose logs
```

## Dockerfile Best Practices

<div class="tip">
Following these best practices will help you create efficient, secure, and maintainable Docker images.
</div>

### Use Specific Tags

Always use specific version tags instead of `latest`:

```dockerfile
# Good
FROM node:16-alpine

# Avoid
FROM node:latest
```

### Multi-stage Builds

Use multi-stage builds to create smaller production images:

```dockerfile
# Build stage
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Minimize Layers

Combine related commands to reduce the number of layers:

```dockerfile
# Good
RUN apt-get update && \
    apt-get install -y package1 package2 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Avoid
RUN apt-get update
RUN apt-get install -y package1 package2
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*
```

### Non-root User

Run containers as a non-root user for security:

```dockerfile
# Create a non-root user
RUN addgroup -g 1001 appuser && \
    adduser -u 1001 -G appuser -s /bin/sh -D appuser

# Set working directory permissions
WORKDIR /app
COPY --chown=appuser:appuser . .

# Switch to non-root user
USER appuser

CMD ["node", "app.js"]
```

### .dockerignore

Use a `.dockerignore` file to exclude unnecessary files:

```
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.github
.gitignore
README.md
```

## Docker Networking

### Network Types

Docker provides several network types:

- **Bridge**: Default network for containers
- **Host**: Share the host's network namespace
- **None**: No networking
- **Overlay**: Connect containers across multiple Docker hosts
- **Macvlan**: Assign a MAC address to a container

### Basic Network Commands

List networks:

```bash
docker network ls
```

Create a network:

```bash
docker network create my-network
```

Connect a container to a network:

```bash
docker network connect my-network container_id
```

Run a container on a specific network:

```bash
docker run --network=my-network nginx
```

Inspect network:

```bash
docker network inspect my-network
```

## Docker Volumes

### Volume Types

- **Named volumes**: Managed by Docker
- **Bind mounts**: Map host directory to container
- **tmpfs mounts**: Stored in host memory

### Working with Volumes

Create a named volume:

```bash
docker volume create my-volume
```

List volumes:

```bash
docker volume ls
```

Run a container with a named volume:

```bash
docker run -v my-volume:/app/data nginx
```

Run a container with a bind mount:

```bash
docker run -v /host/path:/container/path nginx
```

Inspect a volume:

```bash
docker volume inspect my-volume
```

Remove a volume:

```bash
docker volume rm my-volume
```

Clean up unused volumes:

```bash
docker volume prune
```

## Common Patterns and Use Cases

### Web Application

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./src:/app/src
    environment:
      - NODE_ENV=development
```

### Database with Persistence

```yaml
# docker-compose.yml
version: '3'
services:
  db:
    image: postgres:13
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
      - POSTGRES_DB=mydb
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### Development Environment

```yaml
# docker-compose.yml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev
```

## Debugging and Troubleshooting

<div class="warning">
Always check logs first when troubleshooting container issues.
</div>

### Checking Logs

```bash
docker logs container_id
```

### Interactive Debugging

```bash
docker exec -it container_id sh
```

### Inspecting Containers

```bash
docker inspect container_id
```

### Common Issues

1. **Container exits immediately**
   - Check if the CMD/ENTRYPOINT is correct
   - Ensure the application doesn't crash

2. **Port binding issues**
   - Check if the port is already in use
   - Verify port mapping syntax

3. **Volume mounting issues**
   - Check path syntax and permissions
   - Ensure host directory exists

4. **Network connectivity issues**
   - Check network configuration
   - Verify container DNS settings

## Docker in Production

### Security Considerations

1. **Keep images updated**
   - Regularly update base images for security patches

2. **Scan images for vulnerabilities**
   - Use tools like Docker Scout, Trivy, or Clair

3. **Use non-root users**
   - Always run containers as non-root when possible

4. **Limit capabilities**
   - Drop unnecessary Linux capabilities

### Resource Management

Limit container resources:

```bash
docker run --memory=512m --cpus=0.5 nginx
```

### Health Checks

Add health checks to your Dockerfile:

```dockerfile
HEALTHCHECK --interval=5s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
```

Or in docker-compose.yml:

```yaml
services:
  web:
    image: nginx
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

## Conclusion

Docker has revolutionized how we build, ship, and run applications by providing a consistent environment across development, testing, and production. By understanding the fundamentals of Docker, you can leverage containers to simplify your development workflow, improve deployment reliability, and enhance application scalability.

As you grow more comfortable with Docker, explore advanced topics such as Docker Swarm, container orchestration with Kubernetes, CI/CD pipeline integration, and monitoring solutions for containers.