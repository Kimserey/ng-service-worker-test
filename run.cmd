docker container rm -f nginx
docker run --name nginx -v %cd%/nginx/nginx.conf:/etc/nginx/nginx.conf:ro -v %cd%/dist/service-worker-test:/usr/share/nginx/html:ro -d -p 8080:80 nginx