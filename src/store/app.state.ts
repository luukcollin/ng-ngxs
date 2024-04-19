import { State, StateContext, Action, Selector } from "@ngxs/store";
import { AppStateModel } from "./app-state.model";
import { Injectable } from "@angular/core";
import { AppActions } from "./app.actions";

@State<AppStateModel>({
    name: "app",
    defaults: {
        sessionLaunchedAt: undefined
    }
})

@Injectable()
export class AppState {
    @Selector()
    static launchedAt({sessionLaunchedAt}: AppStateModel): Date | undefined {
        return sessionLaunchedAt;
    }

    @Action(AppActions.LaunchApp)
    onLaunchApp({patchState}: StateContext<AppStateModel>, {date}: AppActions.LaunchApp){
        patchState({sessionLaunchedAt: date})
    }
}