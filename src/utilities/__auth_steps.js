/**
 * 1. create a new project in console.firebase.google.com
 * 2. npm install firebase
 * 3. create firebase.init.js and import getAuth to export auth
 * 4. go to  Firebase settings> Authentication > enable Email and Password Auth
 * 5. Create Login, SignUp component,setup route
 * 6. attach form field handler and form submit handler
 * 7. npm install --save react-firebase-hooks
 * 8.  useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9. if user is created then redirect to the expected page
 * 10. useSignInWithEmailAndPassword for Login
 * 11. Create RequireAuth component ==> check user exists also track user location
 * 12. In route wrap Protected Component by using RequireAuth component
 */

/**
 * Firebase hosting steps
 * 1. npm install -g firebase-tools (one time for your computer)
 * 2. firebase login (one time for your computer)
 * 3. firebase init (one time for each project)
 * 4. npm run build (everytime you want to deploy)
 * 5. firebase deploy (everytime you want to deploy)
 */
