(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "primereact/progressspinner"
const progressspinner_namespaceObject = require("primereact/progressspinner");
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: ./node_modules/primereact/resources/themes/lara-light-indigo/theme.css
var theme = __webpack_require__(9951);
// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.min.css
var primereact_min = __webpack_require__(5626);
;// CONCATENATED MODULE: ./pages/_app.js
// entry point for the next app






 //theme
 //core css

function MyApp({ Component , pageProps  }) {
    console.log("home loaded ");
    const router = (0,router_namespaceObject.useRouter)();
    const [pageLoading, setPageLoading] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        const handleStart = ()=>{
            setPageLoading(true);
        };
        const handleComplete = ()=>{
            setPageLoading(false);
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [
        router
    ]);
    const getLayout = Component.getLayout || ((page)=>page);
    if (pageLoading) {
        // return <ProgressSpinner strokeWidth={3} className="fixed-center" />;
        return /*#__PURE__*/ jsx_runtime_.jsx(progressspinner_namespaceObject.ProgressSpinner, {
            className: "fixed-center",
            style: {
                width: "50px",
                height: "50px"
            },
            strokeWidth: "8",
            fill: "var(--surface-ground)",
            animationDuration: ".5s"
        });
    // return <h1>Loading Please wait ...</h1>;
    }
    return getLayout(/*#__PURE__*/ jsx_runtime_.jsx(react_.NextUIProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5626:
/***/ (() => {



/***/ }),

/***/ 9951:
/***/ (() => {



/***/ }),

/***/ 6735:
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5097));
module.exports = __webpack_exports__;

})();