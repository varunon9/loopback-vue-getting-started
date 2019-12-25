FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app

#WORKDIR sets this newly created directory as the working directory for any commands
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD [ "npm", "run", "start-docker" ]