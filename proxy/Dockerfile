# FROM openresty/openresty:1.19.9.1-alpine-fat
FROM openresty/openresty:1.21.4.1-alpine-fat
COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf
COPY conf /etc/nginx/conf.d
# RUN rm /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]