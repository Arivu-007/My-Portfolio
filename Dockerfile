# Use a lightweight web server image
FROM nginx:alpine

# Copy all website files into Nginx's default web directory
COPY . /usr/share/nginx/html

# Expose port 80 so we can access it
EXPOSE 80

