FROM node:16-alpine

WORKDIR /app 

COPY . ./

RUN npm install 
RUN npm install -g serve 
RUN npm run build

EXPOSE 3000 

CMD npm run serve