# Load Balancer with Nginx and Docker

This project demonstrates how to set up a load balancer using Nginx within a Dockerized environment.

## Features

- Load balancing across multiple backend services.
- Configurable Nginx setup for high availability.
- Easy deployment using Docker Compose.

## Prerequisites

- Docker installed on your system.
- Docker Compose installed.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/hunglv-fs/loadbalancer-nginx-docker.git
    cd loadbalancer-nginx-docker
    ```

2. Build and start the services:
    ```bash
    docker-compose up --build
    ```

3. Access the load balancer at `http://localhost:8080`.

## Project Structure

```
.
├── docker-compose.yml   # Docker Compose configuration
├── nginx/
│   ├── nginx.conf       # Nginx configuration file
├── backend/
│   ├── Dockerfile       # Backend service Dockerfile
│   ├── server.js        # Backend application code
```

## Configuration

- Modify `nginx/nginx.conf` to customize the load balancing rules.
- Add or remove backend services in `docker-compose.yml`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.