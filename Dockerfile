# Use an official Node runtime as the parent image
FROM node:18


ARG NEXT_PUBLIC_BACKEND_API
ARG PUBLIC_BACKEND_API
ARG AUTH0_SECRET
ARG AUTH0_BASE_URL
ARG AUTH0_ISSUER_BASE_URL
ARG AUTH0_CLIENT_ID
ARG AUTH0_CLIENT_SECRET

ENV NEXT_PUBLIC_BACKEND_API=${NEXT_PUBLIC_BACKEND_API}
ENV PUBLIC_BACKEND_API=${PUBLIC_BACKEND_API}
ENV AUTH0_SECRET=${AUTH0_SECRET}
ENV AUTH0_BASE_URL=${AUTH0_BASE_URL}
ENV AUTH0_ISSUER_BASE_URL=${AUTH0_ISSUER_BASE_URL}
ENV AUTH0_CLIENT_ID=${AUTH0_CLIENT_ID}
ENV AUTH0_CLIENT_SECRET=${AUTH0_CLIENT_SECRET}


# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and pnpm-lock.yaml files to the working directory
COPY package.json pnpm-lock.yaml ./

# Install any needed packages specified in package.json
RUN npm install -g pnpm

# Copy the rest of the working directory contents into the container
COPY apps /app/apps
COPY packages /app/packages
COPY package.json /app/package.json
COPY pnpm-lock.yaml /app/pnpm-lock.yaml
COPY pnpm-workspace.yaml /app/pnpm-workspace.yaml
COPY turbo.json /app/turbo.json
RUN pnpm install

# Make port 80 available to the world outside this container
EXPOSE 80
RUN pnpm run build

RUN cd apps/web

WORKDIR /app/apps/web



RUN echo ${NEXT_PUBLIC_BACKEND_API}
RUN echo ${PUBLIC_BACKEND_API}

# Run the app when the container launches
CMD ["npm", "run", "start"]

