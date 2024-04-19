import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { MessagesState } from "./messages.state";

@NgModule({
    imports: [NgxsModule.forFeature([MessagesState])]
})
export class MessageStoreModule { }