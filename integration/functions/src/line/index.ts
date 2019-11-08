import {Client, FollowEvent} from '@line/bot-sdk';
import UserService from '../services/users';

export const client = new Client({
    channelAccessToken: 'eHGmpQ7rTBqASSG7S24W1k06SH3J8vChLHOtHK4LUnu384N+8Kf4e9pfa7osScAF0n2O1LAkoicY+kRWGUAHhVEYBe4jskCfvIWkHeHqzeSaxWLn/xGADgyyKXMp7hlvVsQcmAKBm5YkOz6H1D0MyAdB04t89/1O/w1cDnyilFU=',
    channelSecret: '44ed9a52daea402139f0d978cbbafb59'
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
