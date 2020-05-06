.DEFAULT_GOAL := help
.PHONY : resources

image: ## Construir la imagen de node: make image
	docker build -t "image_frontend_angular/node:12.14.1" container/node

install: ## Instalar dependencias: make install
	COMMAND='npm run install' docker-compose -f container/docker-compose.yml up

start: ## Levantar el prooyecto en el puerto 4200: make start
	COMMAND='npm run start' docker-compose -f container/docker-compose.yml up

build: ## Construir el compilado para produccion: make buildProduction
	COMMAND='npm run build --prod' docker-compose  -f container/docker-compose.yml up

test: ## Test Unitarios Frontend: make test
	COMMAND='npm test' docker-compose -f container/docker-compose.yml up

## Target Help ##
help:
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help" "Usage"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
