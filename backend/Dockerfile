# Use the official Golang image as the base image
FROM golang:latest

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files for dependency resolution
COPY go.mod go.sum ./

# Download and install dependencies
RUN go mod download

# Copy the entire application directory from the host to the image
COPY . .

# Copy the database file into the application directory
COPY ./data/database.db /app/database.db

# Change permissions for the audiodeck.db file
RUN chmod 644 /app/database.db

# Build the Go application
RUN go build -o main .

# Expose the port on which the Go application will run
EXPOSE 3001

# Command to run the executable
CMD go run .
