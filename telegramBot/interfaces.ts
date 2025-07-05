import { MessageContext } from "puregram";
export interface CommandContext extends MessageContext {
  dataMiddlewares: {
    isCommand: boolean;
    isButton: boolean;
  };
}
