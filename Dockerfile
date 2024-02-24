FROM node:15.8.0

WORKDIR /usr/src/app

COPY packages*.json ./

# Install the latest npm
# RUN npm install -g npm@10.4.0

# Install dependencies to generate package-lock.json
RUN npm install

# Copy the rest of the application code
COPY . .

# Run npm ci for production
RUN npm ci --only=production

COPY . .

USER node

CMD [ "node", "app.js" ]

