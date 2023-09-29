# Use an official Node runtime as the parent image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and pnpm-lock.yaml files to the working directory
COPY package.json pnpm-lock.yaml ./

# Install any needed packages specified in package.json
RUN npm install -g pnpm

# Copy the rest of the working directory contents into the container
COPY . .
RUN pnpm install

# Make port 80 available to the world outside this container
EXPOSE 80
RUN pnpm run build

RUN cd apps/web

# Run the app when the container launches
CMD ["pnpm", "next", "start"]
