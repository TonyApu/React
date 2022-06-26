const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "567607897744-3c0eo7u5hqudqam7mfagc5jslievc71u.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "1b506e0de78517592ee0";
const GITHUB_CLIENT_SECRET = "87d82cb693202988a139829b9ba8d8f10340df24";

const FACEBOOK_CLIENT_ID = "4506627316070902";
const FACEBOOK_CLIENT_SECRET = "e6160dca3cfe75049d991247d015da86";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
