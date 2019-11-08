import {firestore} from '../firebase';
import {IUser} from "./interface";
import { CollectionReference } from '@google-cloud/firestore';


export default class UserService {

    private userRef: CollectionReference;

    constructor() {
        this.userRef = firestore.collection('users');
    }

    async saveNewUser(user: IUser) {
        try {
            await this.userRef.doc(user.userId).set({
                ...user
            });
        } catch (e) {
            console.log(e);
        }
    }
}
