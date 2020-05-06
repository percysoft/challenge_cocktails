# include ./Makefile.local.mk
include ./Makefile.local.mk

.DEFAULT_GOAL := help
.PHONY : resources

build-firebase:  ## Build and prepare to deploy to firebase: make build-firebase
	cd application/ && npm install && npm run build --target=production --environment=production --aot
	cd deploy/ && rm -rf dist/ && mkdir dist/
	mv application/dist/challenge-cocktail deploy/dist/

## Deploy firebase ##
deploy-firebase: ## Deploy to firebase: make deploy-firebase
	@make build-firebase
	cd deploy/ && firebase deploy

## Target Help ##
help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'



