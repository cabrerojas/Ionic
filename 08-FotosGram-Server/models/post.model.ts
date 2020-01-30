


import { Schema, model, Document } from "mongoose"

const postSchema = new Schema({

    created: {
        type: Date,
    },
    mensaje: {
        type: String
    },
    imgs: [{
        type: String
    }],
    coords: {
        type: String // -13.345345, 12.43534534
    }, 
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Debe de existir una referencia a un usuario']
    }

});

postSchema.pre<Ipost>('save', function(next) {
    this.created = new Date();
    next();
});


interface Ipost extends Document{
    created: Date;
    mensaje: string;
    img: string[];
    coords: string;
    usuario: string;
}


export const Post = model<Ipost>('Post', postSchema);