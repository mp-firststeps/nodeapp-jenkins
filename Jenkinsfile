pipeline {
  agent none
  stages {
    stage('Build') {
      agent any
      environment {
        TEST_VAR = 'test'
      }
      steps {
        sh 'docker build -t $(TEST_VAR):latest -t $(TEST_VAR):$(TEST_VAR) .'
      }
    }

  }
  environment {
    TEST_VAR = 'myVar'
  }
}