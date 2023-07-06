import mongoose from 'mongoose'
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter your email"],
        minLength: [6, "Your password must be at least 6 characters long"],
        select: false, //dont send back password after request
    },
    role: {
        type: String,
        default: 'user',
        enum: {
            values: [
                'user',
                'admin'
            ],
        }
    },
},
{timestamps: true}
)

// ENCRYPTION 

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
       const salt = await bcrypt.genSalt(10);
       this.password = await bcrypt.hash(this.password as string, salt);
    }
    // this.password = await bcrypt.hash(this.password, 10)
    next();
})

userSchema.methods.comparePassword = async function(enteredPassword: string){
    return await bcrypt.compare(enteredPassword, this.password);
}


export default mongoose.models.User || mongoose.model('User', userSchema)