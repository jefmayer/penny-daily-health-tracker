FROM node:18.17.1-slim
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
WORKDIR /app

ARG MONGODB_DB=placeholder
ARG MONGODB_URI=placeholder

ENV MONGODB_DB=$MONGODB_DB
ENV MONGODB_URI=$MONGODB_URI

COPY package*.json ./
RUN npm install --production --legacy-peer-deps

COPY . .

COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public
COPY --from=builder /app/views ./views
COPY --from=builder /app/index.js ./

EXPOSE 5001
ENV NODE_ENV=production
CMD ["npm", "start"]