ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev"]
