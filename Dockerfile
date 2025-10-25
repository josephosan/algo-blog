# 1. Base Image: Use the official Node.js 20 Alpine image for a lightweight base.
FROM node:20-alpine AS base

# 2. Set Working Directory
WORKDIR /app

# 3. Build Stage: This stage builds the Next.js application.
FROM base AS builder

# Copy package.json and package-lock.json (if available)
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application for production
RUN npm run build

# 4. Runner Stage: This stage runs the built application.
FROM base AS runner

# Set environment to production
ENV NODE_ENV production

# Copy the standalone output from the builder stage
# This includes the Next.js server and static assets.
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js server
CMD ["node", "server.js"]
