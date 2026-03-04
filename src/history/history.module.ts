import { CommonModule } from "@angular/common";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { History } from "./history";

@NgModule ({
    declarations: [History],
    imports: [CommonModule, BrowserModule],
    providers: [provideHttpClient(withInterceptorsFromDi())],
    exports: [History]
})

export class HistoryModule {}