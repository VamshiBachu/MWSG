// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  analytics: {
    trackingId: 'UA-255878-12'
  },
  firebase: {
    apiKey: "AIzaSyBvSYEHO1LrtUIjdYCHPn7rbGbSWw-zZcw",
    authDomain: "mwsg-61c68.firebaseapp.com",
    databaseURL: "https://mwsg-61c68.firebaseio.com",
    projectId: "mwsg-61c68",
    storageBucket: "mwsg-61c68.appspot.com",
    messagingSenderId: "143301161948"
}
};
