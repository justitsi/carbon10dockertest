# FROM nginx:alpine

# RUN rm -rf /usr/share/nginx/html
# RUN mkdir /usr/share/nginx/html

# ADD build /usr/share/nginx/html

# EXPOSE 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# stage: 1
FROM node:latest as react-build
LABEL stage=builder
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# stage: 2 — the production environment
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html

COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]