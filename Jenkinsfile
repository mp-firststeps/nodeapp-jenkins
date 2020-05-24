pipeline {
  agent any
  stages {

    stage('Env') {
      steps {
        sh 'printenv'
      }
    }

  }
  environment {
    TEST_VAR = 'myVar'
  }
}