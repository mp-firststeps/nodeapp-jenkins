pipeline {
  agent none
  environment {
    TEST_VAR = 'myVar'
  }
  stages {
    stage('Build') {
      agent any
      steps {
        sh echo $TEST_VAR
        sh 'docker build -t $(TEST_VAR):latest -t $(TEST_VAR):$(TEST_VAR) .'
        withDockerRegistry([ credentialsId: "docker-credentials"]) {
          sh 'docker push $(TEST_VAR):$(TEST_VAR)'
        }

      }
    }

  }
}