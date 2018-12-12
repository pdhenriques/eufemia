(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(78),n(52),n(318);var a,o=(a=n(0))&&a.__esModule?a:{default:a},r=n(291);function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;l(e,["components"]);return o.default.createElement(r.MDXTag,{name:"wrapper",components:t},o.default.createElement(r.MDXTag,{name:"h1",components:t},"Development"),o.default.createElement(r.MDXTag,{name:"p",components:t},"The ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," uses a ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://nodejs.org"}},"Node")," based setup with a lot of auto generated code to make the ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org"}},"React")," based components and patterns."),o.default.createElement(r.MDXTag,{name:"h4",components:t},"Why Yarn and not Lerna?"),o.default.createElement(r.MDXTag,{name:"p",components:t},"The mono repo ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-design-system")," uses ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://yarnpkg.com/"}},"Yarn")," (>= v1.10.1) to maintain the ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://yarnpkg.com/en/docs/workspaces"}},"workspace functionality"),". Instead of using ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npm link")," or ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn link"),", we use packages. This simplifies the linking and shared modules between ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://docs.npmjs.com/getting-started/packages"}},"packages"),".\nYarn offers a simpler approach to workspaces, but is way more powerful in managing dependencies."),o.default.createElement(r.MDXTag,{name:"h4",components:t},"Install the repo locally on Your machine"),o.default.createElement(r.MDXTag,{name:"pre",components:t},o.default.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash",metastring:""}},"# Clone the repo into your project working directory\n$ git clone https://github.com/dnbexperience/eufemia.git\n\n# Change to the directory\n$ cd eufemia\n\n# And install the dependencies\n$ yarn install\n\n# Once the installation is done, create a local build\n$ yarn build\n\n# Optionally, run the portal locally in watch mode (http://localhost:8000)\n$ yarn start\n")),o.default.createElement(r.MDXTag,{name:"hr",components:t}),o.default.createElement(r.MDXTag,{name:"h2",components:t},"Deploy"),o.default.createElement(r.MDXTag,{name:"p",components:t},"The steps, from code changes to production builds are:"),o.default.createElement(r.MDXTag,{name:"ol",components:t},o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Make Your changes"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Write tests and test the codebase"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Update eventually snapshots"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Commit Your changes with the correct ",o.default.createElement(r.MDXTag,{name:"strong",components:t,parentName:"li"},"message decoration")),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Push or make a Pull Request to the ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/dnbexperience/eufemia/commits/develop"}},o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"develop"))," branch"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Wait until the CI Server has validated the commits"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Make a ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/dnbexperience/eufemia/compare/master...develop?expand=1"}},"Pull Request")),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Once the Pull Request will be approved by one of the authored ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/dnbexperience/eufemia/graphs/contributors"}},"repo contributors"),","),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"the CI Server will deploy the Portal and NPM builds")),o.default.createElement(r.MDXTag,{name:"h4",components:t},"CI Deploy Structure"),o.default.createElement(r.MDXTag,{name:"p",components:t},"Both the Portal (",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-design-system-portal"),") and the NPM Package (",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib"),") gets build by the Deploy Server.\nThe development branch is called ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"origin/develop"),". All commits will be automatically tested before You can create a new pull request to the ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"origin/master")," branch."),o.default.createElement(r.MDXTag,{name:"h2",components:t},"UI Library"),o.default.createElement(r.MDXTag,{name:"h4",components:t},"How to make changes"),o.default.createElement(r.MDXTag,{name:"p",components:t},"To make changes to the code base, You can either do it directly on GitHub with a fork of the Repository, or You can clone the Repository locally on Your computer."),o.default.createElement(r.MDXTag,{name:"p",components:t},"To test and build Your changes locally, run"),o.default.createElement(r.MDXTag,{name:"pre",components:t},o.default.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-bash",metastring:""}},"# In the `dnb-ui-lib` directory, call:\n$ yarn build\n\n# To check if You have to update some test snappshots\n# or to simply validate your changes, run:\n$ yarn test\n")),o.default.createElement(r.MDXTag,{name:"h5",components:t},"Committing changes"),o.default.createElement(r.MDXTag,{name:"p",components:t},"Before You commit and push changes, Your code will be tested with both Static and Integration tests. You may make sure to run ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn test")," before You try to commit. You may also write new tests for Your code before committing."),o.default.createElement(r.MDXTag,{name:"p",components:t},"The Code Base is based on several Static Tests to help the code to be uniform:"),o.default.createElement(r.MDXTag,{name:"ul",components:t},o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Prettier"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"ESLint"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"StyleLint")),o.default.createElement(r.MDXTag,{name:"p",components:t},"You may consider to install Plugins for You Editor of choice to visualize and run the code formatters and linters based on the defined config files. This way to immediately see how the code have to consist."),o.default.createElement(r.MDXTag,{name:"h5",components:t},"Get started on making new Components and Patterns"),o.default.createElement(r.MDXTag,{name:"p",components:t},"In the repo ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," find the directory ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/src/components")," or ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/src/patterns"),". There You can place a new directory with all the needed sub folders. To get a reference, take a look how the other ",o.default.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"components")," and ",o.default.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"patterns")," are set up."),o.default.createElement(r.MDXTag,{name:"p",components:t},"Next, we have to ",o.default.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"pre-publish")," the library locally, so we can check the building process and testing our changes by using again ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn build"),"."),o.default.createElement(r.MDXTag,{name:"p",components:t},"To use the local build, You can either run the Portal, or use ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn link")," to link the package with a totally different project."),o.default.createElement(r.MDXTag,{name:"h5",components:t},"What happens on calling ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"h5"},"yarn build"),"?"),o.default.createElement(r.MDXTag,{name:"p",components:t},"There are a lot of different things going on, like:"),o.default.createElement(r.MDXTag,{name:"ul",components:t},o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Assets are getting generated"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"All the lib code gets compiled down to ECMAScript 5.1"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"UMD bundle gets created"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"All SASS styles are validated and compiled"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Code gets minified"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Icons are getting converted")),o.default.createElement(r.MDXTag,{name:"p",components:t},"A couple of folders and files are generated in the ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," root. They are ignored in the .gitignore file, so they not get a part of the git repo."),o.default.createElement(r.MDXTag,{name:"h3",components:t},"NPM Package"),o.default.createElement(r.MDXTag,{name:"p",components:t},"These folders/files will be a part of the npm ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://unpkg.com/dnb-ui-lib@latest/"}},"package"),":"),o.default.createElement(r.MDXTag,{name:"ul",components:t},o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/assets"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/components"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/patterns"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/icons"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/style"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/es"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/umd"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/shared"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"/web-components"),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"index.js")),o.default.createElement(r.MDXTag,{name:"h4",components:t},"How to publish a new version to NPM?"),o.default.createElement(r.MDXTag,{name:"p",components:t},"You have to commit you changes to the ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"origin/develop")," branch. Once the build gets approved by the CI Server, You can make a pull request to the the ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"origin/master")," branch. All commits (",o.default.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"pull requests"),") to master, will be deployed to both the Portal and the NPM Package."),o.default.createElement(r.MDXTag,{name:"p",components:t},o.default.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Make sure You follow ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"strong",props:{href:"https://semver.org"}},"Semantic Versioning"))),o.default.createElement(r.MDXTag,{name:"p",components:t},"Version numbers are handled automatically by using ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/semantic-release/semantic-release#readme"}},"semantic-release"),".\nMake sure to decorate Your ",o.default.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"commit messages")," with either ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/semantic-release/semantic-release#commit-message-format"}},"commit message format")," or simply use the following three methods:"),o.default.createElement(r.MDXTag,{name:"ul",components:t},o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"major: breaking change in API")),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"minor: this is a new feature")),o.default.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"fix: an example fix message"))),o.default.createElement(r.MDXTag,{name:"h2",components:t},"Portal"),o.default.createElement(r.MDXTag,{name:"h5",components:t},"UI-LIB Changes"),o.default.createElement(r.MDXTag,{name:"p",components:t},"The integration of the ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," into the ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-design-system-portal")," will happen on the Deploy Server automatically.\nBut You can easily run the build process for that, locally as well. Run ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn build")," in ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-design-system-portal")," directory. This will update/create all the needed ",o.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/eufemia/uilib"}},"pages"),"."),o.default.createElement(r.MDXTag,{name:"h5",components:t},"Update Content only"),o.default.createElement(r.MDXTag,{name:"p",components:t},"In case You make changes to ",o.default.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"not")," ",o.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ui-lib")," related pages, You don't have to run the build process for sure. Simply commit Your changes. But make sure the Markdown is formatted correctly by using Prettier."))};t._frontmatter={header:"UI Library",title:"Development",draft:!1}},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(376);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(321);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},318:function(e,t,n){var a=n(37),o=n(39);n(377)("keys",function(){return function(e){return o(a(e))}})},321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(0),l=(a=r)&&a.__esModule?a:{default:a};var m=l.default.createContext({}),c=m.Provider,p=m.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return l.default.createElement(p,null,function(t){return l.default.createElement(e,o({components:n||t},a))})}};t.default=function(e){var t=e.components,n=e.children;return l.default.createElement(c,{value:t},n)}},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),m=(a=l)&&a.__esModule?a:{default:a},c=n(321);var p={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,r=void 0===a?{}:a,l=e.children,c=e.components,s=void 0===c?{}:c,i=e.Layout,u=e.layoutProps,d=s[n+"."+t]||s[t]||p[t]||t;return i?m.default.createElement(i,o({components:s},u),m.default.createElement(d,r,l)):m.default.createElement(d,r,l)}}]),t}();t.default=(0,c.withMDXComponents)(s)},377:function(e,t,n){var a=n(15),o=n(19),r=n(26);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],l={};l[e]=t(n),a(a.S+a.F*r(function(){n(1)}),"Object",l)}}}]);
//# sourceMappingURL=component---src-pages-uilib-development-md-29a5b750ecef692a614a.js.map