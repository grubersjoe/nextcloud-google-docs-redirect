.PHONY: format
format:
	prettier --write --single-quote --prose-wrap=always js/**/* README.md
release:
	scripts/create-release.sh
