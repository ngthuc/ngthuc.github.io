# ngthuc.github.io
My Resume

## Tools
* [Minify](http://minifycode.com/)
* [jsMinify](https://javascript-minifier.com/)
* [Convert2Webp](https://image.online-convert.com/convert-to-webp)
* [Gulp](https://www.npmjs.com/package/gulp)

## Requires
* [Node.js](https://nodejs.org/en/)
* Set proxy for npm (if your company network use proxy)
```shell
npm config set http-proxy http://proxy.company.com:8080
npm config set https-proxy https://proxy.company.com:8080
```

## Usage
* Reinstall modules in new environment
```shell
npm cache clear --force 
npm update 
npm install
```

* Install gulp-cli
```shell
npm install -g gulp-cli
```

* Fix vulnerabilities (sometimes)
```shell
cd ./node_modules/svgo/
npm install js-yaml@3.13.1
cd ../../
```

* Rebuild production
```shell
gulp build
gulp
```