# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app 

# Copy only the package.json and package-lock.json files first
COPY package*.json ./

# Install global dependencies
RUN npm install -g pnpm

# Install project dependencies
RUN pnpm install

# Build the Nuxt.js application
# RUN pnpm run build

# Copy source files into application directory
COPY --chown=app:app . /app

# Expose the port on which the Nuxt.js application will run
EXPOSE 3000

# Command to start the Nuxt.js application
CMD pnpm run dev
