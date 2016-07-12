# React Native Workshop For LOOT



## 1. Set up environment
We will need Xcode, node.js, the React Native command line tools, and Watchman.

We recommend installing node and watchman via Homebrew.

#### Xcode

Xcode 7.0 or higher is required. You can install Xcode via the App Store or Apple developer downloads. This will install the Xcode IDE and Xcode Command Line Tools.


#### NodeJS

```
brew install node
```
*NodeJS 4.0 or greater is required for React Native. The default Homebrew package for Node is currently 6.0, so that is not an issue.*

#### Watchman

Watchman is a tool by Facebook for watching changes in the filesystem. It is recommended you install it for better performance.

```
brew install watchman
```

#### React Native Command Line Tools

Node comes with npm, which lets you install the React Native command line interface.

```
npm install -g react-native-cli
```

### Testing Installation

Use the React Native command line tools to generate a new React Native project called "AwesomeProject", then run react-native run-ios inside the newly created folder.

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```
*You should see your new app running in the iOS Simulator shortly.*

![You should see your new app running in the iOS Simulator shortly.](./images/testing-installation.png)

### Modifying your app

Now that you have successfully run the app, let's modify it.

Open index.ios.js in your text editor of choice and edit some lines.
Hit Command⌘ + R in your iOS Simulator to reload the app and see your change!


## Learning ES6 and Flexbox Layout

- [ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
