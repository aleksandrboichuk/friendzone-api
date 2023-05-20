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
exports.UserSchema = exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const language_schema_1 = require("./language.schema");
const hobby_schema_1 = require("./hobby.schema");
let User = class User {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User Email",
        example: "example@mail.com"
    }),
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User Password",
        example: "12345"
    }),
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User First Name",
        example: "John"
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User Last Name",
        example: "Johnson"
    }),
    __metadata("design:type", String)
], User.prototype, "lastNme", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User Phone",
        example: "38099123456"
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User Location Object", example: {
            country: "Ukraine",
            city: "Kyiv",
            latitude: 6.5568768,
            longitude: 3.3488896,
            accuracy: 7173.528443511279
        } }),
    __metadata("design:type", Array)
], User.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User Pictures Array",
        example: ['123.jpg', '321.jpg']
    }),
    __metadata("design:type", Array)
], User.prototype, "pictures", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User Social Media Links Array",
        example: ['https://www.instagram.com/', 'https://facebook.com/']
    }),
    __metadata("design:type", Array)
], User.prototype, "socialMedia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User Description",
        example: "My name is John. I am from Kyiv, Ukraine"
    }),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User Settings",
        example: { isDarkModeForced: true }
    }),
    __metadata("design:type", Array)
], User.prototype, "settings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Language' }),
    __metadata("design:type", language_schema_1.Language)
], User.prototype, "language", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Hobby' }),
    __metadata("design:type", hobby_schema_1.Hobby)
], User.prototype, "hobby", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map