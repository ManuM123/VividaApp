# 1. Node.js base image
FROM node:20-alpine

#2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the package files first to leverage Docker's layer caching
COPY package.json package-lock.json ./

#4. Install dependencies
RUN npm install

#5. Bring application code into the image
COPY . .

#6. Build the NextJS applicatoin
RUN npm run build

#7. NextJS frontend usually runs on port 3000
EXPOSE 3000

#8. Start server
CMD ["npm", "start"]