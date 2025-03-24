FROM jenkins/inbound-agent
USER root

# Install Node.js from Nodesource (latest stable version)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt install -y nodejs