const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyCxGQEn5V1ZKkLgFLs-cOjX4ZjbzocUGtE",
    authDomain: "xumes-portfolio.firebaseapp.com",
    databaseURL: "https://xumes-portfolio.firebaseio.com",
    projectId: "xumes-portfolio",
    storageBucket: "xumes-portfolio.appspot.com",
    messagingSenderId: "239276036295"
  }
 

  const app =  firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const auth = app.auth()

  export default config