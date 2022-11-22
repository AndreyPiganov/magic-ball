install:
	npm ci
magic-ball:
	node magic_ball.js
publish:
	npm publish --dry-run
lint:
	npx eslint . 