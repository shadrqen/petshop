import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

/*
  setupFiles / setupFilesAfterEnv
  setupFiles is a list of modules that will be run once before each test file and before the testing framework is
  installed.

  setupFilesAfterEnv is a list of modules that will be run once before each test file but after the testing framework
  is installed in the environment.

  Usually setupFilesAfterEnv is the right place for any setup code that should run before each test file. Only use
  setupFiles if you have a specific reason for needing the code to run before the testing framework is installed.

  You can think of setupFilesAfterEnv as a global beforeAll.

  If something must be done at the beginning of every test file (for example: configuring the Enzyme adapter), it
  makes sense to do it once in a setupFilesAfterEnv file.
 */
