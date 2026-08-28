# SonarQube Containerized Environment

## Set Up:

1. In the codebase you intend to scan, add a sonar-project.properties file. It should look something like:

	```
	sonar.projectKey=angular-frontend-app
	sonar.projectName=Angular Frontend App

	sonar.sources=src
	sonar.exclusions=**/node_modules/**,**/*.spec.ts,**/*.test.js
	
	sonar.javascript.lcov.reportPaths=coverage/lcov.info
	```

2. Get everything in the docker compose file up and running by executing: `docker compose -f sonarqube-docker-compose.yml up -d`
3. Navigate to the Sonarqube server via `http://localhost:9000` on the host machine.
4. Login to SonarQube with the default credentials, changing the password when prompted.

	```
	username: admin
	password: admin
	```

5. Click the button to create the project manually and fill out the form. The project key must be the same within the sonar-project.properties file.
6. Click the "test locally" button.
7. Generate a token for the project and record the value.
8. Execute the following command to scan your codebase:

	```
	docker run --rm \
	--network sonarnet \
	-e SONAR_HOST_URL=http://sonarqube-server:9000 \
	-e SONAR_TOKEN={projectToken} \
	-v "$(pwd):/usr/src" \
	sonarsource/sonar-scanner-cli
	```

9. Repeat steps 5-8 for each project you intend to scan. Repeat step 8 for every scan you want to perform for an individual project.
10. Review the scan results from the browser via `http://localhost:9000`

---


## Troubleshooting

- If network the scanner could not connect to the server, confirm you are using the correct network by executing `docker network ls` to discover what the network was named.
- Step 8 assumes you're working directory is the parent directory of whatever was specified in sonar.sources within the sonar-project.properties file.
