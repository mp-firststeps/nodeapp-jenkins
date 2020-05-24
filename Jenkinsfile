pipeline {
  agent any
  stages {
    stage('Env') {
      steps {
        sh echo $TEST_VAR
      }
    }

  }
  environment {
    TEST_VAR = $GIT_COMMIT
  }
}