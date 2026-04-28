# Use the official PHP image with Apache
FROM php:8.2-apache

# Install mysqli extension
RUN docker-php-ext-install mysqli

# Copy API source code to Apache root
COPY src/LAMPAPI/ /var/www/html/

# Expose port 80
EXPOSE 80

# Set up a default command
CMD ["apache2-foreground"]
