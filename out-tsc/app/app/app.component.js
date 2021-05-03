import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Inventory-System';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        template: `
            <!-- header -->
            <app-header></app-header>
            <!-- routes get injected here -->
            <router-outlet></router-outlet>
            <!-- footer -->
            <app-footer></app-footer>
        `,
        styles: []
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
