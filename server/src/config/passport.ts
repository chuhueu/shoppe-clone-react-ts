const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/userModel");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
      User.findOrCreate(
        {
          googleID: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
        },
        (err: any, user: any) => {
          return cb(err, user);
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
      User.findOrCreate(
        {
          facebookID: profile.id,
          username: profile.displayName,
        },
        (err: any, user: any) => {
          return cb(err, user);
        }
      );
    }
  )
);

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser((id: Object, done: any) => {
  User.findById(id).then((user: any) => {
    done(null, user);
  });
});
