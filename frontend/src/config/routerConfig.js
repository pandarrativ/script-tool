const host = process.env.REACT_APP_BACKEND_HOST;
// for user login/logout
export const tempUserRouter = `${host}/user/temp-user`;
export const signUpRouter = `${host}/user/signup`;
export const signInRouter = `${host}/user/signin`;


// for agent chatting
export const agentChatRouter = `${host}/script-tool/widget-chat`;

export const scriptToolTaskRouter = `${host}/script-tool/task`;
export const scriptCreationDataRouter = `${host}/script-tool/data`;
export const conversationRouter = `${host}/script-tool/conversation`;
export const initNodesDataRouter = `${host}/script-tool/init-nodes`;
