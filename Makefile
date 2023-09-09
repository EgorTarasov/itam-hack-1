stop:
	docker compose -f docker/docker-compose.yaml down
	rm -r docker/docker

debug:
	docker compose -f docker/docker-compose.yaml up db --build -d
	python3 main.py

deploy:
	docker compose -f docker/docker-compose.yaml up --build -d
