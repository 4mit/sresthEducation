(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 98:
/***/ ((module) => {

// Exports
module.exports = {
	"text-swapping-anchor": "Anchors_text-swapping-anchor__mHZ4t",
	"passing-underline-anchor": "Anchors_passing-underline-anchor__sgXin"
};


/***/ }),

/***/ 9681:
/***/ ((module) => {

// Exports
module.exports = {
	"flex": "common-style_flex__OKA4j",
	"flex-column": "common-style_flex-column__wKWqm",
	"link-in-row": "common-style_link-in-row__Fj_pn",
	"shadow-1": "common-style_shadow-1__9RXbE",
	"p-15": "common-style_p-15__PdtIb",
	"align-just-center": "common-style_align-just-center__o9gXN",
	"banner": "common-style_banner__ahyvZ",
	"scrollIndicator": "common-style_scrollIndicator__NgqJf",
	"hero-leaner-img": "common-style_hero-leaner-img__YE9uo"
};


/***/ }),

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ",
	"container": "Home_container__bCOhY",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 3821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(8418);
var link_default = /*#__PURE__*/__webpack_require__.n(client_link);
// EXTERNAL MODULE: ./components/Anchors/Anchors.module.css
var Anchors_module = __webpack_require__(98);
var Anchors_module_default = /*#__PURE__*/__webpack_require__.n(Anchors_module);
;// CONCATENATED MODULE: ./components/Anchors/Anchors.tsx



const Anchors = ({ type , text , href  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href || "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            "data-replace": text,
            className: `${(Anchors_module_default())[type + "-anchor"]} cursor-pointer font-bold m-2`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: text
            })
        })
    });
};
/* harmony default export */ const Anchors_Anchors = (Anchors);

;// CONCATENATED MODULE: ./components/Header/Header.tsx


const links = [
    {
        title: "Courses",
        href: "/category/articles"
    },
    {
        title: "Teachers",
        href: "/category/news"
    },
    {
        title: "Fee",
        href: "/category/articles"
    },
    {
        title: "Testimonial",
        href: "/category/articles"
    },
    {
        title: "FAQ",
        href: "/category/articles"
    },
    {
        title: "About us",
        href: "/category/articles"
    }, 
];
const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "shadow-md p-2 bg-white sticky top-0 z-10",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "flex items-center list-none font-mono",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/scc.png",
                            alt: "",
                            height: 50,
                            width: 50
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex grow",
                        children: links.map((link, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Anchors_Anchors, {
                                    type: "text-swapping",
                                    text: link.title,
                                    href: link.href
                                })
                            });
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: ./components/common-style.module.css
var common_style_module = __webpack_require__(9681);
var common_style_module_default = /*#__PURE__*/__webpack_require__.n(common_style_module);
;// CONCATENATED MODULE: ./components/banner/Banner.tsx


const Banner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `shadow-inner ${(common_style_module_default()).banner}`,
        style: {
            minHeight: "45vh",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-white px-24 py-24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-7xl font-extrabold p-2",
                        children: "Shresth"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-7xl font-extrabold p-2",
                        children: "Education"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-7xl font-extrabold p-2",
                        children: "Institute"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: `${(common_style_module_default())["hero-leaner-img"]} z-0`,
                src: "/assets/imgs/hero-img1.svg"
            })
        ]
    });
};
/* harmony default export */ const banner_Banner = (Banner);

;// CONCATENATED MODULE: external "primereact/carousel"
const carousel_namespaceObject = require("primereact/carousel");
;// CONCATENATED MODULE: external "primereact/skeleton"
const skeleton_namespaceObject = require("primereact/skeleton");
;// CONCATENATED MODULE: ./components/ContentScroller/ContentScroller.tsx






const responsiveOptions = [
    {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: "600px",
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: "480px",
        numVisible: 1,
        numScroll: 1
    }, 
];
const courses = [
    "Math",
    "Physics",
    "English",
    "Bio",
    "UPSC",
    "SSC",
    "10th",
    "12th"
];
const ContentScroller = ({ items =[]  })=>{
    const { 0: catrgories , 1: setCategories  } = (0,external_react_.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const productTemplate = (category)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "border m-1 rounded-full text-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: " font-semibold",
                    children: category
                })
            })
        });
    };
    (0,external_react_.useEffect)(()=>{
        fetch("https://product-be.herokuapp.com/articles/getCategoryList").then((data)=>data.json()).then((data)=>{
            console.log("data>>>", data);
            setCategories(data);
        }).catch((e)=>{
            setCategories([]);
            console.log("errr", e);
        }).finally(()=>{
            setLoading(false);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "p-5 relative",
        children: [
            loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-6 gap-2",
                children: new Array(6).fill(0).map(()=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(skeleton_namespaceObject.Skeleton, {
                        width: "11rem",
                        height: "4rem",
                        borderRadius: "16px"
                    });
                })
            }),
            !loading && /*#__PURE__*/ jsx_runtime_.jsx(carousel_namespaceObject.Carousel, {
                value: courses,
                numVisible: 6,
                numScroll: 3,
                responsiveOptions: responsiveOptions,
                itemTemplate: productTemplate
            })
        ]
    });
};
/* harmony default export */ const ContentScroller_ContentScroller = (ContentScroller);

;// CONCATENATED MODULE: ./components/SectionBlock.tsx

const SectionBlock = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full bg-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "",
            children: children
        })
    });
};
/* harmony default export */ const components_SectionBlock = (SectionBlock);

// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
;// CONCATENATED MODULE: ./components/Cards/HoverCard.tsx




const months = (/* unused pure expression or super */ null && ([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December", 
]));
const HoverCard = ({ article  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Card, {
        css: {
            w: "100%",
            h: "300px"
        },
        variant: "flat",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Header, {
                css: {
                    position: "absolute",
                    zIndex: 1,
                    backgroundColor: "#00000075"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Col, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        h3: true,
                        color: "white",
                        children: article.title
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Body, {
                css: {
                    p: 0
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Image, {
                    src: "/assets/imgs/pomodoro-technique.jpeg",
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    alt: "Card example background"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Footer, {
                isBlurred: true,
                css: {
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Col, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
                                size: "md"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Col, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Row, {
                                justify: "flex-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Anchors_Anchors, {
                                    type: "text-swapping",
                                    text: "Read more",
                                    href: "#"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Cards_HoverCard = (HoverCard);

;// CONCATENATED MODULE: ./components/RecentArticle/RecentArticle.tsx




var ACTIONS;
(function(ACTIONS) {
    ACTIONS["SET_ARTICLE"] = "SET_ARTICLE";
    ACTIONS["SET_LOADING"] = "SET_LOADING";
    ACTIONS["TOGGLE_GRID"] = "TOGGLE_GRID";
})(ACTIONS || (ACTIONS = {}));
const data = [
    {
        title: "Hindi"
    },
    {
        title: "English"
    },
    {
        title: "Maths"
    },
    {
        title: "Scc"
    },
    {
        title: "Compititive Exams"
    },
    {
        title: "PSC"
    },
    {
        title: "General Knowledge"
    }, 
];
const componentState = {
    articles: [],
    loading: false,
    gridEnabled: true
};
function reducer(state, action) {
    switch(action.type){
        case ACTIONS.SET_ARTICLE:
            return {
                ...state,
                articles: action.payload
            };
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case ACTIONS.TOGGLE_GRID:
            return {
                ...state,
                gridEnabled: action.payload
            };
        default:
            return state;
    }
}
const RecentArticle = (props)=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, componentState);
    console.log(state, ">>>");
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: ACTIONS.SET_LOADING,
            payload: true
        });
        setTimeout(()=>{
            dispatch({
                type: ACTIONS.SET_ARTICLE,
                payload: data
            });
            dispatch({
                type: ACTIONS.SET_LOADING,
                payload: false
            });
        }, 2000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-slate-100 mt-3 p-2 sm:p-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-3 flex items-center justify-between",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Courses we offers "
                })
            }),
            state.loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3",
                children: new Array(10).fill(0).map(()=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(skeleton_namespaceObject.Skeleton, {
                            size: "13rem",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(skeleton_namespaceObject.Skeleton, {
                                    className: "mb-2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(skeleton_namespaceObject.Skeleton, {
                                    width: "10rem",
                                    className: "mb-2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(skeleton_namespaceObject.Skeleton, {
                                    width: "5rem",
                                    className: "mb-2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(skeleton_namespaceObject.Skeleton, {
                                    height: "2rem",
                                    className: "mb-2"
                                })
                            ]
                        })
                    });
                })
            }),
            state.gridEnabled && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3",
                children: state.articles.map((article)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Cards_HoverCard, {
                        article: article
                    });
                })
            })
        ]
    });
};
/* harmony default export */ const RecentArticle_RecentArticle = (RecentArticle);

;// CONCATENATED MODULE: ./components/Subscribe.tsx

const Subscribe = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-48 bg-slate-300 rounded flex flex-col p-5 justify-between shadow",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "subscribe",
                className: "text-xl font-bold font-sans text-violet-900 antialiase",
                children: "Subscribe"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                id: "subscribe",
                placeholder: "Enter your email",
                className: "p-3 rounded"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "border-2 rounded-md bg-emerald-900 text-white p-2",
                children: "Subscribe newsletter"
            })
        ]
    });
};
/* harmony default export */ const components_Subscribe = (Subscribe);

;// CONCATENATED MODULE: ./components/Footer.tsx


const footerLinks = [
    {
        title: "About",
        link: ""
    },
    {
        title: "Applications",
        link: ""
    },
    {
        title: "News",
        link: ""
    },
    {
        title: "Articles",
        link: ""
    }, 
];
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "p-4 sm:p-6 bg-sky-900",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:flex md:justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/scc.png",
                                height: 300,
                                width: 300
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "text-center text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "ml-9",
                                    children: "Shresth Education Institute"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "m-0",
                                        children: footerLinks.map((link, ind)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-200 dark:text-gray-400 hover:underline",
                                                    children: link.title
                                                })
                                            }, ind);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                                        children: "Follow us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "text-gray-600 dark:text-gray-400 m-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-200 dark:text-gray-400 hover:underline ",
                                                    children: "Linkedin"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-200 dark:text-gray-400 hover:underline",
                                                    children: "Facebook"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-200 dark:text-gray-400 hover:underline",
                                                    children: "Telegram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-200 dark:text-gray-400 hover:underline",
                                                    children: "WatsApp"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-200 dark:text-gray-400 hover:underline",
                                                    children: "Instagram"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                                        children: "Legal"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "text-gray-600 dark:text-gray-400 m-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "text-gray-200 dark:text-gray-400 hover:underline",
                                                children: "Sab Kuch free hai"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-6 md:mb-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Subscribe, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "my-6 border-gray-100 sm:mx-auto dark:border-gray-100 lg:my-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "text-sm text-white",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "\xa9 2023 "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "hover:underline text-white",
                                    children: "Shresth Education Institute"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: ". All Rights Reserved."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-center",
                            children: "For New Website Contact : 9399043834"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/cards/LearningCard.tsx


const list = [
    {
        title: "Saurabh Chubey",
        img: "/images/fruit-1.jpeg",
        price: "Free"
    },
    {
        title: "Faculty - 2 ",
        img: "/images/fruit-1.jpeg",
        price: "$5.50"
    },
    {
        title: "Faculty - 3",
        img: "/images/fruit-2.jpeg",
        price: "$3.00"
    },
    {
        title: "Faculty - 4",
        img: "/images/fruit-3.jpeg",
        price: "$10.00"
    }, 
];
function LearningCard({ article  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-slate-100 mt-3 p-2 sm:p-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-3 flex items-center justify-between",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Our Faculty"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3",
                children: list.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Card, {
                            isPressable: true,
                            variant: "flat",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Body, {
                                    css: {
                                        p: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Image, {
                                        src: "/choube.png",
                                        objectFit: "contain",
                                        width: "100%",
                                        height: 140,
                                        alt: item.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Footer, {
                                    css: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                                        wrap: "wrap",
                                        justify: "space-between",
                                        align: "center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                b: true,
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                css: {
                                                    color: "$accents7",
                                                    fontWeight: "$semibold",
                                                    fontSize: "$sm"
                                                },
                                                children: "(MSC Maths)"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }, index))
            })
        ]
    });
};

;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./components/cards/Testimonial.tsx






function SampleNextArrow(props) {
    const { className , style , onClick  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: {
            ...style,
            display: "block"
        },
        onClick: onClick
    });
}
function SamplePrevArrow(props) {
    const { className , style , onClick  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        style: {
            ...style,
            display: "block"
        },
        onClick: onClick
    });
}
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(SampleNextArrow, {}),
    prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(SamplePrevArrow, {})
};
function Testimonial() {
    const sliderRef = (0,external_react_.useRef)(null);
    const previousFn = ()=>{
        var ref;
        sliderRef === null || sliderRef === void 0 ? void 0 : (ref = sliderRef.current) === null || ref === void 0 ? void 0 : ref.slickPrev();
    };
    const nextFn = ()=>{
        var ref;
        sliderRef === null || sliderRef === void 0 ? void 0 : (ref = sliderRef.current) === null || ref === void 0 ? void 0 : ref.slickNext();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-slate-100 p-5 mt-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "ml-9",
                children: "Our Testimonial"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pl-5 pr-5 ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "pt-5 pb-5 pl-7 pr-7 relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "z-20",
                            onClick: previousFn,
                            style: {
                                position: "absolute",
                                left: 0,
                                top: "50%",
                                transform: "translate(0%, -50%)"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                            ...settings,
                            ref: sliderRef,
                            children: new Array(10).fill(0).map((img, i)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "p-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Card, {
                                        isPressable: true,
                                        variant: "flat",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Body, {
                                                css: {
                                                    p: 15,
                                                    backgroundImage: "url('https://nextui.org/images/fruit-1.jpeg')",
                                                    height: 160
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                    children: "Best Education Center in Simga"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Card.Footer, {
                                                css: {
                                                    justifyItems: "flex-start"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Row, {
                                                    wrap: "wrap",
                                                    align: "center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                            src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
                                                            size: "md"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                            css: {
                                                                color: "$accents7",
                                                                fontWeight: "$bold",
                                                                fontSize: "$sm",
                                                                marginLeft: 5
                                                            },
                                                            children: [
                                                                "People - ",
                                                                i
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                });
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "z-20 p-2",
                            onClick: nextFn,
                            style: {
                                position: "absolute",
                                right: 0,
                                top: "50%",
                                transform: "translate(0%, -50%)"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Faq/Faq.tsx


const faqList = [
    {
        title: "What is Shresth Education Institute ? ",
        subtitle: ""
    },
    {
        title: "How can i request for new feature ? ",
        subtitle: ""
    },
    {
        title: "How to refer LearningHub to my friend ? ",
        subtitle: ""
    },
    {
        title: "How to share an article to all social media plateform",
        subtitle: ""
    }, 
];
const Faq = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "p-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "ml-9",
                children: "FAQ"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Collapse.Group, {
                    children: faqList.map((faq, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Collapse, {
                            title: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: faq.title
                            }),
                            subtitle: faq.subtitle
                        });
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Faq_Faq = (Faq);

;// CONCATENATED MODULE: ./pages/index.js













function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Shresth Education Center"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Shresth Education Institute"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossorigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto+Mono&family=Roboto:wght@300&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(banner_Banner, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContentScroller_ContentScroller, {
                        items: [
                            {
                                title: "hello"
                            }
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SectionBlock, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(RecentArticle_RecentArticle, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SectionBlock, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LearningCard, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SectionBlock, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Testimonial, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SectionBlock, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Faq_Faq, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 6735:
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,418], () => (__webpack_exec__(3821)));
module.exports = __webpack_exports__;

})();