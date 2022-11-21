FROM node:latest as base

RUN apt-get update && apt-get install -y git jq

ENTRYPOINT ["sh","./deploy.sh"]