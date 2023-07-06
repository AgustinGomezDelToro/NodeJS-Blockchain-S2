import mongoose, {Model, Schema} from "mongoose";

export interface User {
    _id?: string;
    login: string;
    password: string;
}

const userSchema = new Schema<User>({
    login: {
        type: Schema.Types.String,
        unique: true, // il ne peut pas avoir 2 users avec le meme login
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    }
}, {
    collection: 'users',
    versionKey: false // si c'est actif __v dans tous les documents pour connaitre la version du document
});

export const UserModel: Model<User> = mongoose.model('User', userSchema);