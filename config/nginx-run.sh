#!/bin/sh

echo "Launching nginx..."

envsubst '${books_api_url}' < /tmp/default.template > /tmp/default.conf

cp /tmp/default.conf /etc/nginx/conf.d/default.conf

nginx -g "daemon off;"