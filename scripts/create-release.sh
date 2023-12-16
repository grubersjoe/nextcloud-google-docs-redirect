#!/usr/bin/env bash
set -e
shopt -s expand_aliases

make format

# Use gnu-tar in mac OS
if [[ "$OSTYPE" == darwin* ]]; then
  alias tar='gtar'
else
  echo "nope"
fi

mkdir -p dist
rm -f dist/*
tar --exclude='dist' --exclude='.git' --exclude='.idea' \
  -czf dist/googledocsredirect.tar.gz --transform 's,^,googledocsredirect/,' *

echo "Signature:"
openssl dgst -sha512 -sign ~/.nextcloud/certificates/googledocsredirect.key dist/googledocsredirect.tar.gz | openssl base64

echo -e "\nTag the commit and publish a release on GitHub"
echo -e "Then visit: https://apps.nextcloud.com/developer/apps/releases/new"
