FROM mysql:latest 

COPY ./item_db.sql ./docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD toor

EXPOSE 3307
