.PHONY: format
format:
	prettier --write --single-quote --prose-wrap=always js/**/* README.md
release:
	make format
	scripts/create-release.sh
