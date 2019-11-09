import {Client, FollowEvent} from '@line/bot-sdk';
import UserService from '../services/users';

export const client = new Client({
    channelAccessToken: '',
    channelSecret: ''
});

export const followEventHandler = async (event: FollowEvent) => {
    const {
        source: {
            userId = null
        }
    } = event;
    if(!!userId) {
        const profile = await client.getProfile(userId);
        try {
            await (new UserService()).saveNewUser({
                ...profile
            });
            await client.replyMessage(event.replyToken, {
                type: 'text',
                text: "Cloud Build is ready to serve."
            })
        } catch (e) {
            await client.replyMessage(event.replyToken, {
                type: 'text',
                text: "Something went wrong"
            })
        }
    }
};
