# SonarQube Containerized Environment

## Set Up:

1. In the codebase you intend to scan, add a sonar-project.properties file. It should look something like:

	> sonar.projectKey=angular-frontend-app
	> sonar.projectName=Angular Frontend App
	>
	> sonar.sources=src
	> sonar.exclusions=**/node_modules/**,**/*.spec.ts,**/*.test.js
	>
	> sonar.javascript.lcov.reportPaths=coverage/lcov.info

2. Get everything in the docker compose file up and running by executing:
	`docker compose up -d`

