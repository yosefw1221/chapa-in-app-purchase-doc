FROM node:latest as base

RUN apt-get update && apt-get install -y git jq

COPY deploy.sh /deploy.sh
ENTRYPOINT ["/deploy.sh"]