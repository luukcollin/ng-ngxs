import { State, Action, StateContext, Selector } from "@ngxs/store";
import { MessagesStateModel } from "./messages-state.model";
import { Injectable } from "@angular/core";
import { MessagesActions } from "./messages.actions";
import { Message } from "../../app/models/message";

@State<MessagesStateModel>({
    name: "messages",
    defaults: {
        allMessages: [],
        selectedMessage: undefined
    }
})

@Injectable()
export class MessagesState {
    @Selector()
    static allMessages({ allMessages }: MessagesStateModel): Message[] {
        return allMessages;
    }
    @Selector()
    static getSelectedMessage({ selectedMessage }: MessagesStateModel): Message | undefined {
        return selectedMessage;
    }

    @Action(MessagesActions.SetAllMessages)
    onSetAllMessages({ patchState }: StateContext<MessagesStateModel>, { allMessages }: MessagesActions.SetAllMessages) {
        patchState({ allMessages })
    }

    @Action(MessagesActions.SelectMessage)
    onSelectMessage({ getState, patchState }: StateContext<MessagesStateModel>, { message }: MessagesActions.SelectMessage) {
        const { selectedMessage } = getState();
        const updatedSelectedMessage = selectedMessage === message ? undefined : message;
        patchState({ selectedMessage: updatedSelectedMessage })
    }
}