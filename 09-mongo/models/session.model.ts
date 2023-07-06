import mongoose, {Model, Schema} from "mongoose";
import {User} from "./user.model";

export interface Session {
    _id?: string;
    platform?: string;
    user: string | User; // soit l'id du l'utilisateur (string) soit l'utilisateur complet directement
}

const sessionSchema = new Schema<Session>({
    platform: {
        type: Schema.Types.String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // correspond au nom du model dans user.model
        required: true
    }
}, {
    collection: 'sessions',
    versionKey: false // si c'est actif __v dans tous les documents pour connaitre la version du document
});

export const SessionModel: Model<Session> = mongoose.model('Session', sessionSchema);
