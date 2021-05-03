import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnglishWordsComponent } from "./EnglishWords/English-Words.component";
import { HomeComponent } from "./home/home.component";
const routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'English',
        component: EnglishWordsComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map