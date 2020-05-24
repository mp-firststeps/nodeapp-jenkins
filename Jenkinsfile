pipeline {
  agent any
  stages {
    stage('Env') {
      steps {
        sh printenv
      }
    }

  }
  environment {
    IMAGE = 'test'
  }
}