run:
	docker run -p 3000:3000 frontend-test-leadster

build:
	docker build -t frontend-test-leadster .

cy:
	npm run cy:open

dev:
	npm run dev