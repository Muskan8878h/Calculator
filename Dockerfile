# Use a lightweight nginx image
FROM nginx:alpine

# Copy files from src/ to nginx's default HTML directory
COPY src/index.html /usr/share/nginx/html/index.html
COPY src/script.js /usr/share/nginx/html/script.js

# Expose default nginx port
EXPOSE 80

# Nginx starts automatically
