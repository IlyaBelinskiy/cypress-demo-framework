pipeline {

    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'Enter the specs path that you want to execute')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Choose the browser where you want to execute your specs')
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the application'
            }
        }
        stage('Test') {
            steps {
                bat 'npm install --force'
                bat 'npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy the application'
            }
        }
    
    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress\\report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
    
    }
}