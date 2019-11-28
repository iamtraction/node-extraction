all: clean lint transpile

clean:
	@echo "Cleaning previous build..."
	@rm -rf ./dist ./typings
	@echo

lint:
	@echo "Linting codebase..."
	@./node_modules/.bin/eslint .
	@echo

transpile:
	@echo "Transpiling TypeScript into JavaScript..."
	./node_modules/.bin/tsc
	@echo
