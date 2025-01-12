# Step 1: Build the app
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependencies installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project files into the container
COPY . .

# Build the Next.js app and export static files
RUN npm run build 

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the exported files to the Nginx web server directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 to the host machine
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
