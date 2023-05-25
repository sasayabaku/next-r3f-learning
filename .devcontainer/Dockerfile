FROM node:18

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

WORKDIR /workspace

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# USER $USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
