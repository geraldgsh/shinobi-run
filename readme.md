$ yarn init
yarn init v1.21.1
question name (shinobi-run):
question version (1.0.0):
question description: Endless running platform game
question entry point (index.js):
question repository url (https://github.com/geraldgsh/shinobi-run.git):
question author: Gerald Goh
question license (MIT):
question private:
success Saved package.json
Done in 20.46s.

$ yarn add --dev webpack webpack-cli     
yarn add v1.21.1
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.11: The platform "linux" is incompatible with this module.
info "fsevents@1.2.11" is an optional dependency and failed compatibility check. Excluding it from installation.        [3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 256 new dependencies.
info Direct dependencies
├─ webpack-cli@3.3.11
└─ webpack@4.42.0
info All dependencies
├─ @webassemblyjs/floating-point-hex-parser@1.8.5
.
.
.
└─ yargs@13.2.4
Done in 9.28s.

$ yarn add -D @babel/cli @babel/core @babel/preset-env babel-loader@latest
yarn add v1.21.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.11: The platform "linux" is incompatible with this module.
info "fsevents@1.2.11" is an optional dependency and failed compatibility check. Excluding it from installation.        [3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 88 new dependencies.
info Direct dependencies
├─ @babel/cli@7.8.4
├─ @babel/core@7.8.7
├─ @babel/preset-env@7.8.7
└─ babel-loader@8.0.6
info All dependencies
├─ @babel/cli@7.8.4
├─ @babel/core@7.8.7
.
.
└─ unicode-property-aliases-ecmascript@1.1.0
Done in 8.99s.

** reference note: https://github.com/babel/babel/issues/8599

$ yarn add phaser@latest
yarn add v1.21.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.11: The platform "linux" is incompatible with this module.
info "fsevents@1.2.11" is an optional dependency and failed compatibility check. Excluding it from installation.        [3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 6 new dependencies.
info Direct dependencies
└─ phaser@3.22.0
info All dependencies
├─ eventemitter3@3.1.2
├─ exports-loader@0.7.0
├─ imports-loader@0.8.0
├─ path@0.12.7
├─ phaser@3.22.0
└─ util@0.10.4
Done in 5.01s.

$ yarn run webpack
yarn run v1.21.1
$ /mnt/d/Google_Drive/Microverse/5.Javascript/7.phaser/shinobi-run/node_modules/.bin/webpack
Hash: 1175d49544ac8351d3a3
Version: webpack 4.42.0
Time: 876ms
Built at: 03/13/2020 1:35:30 AM
  Asset      Size  Chunks             Chunk Names
main.js  3.91 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 141 bytes {main} [built]
Done in 1.83s.

$ yarn add -D webpack-dev-server@latest
yarn add v1.21.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.11: The platform "linux" is incompatible with this module.
info "fsevents@1.2.11" is an optional dependency and failed compatibility check. Excluding it from installation.        [3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 120 new dependencies.
info Direct dependencies
└─ webpack-dev-server@3.10.3
info All dependencies
├─ @types/events@3.0.0
.
.
└─ yargs@12.0.5
Done in 6.43s.

$ yarn run webpack-dev-server
yarn run v1.21.1
ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /mnt/d/Google_Drive/Microverse/5.Javascript/7.phaser/shinobi-run/dist  ℹ ｢wdm｣: Hash: c661e8c8570e49a8cd73
Version: webpack 4.42.0
Time: 1021ms
Built at: 03/13/2020 1:45:52 AM
  Asset     Size  Chunks             Chunk Names
main.js  360 KiB    main  [emitted]  main
Entrypoint main = main.js
[0] multi (webpack)-dev-server/client?http://localhost:8080 ./src/index.js 40 bytes {main} [built]
[./node_modules/ansi-html/index.js] 4.16 KiB {main} [built]
[./node_modules/ansi-regex/index.js] 135 bytes {main} [built]
[./node_modules/html-entities/index.js] 231 bytes {main} [built]
[./node_modules/loglevel/lib/loglevel.js] 8.41 KiB {main} [built]
[./node_modules/strip-ansi/index.js] 161 bytes {main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 4.29 KiB {main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {main} [built]    [./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built]      [./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.91 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]
[./src/index.js] 141 bytes {main} [built]
    + 18 hidden modules
ℹ ｢wdm｣: Compiled successfully.



./webpack.config.js

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader',
        ],
      },
	  {
        test: /\.js$/, exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
};


$ yarn add -D copy-webpack-plugin
yarn add -D copy-webpack-plugin
yarn add v1.21.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.11: The platform "linux" is incompatible with this module.
info "fsevents@1.2.11" is an optional dependency and failed compatibility check. Excluding it from installation.        [3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
info Direct dependencies
└─ copy-webpack-plugin@5.1.1
info All dependencies
├─ copy-webpack-plugin@5.1.1
├─ dir-glob@2.2.2
├─ globby@7.1.1
├─ ignore@3.3.10
└─ path-type@3.0.0
Done in 4.08s.

yarn webpack
yarn run webpack-dev-server

$ yarn add eslint
yarn add v1.21.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.11: The platform "linux" is incompatible with this module.
info "fsevents@1.2.11" is an optional dependency and failed compatibility check. Excluding it from installation.        [3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 53 new dependencies.
info Direct dependencies
└─ eslint@6.8.0
info All dependencies
├─ @types/color-name@1.1.1
├─ acorn-jsx@5.2.0
├─ acorn@7.1.1
├─ ansi-escapes@4.3.1
├─ argparse@1.0.10
├─ astral-regex@1.0.0
├─ callsites@3.1.0
├─ chardet@0.7.0
├─ cli-cursor@3.1.0
├─ cli-width@2.2.0
├─ deep-is@0.1.3
├─ doctrine@3.0.0
├─ eslint-utils@1.4.3
├─ eslint@6.8.0
.
.
└─ write@1.0.3
Done in 17.75s.

$ eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1
? Would you like to install them now with npm? Yes
Installing eslint-config-airbnb-base@latest, eslint@^5.16.0 || ^6.8.0, eslint-plugin-import@^2.20.1

+ eslint-plugin-import@2.20.1
+ eslint@6.8.0
+ eslint-config-airbnb-base@14.1.0
added 83 packages from 84 contributors, removed 27 packages, updated 749 packages and audited 13596 packages in 70.182s 
35 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Successfully created .eslintrc.json file in /mnt/d/Google_Drive/Microverse/5.Javascript/7.phaser/shinobi-run
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.

$ yarn add -D jest
yarn add v1.21.1
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 155 new dependencies.
info Direct dependencies
├─ eslint-config-airbnb-base@14.1.0
├─ eslint-plugin-import@2.20.1
└─ jest@25.1.0
info All dependencies
├─ @babel/plugin-syntax-bigint@7.8.3
├─ @bcoe/v8-coverage@0.2.3
├─ @cnakazawa/watch@1.0.4
.
.
└─ yargs-parser@18.1.0
Done in 78.25s.

sequence;

0. game config and state with DOM
1. Add sprite
2. Add sprite idle and run animattion
3. add keyboard input for left and right
4. physics
5. gravity
6. jump
7. throw kunai