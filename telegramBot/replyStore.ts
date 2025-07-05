// telegramBot/replyStore.ts

let lastReply: { text: string; isReply: boolean } | null = null;

export const setLastReplyText = (text: string, isReply = false) => {
  lastReply = { text, isReply };
};

export const getLastReplyText = () => {
  return lastReply;
};

export const clearLastReply = () => {
  lastReply = null;
};
