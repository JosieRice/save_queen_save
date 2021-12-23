# save_queen_save

Automated notifications when something on your watch list goes on sale.

## TODO

2. setup a loading context and a loading component
3. make a reusable button component
4. build out some frontend interface to add to your watch list and edit it
5. setup database to save a users watch list info
6. research chron-jobs and cloud function options for running web scrapers to look for deals
7. write a web scraper for checking for sales
8. setup an automated notification process (email or text or either?)
9. test it out a bit and re-evaluate what you need

## Dev Notes

### Current URL

https://save-queen-save.firebaseapp.com/

### Project Console

https://console.firebase.google.com/u/0/project/save-queen-save/overview

### Required for deployments

1. Install Firebase CLI tools `npm install -g firebase-tools`
2. Login to Firebase CLI `firebase login` (must be josies account)
3. Deploy to Firebase Hosting `firebase deploy --only hosting` (note this is deploying from my local files)
   - upgrade to be able to deploy cloud functions possibly

### Deploy Process

1. `cd my-app`
2. `npm run build`
3. `firebase deploy --only hosting`

### Firebase Emulators

- auth emulator: 9099
- functions emulator: 5001
- firestore emulator: 8080
- database emulator: 9000
- hosting emulator: 5000
- pubsub emulator: 8085
- storage emulator: 9199
