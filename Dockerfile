FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY next-app/package.json next-app/package-lock.json ./

# Install dependencies
RUN npm install

# Copy all necessary files (including configs, src, public, etc.)
COPY next-app/ ./

# Build the Next.js app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

