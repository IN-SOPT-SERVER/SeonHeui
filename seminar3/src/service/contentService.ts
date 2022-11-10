const content = require('../database/data.json');

const getContentInfo = async (contentId: string) => {
    return content[contentId];
}

export { getContentInfo }