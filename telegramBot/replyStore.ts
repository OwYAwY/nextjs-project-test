type LastReply = {
  text: string;
  isReply: boolean;
};

let lastReply: LastReply | null = null;

export const setLastReplyText = (text: string, isReply = false) => {
  lastReply = { text, isReply };
};

export const getLastReplyText = () => lastReply;

export const clearLastReplyText = () => {
  lastReply = null;
};
