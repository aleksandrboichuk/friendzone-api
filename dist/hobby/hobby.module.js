"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HobbyModule = void 0;
const common_1 = require("@nestjs/common");
const hobby_service_1 = require("./hobby.service");
const mongoose_1 = require("@nestjs/mongoose");
const hobby_schema_1 = require("../schemas/hobby.schema");
let HobbyModule = class HobbyModule {
};
HobbyModule = __decorate([
    (0, common_1.Module)({
        providers: [hobby_service_1.HobbyService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: hobby_schema_1.Hobby.name, schema: hobby_schema_1.HobbySchema }])
        ]
    })
], HobbyModule);
exports.HobbyModule = HobbyModule;
//# sourceMappingURL=hobby.module.js.map