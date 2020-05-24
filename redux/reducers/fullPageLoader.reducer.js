export default function fullPageLoader(fullPageLoader = false, action) {
    switch(action.type) {
        case 'SHOW_FULLPAGE_LOADER':
            console.log('SHOW_FULLPAGE_LOADER called');
            return action.payload;
        default:
            return fullPageLoader;
    }
}