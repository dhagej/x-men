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
var StarItemComponent = (function () {
    function StarItemComponent(myElement) {
        this.root = myElement;
    }
    // Entry point for item drawing
    StarItemComponent.prototype.drawItem = function (type, ctx, r) {
        return typeof this[type] === 'function' ? this[type](ctx, r) : this.star(ctx, r);
    };
    // Draw star image
    StarItemComponent.prototype.star = function (ctx, r) {
        if (!ctx)
            throw Error('No Canvas context found!');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.translate(r, r);
        ctx.moveTo(0, 0 - r);
        for (var i = 0; i < 5; i++) {
            ctx.rotate(Math.PI / 5);
            ctx.lineTo(0, 0 - (r * 0.5));
            ctx.rotate(Math.PI / 5);
            ctx.lineTo(0, 0 - r);
        }
        ctx.fill();
        ctx.restore();
    };
    // Draw circle image
    StarItemComponent.prototype.circle = function (ctx, r) {
        if (!ctx)
            throw Error('No Canvas context found!');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(r, r, r, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.restore();
    };
    // Draw main canvas area
    StarItemComponent.prototype.drawRect = function (ctx, dim, backColor) {
        if (!ctx)
            throw Error('No Canvas context found!');
        ctx.save();
        ctx.fillStyle = backColor;
        ctx.fillRect(0, 0, dim, dim);
        ctx.restore();
    };
    StarItemComponent.prototype.rate = function (selectedStar) {
        console.log("rate()");
        console.log(selectedStar);
    };
    // Hook: draw canvas image on the template rendered
    StarItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var el = _this.root.nativeElement.querySelector('.star');
            var ctx = el.getContext("2d");
            _this.drawRect(ctx, _this.radius * 2, _this.backColor);
            _this.drawItem(_this.type, ctx, _this.radius);
        });
    };
    return StarItemComponent;
}());
StarItemComponent = __decorate([
    core_1.Component({
        selector: 'star-item',
        inputs: ['radius', 'type', 'backColor', 'index'],
        styles: ["\n            canvas.star {\n                float: left;\n            }       \n        "],
        templateUrl: './star.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], StarItemComponent);
exports.StarItemComponent = StarItemComponent;
//# sourceMappingURL=star.component.js.map