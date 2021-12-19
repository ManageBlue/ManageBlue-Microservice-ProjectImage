const mongoose = require('mongoose');
let Schema = mongoose.Schema;


// Models --------------------------------------------------------------------------------------------------------------

const projectImage = new Schema({
    imageUrl: {type: String, maxlength: 1024, required: true},
    project: {type: Schema.Types.ObjectId, ref: 'Project', required: true}
},
    {
        timestamps: true
    });


mongoose.model('Project-Image', projectImage);
