import { HydratedDocument } from "mongoose";
import * as mongoose from "mongoose";
import { Language } from "./language.schema";
import { Hobby } from "./hobby.schema";
export type UserDocument = HydratedDocument<User>;
export declare class User {
    email: String;
    password: String;
    firstName: String;
    lastNme: String;
    phone: String;
    location: [
        {
            country: String;
            city: String;
            latitude?: Number;
            longitude?: Number;
            accuracy?: Number;
        }
    ];
    pictures: String[];
    socialMedia: String[];
    description: String;
    settings: [
        {
            isDarkModeForced: Boolean;
        }
    ];
    createdAt: Date;
    language: Language;
    hobby: Hobby;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & Omit<User & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
