"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_service_1 = require("./hero.service");
var star_selector_component_1 = require("./star-selector.component");
var stars_component_1 = require("./stars.component");
var star_component_1 = require("./star.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot([
                {
                    path: 'heroes',
                    component: heroes_component_1.HeroesComponent
                },
                {
                    path: 'details/:id',
                    component: hero_detail_component_1.HeroDetailComponent
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                }
            ])
        ],
        declarations: [app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            star_selector_component_1.FormComponent,
            star_component_1.StarItemComponent,
            stars_component_1.StarComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [hero_service_1.HeroService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map