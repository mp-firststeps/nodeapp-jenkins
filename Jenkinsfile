pipeline {
  agent any
  stages {
    stage('Env') {
      steps {
        sh 'echo $TEST_VAR'
      }
    }

  }
  environment {
    TEST_VAR = $(git rev-parse HEAD)
  }
}