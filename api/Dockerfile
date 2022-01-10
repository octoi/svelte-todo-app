FROM node
WORKDIR /api
COPY package.json .

RUN npm install

COPY src ./src/
COPY tsconfig.json .
COPY start-script.sh .
COPY wait-for-it.sh .

RUN npm run build

CMD node ./dist/app.js