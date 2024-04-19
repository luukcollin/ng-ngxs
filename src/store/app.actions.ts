export namespace AppActions {
    export class LaunchApp {
        static readonly type = "[AppActions] LaunchApp";

        constructor(public date: Date) { }
    }
}