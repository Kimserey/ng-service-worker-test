docker container rm -f nginx
docker run --name nginx -v %cd%/nginx.conf:/etc/nginx/nginx.conf:ro -d -p 8080:80 nginx