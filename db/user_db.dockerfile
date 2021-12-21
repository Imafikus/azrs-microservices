FROM mysql:latest 

COPY ./user_db.sql ./docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD toor

EXPOSE 3306
