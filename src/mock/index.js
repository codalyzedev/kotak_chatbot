export const conversations = [
    {
        step: 0,
        user: 'bot',
        message: `Hey ! I'm Bella the bot. \n Let's get to know each other! :)`,
        path: 'src/assets/bella-profile.png',
        responseType: 'none'

    },
    {
        step: 1,
        user: 'bot',
        message: `What's your name ?`,
        path: 'src/assets/bella-profile.png',
        responseType: 'text'
    },
    {
        step: 2,
        user: 'user',
        message: '',
        path: ''
    },
    {
        step: 3,
        user: 'bot',
        message: `Nice to meet you, Jane! How old are you ?`,
        path: 'src/assets/bella-profile.png',
        responseType: 'number'
    },
    {
        step: 4,
        user: 'user',
        message: '',
        path: ''
    },
    {
        step: 5,
        user: 'bot',
        message: `I talk to people for a living.`,
        path: 'src/assets/bella-profile.png',
        responseType: 'none'
    },
    {
        step: 6,
        user: 'bot',
        message: `What do you do?`,
        path: 'src/assets/bella-profile.png',
        responseType: 'dropdown'
    },
    {
        step: 7,
        user: 'user',
        message: '',
        path: ''
    },
    {
        step: 8,
        user: 'bot',
        message: `Thanks! That's all i need`,
        path: 'src/assets/bella-profile.png',
        responseType: 'complete'
    },
];