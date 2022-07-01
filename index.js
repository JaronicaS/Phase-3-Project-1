// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};

<img src="https://picsum.photos/v2/list?page=2&limit=100"> 
<img src= "https://picsum.photos/id/0/5616/3744">
<img scr= "https://picsum.photos/id/0/info">