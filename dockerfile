FROM ubuntu:latest
WORKDIR apptest234
COPY . /apptest234/
RUN apt-get update
RUN apt-get install libnode109 -y
RUN apt-get install nginx -y
RUN apt-get install npm -y
COPY . /var/www/html/
