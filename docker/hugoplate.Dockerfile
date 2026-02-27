FROM ghcr.io/gohugoio/hugo:v0.154.5

USER root

RUN apk add --no-cache go

WORKDIR /workspace

COPY site/package.json site/package-lock.json ./
RUN npm ci

COPY site/ ./

ENTRYPOINT []
