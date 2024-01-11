# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json files first
COPY package*.json ./

# Install project dependencies
# RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Nuxt.js application
# RUN npm run build

# Expose the port on which the Nuxt.js application will run
EXPOSE 3000

# Command to start the Nuxt.js application
CMD pnpm run dev
