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

    stage('Env') {
      steps {
        sh 'echo $TEST_VAR'
      }
    }

  }
  environment {
    TEST_VAR = 'myVar'
  }
}