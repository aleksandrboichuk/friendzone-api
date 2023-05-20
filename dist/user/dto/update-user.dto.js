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
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User First Name", example: "John" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User Last Name", example: "Johnson" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User Phone", example: "38099123456" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User Description", example: "My name is John. I am from Kyiv, Ukraine" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Location Object", example: {
            country: "Ukraine",
            city: "Kyiv",
            latitude: "6.5568768",
            longitude: "3.3488896",
            accuracy: "7173.528443511279",
        }
    }),
    __metadata("design:type", Object)
], UpdateUserDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User Settings", example: { isDarkModeForced: true } }),
    __metadata("design:type", Object)
], UpdateUserDto.prototype, "settings", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map