# builder
FROM node:18 AS builder

ENV NODE_ENV production
# WORKDIR /app
COPY . .
RUN yarn --frozen-lockfile && yarn build

# runner
FROM gcr.io/distroless/nodejs:18 AS final

ENV NODE_ENV production
WORKDIR /app

# ビルダーステージから.nonroot所有権で資材をコピーしてコンテナに配置します。
COPY --from=builder --chown=nonroot:nonroot /app/.next ./.next
COPY --from=builder --chown=nonroot:nonroot /app/public ./public
COPY --from=builder --chown=nonroot:nonroot /app/node_modules ./node_modules
COPY --from=builder --chown=nonroot:nonroot /app/package.json ./package.json

# 以降のコマンドが非特権ユーザー(nonroot)で実行されるように指定します。
USER nonroot

# コンテナ上のポート3000を公開します。
EXPOSE 3000

# アプリケーションを起動します。
CMD ["node_modules/.bin/next", "start"]
