# Install dependencies and build app
FROM node:20-alpine AS builder

# Install OS deps & pnpm
RUN apk add --no-cache libc6-compat && npm install -g pnpm

WORKDIR /app

# Copy only the files needed for installing dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy app source
COPY . .

# Build the Next.js app (standalone mode)
RUN pnpm build

# ---- Production image ----
FROM node:20-alpine AS runner

WORKDIR /app

# Install smallest production-only deps (if needed)
RUN apk add --no-cache libc6-compat

# Copy built app from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package.json ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Ensure the app runs as a non-root user
RUN addgroup -g 1001 -S appgroup && adduser -S appuser -u 1001 -G appgroup
USER appuser

# Expose the port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
