"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModule = void 0;
const common_1 = require("@nestjs/common");
const language_service_1 = require("./language.service");
const mongoose_1 = require("@nestjs/mongoose");
const language_schema_1 = require("../schemas/language.schema");
let LanguageModule = class LanguageModule {
};
LanguageModule = __decorate([
    (0, common_1.Module)({
        providers: [language_service_1.LanguageService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: language_schema_1.Language.name, schema: language_schema_1.LanguageSchema }])
        ]
    })
], LanguageModule);
exports.LanguageModule = LanguageModule;
//# sourceMappingURL=language.module.js.map