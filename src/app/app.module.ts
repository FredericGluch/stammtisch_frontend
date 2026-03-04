import { NgModule } from "@angular/core";
import { App } from "./app";
import { RatingModule } from "../rating/rating.module";
import { HistoryModule } from "../history/history.module";

@NgModule ({
    declarations: [App],
    imports: [RatingModule, HistoryModule],
})

export class AppModule {}
