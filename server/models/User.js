const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true, // 띄어쓰기 없애줌
        unique:1
    },
    password: {
        type: String,
        maxlength:500
    },
    role:{ // 관리자 or 일반 유저
        type:Number,
        default:0,
    },
    image: String,
    token: { // 유효성 검사
        type:String,
    },
    tokenExp: { //토큰 사용 기간
        type:Number,
    }
})

userSchema.pre('save', function(next) {
    var user = this;

    if(user.isModified('password')) {
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function( err, salt ) {
            if(err) return next(err)

            bcrypt.hash(user.password , salt, function(err,hash) {
                if(err) return next(err)
                user.password = hash // 성공 시에, hash된 비밀번호로 교체 (암호화)
                next()
            });
        })
    } else {
        //비밀번호 말고 다른 것을 바꿀 때에는 그냥 next로 바로 넘어간다 ( 즉, 비밀번호 바꿀 때에만 위와 같은 암호화 작업이 필요함.)
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword,cb) {
    //plainPassword : 1234, 암호화 된 비밀번호
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
            cb(null,isMatch);
    });
};

userSchema.methods.generateToken = function(cb) {
    var user = this;
    // jsonwebtoken 을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    // user._id + 'secretToken' = token

    // ->

    // 'secretToken' -> user._id

    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    // 토큰을 decode(복호화) 한다.
    jwt.verify(token,'secretToken', function(err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음에 
        // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

        user.findOne({"_id": decoded, "token":token}, function(err, user) {
            if(err) return cb(err);
            cb(null,user)
        })
    })
}

const User = mongoose.model('User',userSchema);

module.exports = {User}