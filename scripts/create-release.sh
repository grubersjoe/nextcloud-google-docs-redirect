#!/usr/bin/env bash
set -e
shopt -s expand_aliases

# Use gnu-tar in mac OS
if [[ "$OSTYPE" == darwin* ]]; then
  alias tar='gtar'
fi

mkdir -p dist
rm -rf dist/*
tar --exclude='dist' --exclude='scripts' --exclude='.git' --exclude='.idea'  \
  -czf dist/googledocsredirect.tar.gz --transform 's,^,googledocsredirect/,' *

echo "Signature:"
openssl dgst -sha512 -sign ~/.nextcloud/certificates/googledocsredirect.key dist/googledocsredirect.tar.gz | openssl base64

echo -e "\nTag the commit, publish a release on GitHub and attach the tarball in ./dist."
echo -e "Then visit: https://apps.nextcloud.com/developer/apps/releases/new."
