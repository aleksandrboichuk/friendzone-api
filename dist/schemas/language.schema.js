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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSchema = exports.Language = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Language = class Language {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Language Name", example: "English" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Language.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Language.prototype, "createdAt", void 0);
Language = __decorate([
    (0, mongoose_1.Schema)()
], Language);
exports.Language = Language;
exports.LanguageSchema = mongoose_1.SchemaFactory.createForClass(Language);
//# sourceMappingURL=language.schema.js.map