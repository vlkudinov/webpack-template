install:
	npm install

run:
	npm run start

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npm run eslint .

