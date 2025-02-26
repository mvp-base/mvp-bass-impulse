FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN npx prisma generate --schema=./src/prisma/schema.prisma

RUN yarn build


# Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

# Don't run production as root
RUN addgroup -g 1001 -S nodejs
RUN adduser -u 1001 -S nextjs 
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG NEXTAUTH_URL
ENV NEXTAUTH_URL=${NEXTAUTH_URL}
ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
ARG NEXTAUTH_USERNAME
ENV NEXTAUTH_USERNAME=${NEXTAUTH_USERNAME}
ARG NEXTAUTH_PASSWORD
ENV NEXTAUTH_PASSWORD=${NEXTAUTH_PASSWORD}

ARG EMAIL_ADDRESS
ENV EMAIL_ADDRESS=${EMAIL_ADDRESS}
ARG EMAIL_PASSWORD
ENV EMAIL_PASSWORD=${EMAIL_PASSWORD}

# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]