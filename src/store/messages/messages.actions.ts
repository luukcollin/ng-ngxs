import { Message } from "../../app/models/message";

export namespace MessagesActions {
    export class SelectMessage {
        static readonly type = "[MessageActions] selectMessage";

        constructor(public message: Message) { }
    }

    export class SetAllMessages {
        static readonly type = "[MessageActions] setAllMessages";

        constructor(public allMessages: Message[]) { }
    }
}