import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import UserModel from '../models/userModel.js'; 
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';
dotenv.config();

const userModel = new UserModel();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

export default (passport) => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done) => {
            try {
                const collection = await userModel.connect();
                const user = await collection.findOne({ _id: new ObjectId(jwt_payload.id) });

                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (err) {
                return done(err, false);
            }
        })
    );
};