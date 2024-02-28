# Use the official Golang image as the base image
FROM golang:latest

# Add a group and user named 'app'
RUN addgroup app && adduser -S -G app app

# Set the working directory inside the container
WORKDIR /app

# Change ownership of the /app directory to the app user
RUN chown -R app:app /app

# Switch to the 'app' user
USER app

# Copy only the necessary files for dependency resolution
COPY go.mod go.sum ./

# Download and install dependencies
RUN go mod download

# Copy the entire application directory from the host to the image
COPY . .

# Copy the database file into the application directory
COPY ./data/database.db /app/database.db

# Build the Go application
RUN go build -o main .

# Expose the port on which the Go application will run
EXPOSE 3001

# Command to run the executable
CMD go run .
