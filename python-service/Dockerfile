FROM python:3.9-slim

WORKDIR /app 

COPY . ./

RUN pip install -r ./requirements.txt

EXPOSE 5005

CMD waitress-serve --port=5005 --call main:create_app