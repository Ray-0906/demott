FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

# copy the app source 
COPY . .

# Run as non-root user
USER  node 
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]
