"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var StarComponent = (function () {
    function StarComponent() {
        this.radius = 30;
        this.type = 'star';
        this.items = 5;
        this.selectedColor = '#e6a719';
        this.backColor = 'white';
        this.starBackColor = 'lightgray';
        this.percent = '0';
        this.starsSelected = 0;
        this.disabled = false;
    }
    StarComponent.prototype.ngOnInit = function () {
        // Pass attributes into app
        this.percent += '%';
        this.itemsIterable = new Array(this.items);
        this.securedWidth = this.starsSelected ? 100 / this.items * this.starsSelected + '%' : this.percent;
        // initial rating setup
        this.selectedWidth = this.securedWidth;
        //console.log("floor:" + Math.floor(this.starsSelected));
        //console.log("ceil:" + Math.ceil(this.starsSelected));
        switch (Math.ceil(this.starsSelected)) {
            case 1: {
                this.selectedColor = "#FF0000";
                break;
            }
            case 2: {
                this.selectedColor = "#A52A2A";
                break;
            }
            case 3: {
                this.selectedColor = "#FFF000";
                break;
            }
            case 4: {
                this.selectedColor = "#FFA500";
                break;
            }
            case 5: {
                this.selectedColor = "#00FF00";
                break;
            }
        }
    };
    StarComponent.prototype.changeRating = function (e) {
        this.selectedWidth = !this.disabled && e.clientX - this.elDimensions.left + 'px';
        this.percent = parseInt(this.selectedWidth, 10) / this.radius * 2 * this.items + '%';
    };
    StarComponent.prototype.leaveRating = function () {
        this.selectedWidth = this.securedWidth;
    };
    StarComponent.prototype.secureNewRating = function () {
        this.securedWidth = this.percent;
    };
    return StarComponent;
}());
__decorate([
    core_1.Input('radius'),
    __metadata("design:type", Number)
], StarComponent.prototype, "radius", void 0);
__decorate([
    core_1.Input('type'),
    __metadata("design:type", String)
], StarComponent.prototype, "type", void 0);
__decorate([
    core_1.Input('items'),
    __metadata("design:type", Number)
], StarComponent.prototype, "items", void 0);
__decorate([
    core_1.Input('sel-color'),
    __metadata("design:type", String)
], StarComponent.prototype, "selectedColor", void 0);
__decorate([
    core_1.Input('back-color'),
    __metadata("design:type", String)
], StarComponent.prototype, "backColor", void 0);
__decorate([
    core_1.Input('star-back-color'),
    __metadata("design:type", String)
], StarComponent.prototype, "starBackColor", void 0);
__decorate([
    core_1.Input('percent'),
    __metadata("design:type", String)
], StarComponent.prototype, "percent", void 0);
__decorate([
    core_1.Input('stars-selected'),
    __metadata("design:type", Number)
], StarComponent.prototype, "starsSelected", void 0);
__decorate([
    core_1.Input('disabled'),
    __metadata("design:type", Boolean)
], StarComponent.prototype, "disabled", void 0);
StarComponent = __decorate([
    core_1.Component({
        selector: 'stars',
        styles: ["\n        .stars {\n            display: inline-block;\n            position: relative;\n            z-index: 0;\n            align: right;\n        }\n\n        .stars-selected {\n            position: absolute;\n            max-width: 100%;\n            height: 100%;\n            z-index: -1;\n            align: right;\n        }\n    "],
        templateUrl: './stars.component.html'
    }),
    __metadata("design:paramtypes", [])
], StarComponent);
exports.StarComponent = StarComponent;
//# sourceMappingURL=stars.component.js.map