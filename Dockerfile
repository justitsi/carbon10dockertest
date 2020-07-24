FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html

ADD build /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]