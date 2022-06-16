# Introduction 
To demonstrate how to use openresty(nginx + lua engine) as a reverse-proxy  

# Internal projects
This repo contains three projects
1. proxy : this is the openresty based proxy. This listen on port 8080
2. backend-app : this is a node.js based API application with a GET and a POST endpoints. This listen on port 3000
3. client-app: this is a node.js based app used to make HTTP calls to the proxy app

# How to run
The proxy and the backend-app run as Docker container using Docker-Compose
1. docker-compose build
2. docker-compose up

**You can use the Postman collection from the repo to call the APIs**