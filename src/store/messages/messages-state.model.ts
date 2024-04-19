import { Message } from "../../app/models/message";

export interface MessagesStateModel {
    allMessages: Message[];
    selectedMessage?: Message;
}