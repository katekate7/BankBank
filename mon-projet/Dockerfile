# Use the Jenkins inbound agent as the base image
FROM jenkins/inbound-agent

# Switch to the root user to install packages
USER root

# Update the package list and install PHP
RUN apt update && apt install -y php

# Install additional PHP extensions
RUN apt install -y php-curl php-xml zip unzip

# Install the PHP mbstring extension
RUN apt install -y php-mbstring

# Download the Composer installer script
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    # Verify the installer script's SHA-384 hash
    php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'.PHP_EOL; } else { echo 'Installer corrupt'.PHP_EOL; unlink('composer-setup.php'); exit(1); }"

# Run the Composer installer script
RUN php composer-setup.php

# Remove the Composer installer script
RUN php -r "unlink('composer-setup.php');"

# Move the Composer binary to a directory in the system PATH
RUN mv composer.phar /usr/local/bin/composer
