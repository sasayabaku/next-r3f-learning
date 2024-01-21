FROM node:18.17

# Install basic development tools
RUN apt update && apt install -y less man-db sudo
RUN rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# USER $USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DOCKER_CLIENT_VERSION=1.12.3
ENV DOCKER_API_VERSION=1.24
RUN curl -fsSL https://get.docker.com/builds/Linux/x86_64/docker-${DOCKER_CLIENT_VERSION}.tgz \
    | tar -xzC /usr/local/bin --strip=1 docker/docker

ENV DEVCONTAINER=true
