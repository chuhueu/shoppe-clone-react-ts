import { Response } from "express";
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
const generateToken = require("../utils/generateToken");
const User = require("../models/userModel");
import { IMongoDBUser } from "../types";

passport.serializeUser((user: IMongoDBUser, done: any) => {
  return done(null, user._id);
});

passport.deserializeUser((id: string, done: any) => {
  User.findById(id, (err: Error, doc: IMongoDBUser) => {
    return done(null, doc);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
      User.findOne(
        { googleID: profile.id },
        async (err: Error, doc: IMongoDBUser, res: Response) => {
          if (err) {
            return cb(err, null);
          }
          if (!doc) {
            const newUser = new User({
              googleID: profile.id,
              username: profile.displayName,
              email: profile.emails[0].value,
              avatar: profile.photos[0].value,
            });
            await newUser.save();
            cb(null, newUser);
          }
          cb(null, doc);
        }
      );
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/api/auth/facebook/callback",
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
      User.findOne(
        { facebookID: profile.id },
        async (err: Error, doc: IMongoDBUser) => {
          if (err) {
            return cb(err, null);
          }

          if (!doc) {
            const newUser = new User({
              facebookID: profile.id,
              username: profile.displayName,
            });
            await newUser.save();
            cb(null, newUser);
          }
          cb(null, doc);
        }
      );
    }
  )
);
