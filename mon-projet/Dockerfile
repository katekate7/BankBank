FROM jenkins/inbound-agent

USER root

# Install PHP and necessary extensions
RUN apt update && apt install -y \
    php \
    php-curl \
    php-xml \
    php-mbstring \
    zip \
    unzip \
    curl

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    rm composer-setup.php
