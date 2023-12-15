#!/usr/bin/env sh
set -e

mkdir -p dist
rm -f dist/*
gtar --exclude='dist' --exclude='.git' --exclude='.idea' \
  -czf dist/googledocsredirect.tar.gz --transform 's,^,googledocsredirect/,' *

echo "Signature:"
openssl dgst -sha512 -sign ~/.nextcloud/certificates/googledocsredirect.key dist/googledocsredirect.tar.gz | openssl base64

echo  "\nNow visit: https://apps.nextcloud.com/developer/apps/releases/new"
