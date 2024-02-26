# Use the official Golang image as the base image
FROM golang:latest

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files for dependency resolution
COPY go.mod go.sum ./

# Download and install dependencies
RUN go mod download

# Copy source files into application directory
COPY --chown=app:app . /app

# Build the Go application
RUN go build -o main .

# Expose the port on which the Go application will run
EXPOSE 3001

# Command to run the executable
CMD go run .
