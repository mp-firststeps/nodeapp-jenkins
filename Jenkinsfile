pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      environment {
        TEST_VAR = 'test'
      }
      steps {
        echo 'HI'
      }
    }

  }
  environment {
    TEST_VAR = 'myVar'
  }
}