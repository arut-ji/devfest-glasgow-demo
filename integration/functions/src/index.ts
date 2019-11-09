import * as functions from 'firebase-functions';
import {followEventHandler} from './line';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(async (request, response) => {
    // response.send("Hello from Nextzy!");
    const {events: [event,]} = request.body;
    const {
        type
    } = event;

    if (type === 'follow') {
        await followEventHandler(event);
    }
    response.status(200);
    response.send({})
});

// export const buildNotifier = functions.pubsub.topic('projects/gcp-kitchen-sink/topics/cloud-builds').onPublish((message, context) => {
//
// });
