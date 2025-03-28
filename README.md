# BankBank
Frontend
Project MyBank uses React for the frontend.

Backend
Project MyBank uses Symfony for the backend.

How to setup Jenkins
Jenkins is used for CI (Continious Integration) to automate the server. Using docker, first install jenkins :
docker run -p 8080:8080 -p 50000:50000 --restart=on-failure jenkins/jenkins:lts-jdk17

Then log in to Jenkins and set up a pipeline job for the project. Configure its pipeline script to look for the git repo.

pipeline {
    agent any

    stages {
         stage('CI') {
            steps {
                git branch: 'main', url: 'https://github.com/katekate7/BankBank.git'
            }
        }
    }
}

Create jenkins agent for symfony
Documentation of the base image : https://hub.docker.com/r/jenkins/inbound-agent

docker build . -t <your_image_name>

docker run --name <your_container_name> --init <your_image_name> -url http://<IPAdresse_of_jenkins_master>:8080 <node_name>

To get the <IPAdresse_of_jenkins_master>, make this command : docker inspect jenkins_master_container

and <node_name> are given by the jenkins_master when you create a node

Setup Jenkins Agent
First get the IP Address of the Jenkins container. Run this command :

docker inspect <name_of_the_jenkins_container>
From that IP, run this command so the agent run automated tasks :

docker run --init jenkins/inbound-agent -url http://<jenkins_container_ipaddress>:8080 -workDir=/home/jenkins/agent <agent_secret_key> <agent_name>
Modify the pipeline script :

pipeline {
    agent {
        node {
            label '<agent_name>'
        }
    }

    stages {
        stage('CI') {
            steps {
                git 'https://github.com/katekate7/BankBank.git'
            }
        }
    }
}
How to Setup NGROK
Install ngrok via Homebrew with the following command:

Copy code
brew install ngrok
Configure and run
Add your authtoken:

Don’t have an authtoken? Sign up for a free account.

Copy code
ngrok config add-authtoken <token>
Start an endpoint:

Copy code
ngrok http 80
Congratulations, you have an endpoint online!

ngrok http http://localhost:8080
How to Setup Github so it can communicate with Jenkins
Once Jenkins and NGROK are setup, go to the project repo > Settings > Webhooks. Create a new Webhook and put the link you get from NGROK into your Payload URL as follow :

<website_url_from_ngrok>/github-webhook/


docker run --name jenkins-agent-composer-mybank --init jenkins_agent_symfony -url 172.17.0.2:8080 f4e1dd648ef89f5de3c004dd636be818fe8f14fe5a520533e5b34fae15ad29d1 jenkins-agent-composer-mybank