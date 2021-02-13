export const conversations = [
    {
        step: 1,
        user: 'bot',
        message: `Hey ! I'm Bella the bot. \n Let's get to know each other! :)`,
        path: 'src/assets/bella-profile.png',
        responseType: 'none'

    },
    {
        step: 2,
        user: 'bot',
        message: `What's your name ?`,
        path: 'src/assets/bella-profile.png',
        responseType: 'text'
    },
    {
        step: 3,
        user: 'user',
        message: '',
        path: ''
    },
    {
        step: 4,
        user: 'bot',
        message: `Nice to meet you, Jane! How old are you ?`,
        path: 'src/assets/bella-profile.png',
        responseType: 'number'
    },
    {
        step: 5,
        user: 'user',
        message: '',
        path: ''
    },
    {
        step: 6,
        user: 'bot',
        message: `I talk to people for a living.`,
        path: 'src/assets/bella-profile.png',
        responseType: 'none'
    },
    {
        step: 7,
        user: 'bot',
        message: `What do you do?`,
        path: 'src/assets/bella-profile.png',
        responseType: 'dropdown'
    },
    {
        step: 8,
        user: 'user',
        message: '',
        path: ''
    },
    {
        step: 9,
        user: 'bot',
        message: `Thanks! That's all i need`,
        path: 'src/assets/bella-profile.png',
        responseType: 'complete'
    },
];