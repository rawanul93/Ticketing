# Use an existing docker image as a base
FROM node:18.12.1-alpine

# Set the working directory to /app in the container. All following commands will be issued relative to this dir
WORKDIR /app

# Copy over ONLY the package.json file
COPY package.json .
# Download and install all dependancies
RUN npm install
# Copy over the rest of the source code
COPY . .

# Set the command to run when the container starts up
CMD [ "npm", "start" ]