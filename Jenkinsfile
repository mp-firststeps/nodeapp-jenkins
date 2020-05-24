pipeline {
  agent none
  environment {
    TEST_VAR = 'myVar'
  }
  stages {
    stage('Build') {
      agent any
      steps {
        sh 'docker build -t $(TEST_VAR):latest -t $(TEST_VAR):$(TEST_VAR) .'
      }
    }

  }
}