import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { config } from '../config/config';
// import { seedDatabase } from '../seed';






const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase }







