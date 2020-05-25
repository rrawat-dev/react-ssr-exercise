(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./components/atoms/Loader/Loader.component.js":
/*!*****************************************************!*\
  !*** ./components/atoms/Loader/Loader.component.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.style */ "./components/atoms/Loader/Loader.style.js");



var Loader = function Loader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_style__WEBPACK_IMPORTED_MODULE_1__["default"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/atoms/Loader/Loader.style.js":
/*!*************************************************!*\
  !*** ./components/atoms/Loader/Loader.style.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/variables */ "./styles/variables.js");


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        position: absolute;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        background: rgba(0, 0, 0, .25);\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; \n    z-index: 1;\n    background: none;\n\n    ", "\n\n    ", "\n\n    > div {\n        box-sizing: border-box;\n        display: block;\n        position: absolute;\n        width: 64px;\n        height: 64px;\n        margin: 8px;\n        border: 8px solid ", ";\n        border-radius: 50%;\n        animation: LoaderAnimation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n        border-color: ", " transparent transparent transparent;\n        left: 50%;\n        top: 50%;\n\n        &:nth-child(1) {\n          animation-delay: -0.45s;\n        }\n\n        &:nth-child(2) {\n          animation-delay: -0.3s;\n        }\n\n        &:nth-child(3) {\n          animation-delay: -0.15s;\n        }\n    }\n\n    @keyframes LoaderAnimation {\n        0% {\n            transform: translateX(-50%) translateY(-50%) rotate(0deg);\n        }\n\n        100% {\n            transform: translateX(-50%) translateY(-50%) rotate(360deg);\n        }\n    }  \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledLoader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.overlay && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
}, function (props) {
  return props.component && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3());
}, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].orange, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].orange);
/* harmony default export */ __webpack_exports__["default"] = (StyledLoader);

/***/ }),

/***/ "./components/molecules/Pagination/Pagination.component.js":
/*!*****************************************************************!*\
  !*** ./components/molecules/Pagination/Pagination.component.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pagination_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.style */ "./components/molecules/Pagination/Pagination.style.js");


function Pagination(props) {
  var prev = function prev() {
    props.onPaginate(props.currentPage - 1);
  };

  var next = function next() {
    props.onPaginate(props.currentPage + 1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination_style__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pagination-info"
  }, "Showing Page ", props.currentPage + 1, " of ", props.totalPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination-cta",
    onClick: prev,
    disabled: props.currentPage === 0
  }, "prev page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination-cta",
    onClick: next,
    disabled: props.currentPage >= props.totalPages
  }, "next page")));
}

/***/ }),

/***/ "./components/molecules/Pagination/Pagination.style.js":
/*!*************************************************************!*\
  !*** ./components/molecules/Pagination/Pagination.style.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/variables */ "./styles/variables.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    margin: 1rem auto;\n    width: 200px;\n    text-align: center;\n\n    .pagination-info {\n        font-size: .8rem;\n        color: ", ";\n    }\n\n    .pagination-cta {\n        font-size: .8rem;\n        padding: .4rem;\n\n        &:first-child {\n            border-top-left-radius: 5px;\n            border-bottom-left-radius: 5px;\n        }\n\n        &:last-child {\n            border-top-right-radius: 5px;\n            border-bottom-right-radius: 5px;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].orange));

/***/ }),

/***/ "./components/organisms/NewsList/NewsList.component.js":
/*!*************************************************************!*\
  !*** ./components/organisms/NewsList/NewsList.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Loader_Loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Loader/Loader.component */ "./components/atoms/Loader/Loader.component.js");
/* harmony import */ var _NewsList_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsList.style */ "./components/organisms/NewsList/NewsList.style.js");
/* harmony import */ var _molecules_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/Pagination/Pagination.component */ "./components/molecules/Pagination/Pagination.component.js");





function NewsList(props) {
  var news = props.news; // history back handler

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.onpopstate = function (e) {
      if (e.state !== null) {
        fetchNewsPage(e.state.page);
      }
    };
  }, []);

  var hideNewsItem = function hideNewsItem(id) {
    props.hideNewsItem(id);
  };

  var upvoteNewsItem = function upvoteNewsItem(newsItem) {
    props.upvoteNewsItem(newsItem.objectID, newsItem.points ? newsItem.points + 1 : 1);
  };

  var fetchNewsPage = function fetchNewsPage() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    window.history.pushState({
      page: page
    }, "Hacker news: Page ".concat(page + 1), "?page=".concat(page));
    props.fetchNews({
      params: {
        page: page
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsList_style__WEBPACK_IMPORTED_MODULE_3__["default"], null, props.fullPageLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Loader_Loader_component__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "logo-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/y18.gif",
    alt: "Site Logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return fetchNewsPage(0);
    }
  }, "top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return fetchNewsPage(0);
    }
  }, "new")))), news.hits.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "no-results"
  }, "Sorry, currently no results available for your request. Please try later."), news.hits.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "newsitems"
  }, news.hits.map(function (newsItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "newsitem",
      key: newsItem.objectID
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, newsItem.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "additional-info"
    }, "".concat(newsItem._domain ? '(' + newsItem._domain + ') ' : '', "by ").concat(newsItem.author, " ").concat(newsItem._createdOn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comments"
    }, newsItem.num_comments || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "upvotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "upvote"
    }, newsItem.points), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "icon",
      onClick: function onClick() {
        return upvoteNewsItem(newsItem);
      }
    }, "upvote")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hide-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "hide-link",
      onClick: function onClick() {
        return hideNewsItem(newsItem.objectID);
      }
    }, " [ hide ] ")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_Pagination_Pagination_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onPaginate: fetchNewsPage,
    totalPages: news.nbPages,
    currentPage: news.page
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, "React SSR Demo"));
}
NewsList.propTypes = {
  news: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  fetchNews: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hideNewsItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  upvoteNewsItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./components/organisms/NewsList/NewsList.connect.js":
/*!***********************************************************!*\
  !*** ./components/organisms/NewsList/NewsList.connect.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_news_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/news.actions */ "./redux/actions/news.actions.js");
/* harmony import */ var _NewsList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewsList.component */ "./components/organisms/NewsList/NewsList.component.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function mapStateToProps(state) {
  var hiddenNewsItems = [];
  var upvotedNewsItems = {};

  if (global && global.localStorage) {
    hiddenNewsItems = JSON.parse(localStorage.getItem('hiddenNewsItems') || '[]');
    upvotedNewsItems = JSON.parse(localStorage.getItem('upvotedNewsItems') || '{}');
  }

  var upvotedNewsItemsKeys = Object.keys(upvotedNewsItems);
  return {
    fullPageLoader: state.fullPageLoader,
    news: _objectSpread(_objectSpread({}, state.news), {}, {
      hits: (state.news.hits || []).filter(function (item) {
        return hiddenNewsItems.indexOf(item.objectID) === -1;
      }).map(function (item) {
        if (upvotedNewsItemsKeys.indexOf(item.objectID) > -1) {
          return _objectSpread(_objectSpread({}, item), {}, {
            points: upvotedNewsItems[item.objectID].points
          });
        }

        return item;
      })
    })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews: function fetchNews(options) {
      return dispatch(Object(_redux_actions_news_actions__WEBPACK_IMPORTED_MODULE_3__["fetchNewsAsyncAction"])(options));
    },
    hideNewsItem: function hideNewsItem(id) {
      return dispatch(Object(_redux_actions_news_actions__WEBPACK_IMPORTED_MODULE_3__["hideNewsItemAsyncAction"])(id));
    },
    upvoteNewsItem: function upvoteNewsItem(id, points) {
      return dispatch(Object(_redux_actions_news_actions__WEBPACK_IMPORTED_MODULE_3__["upvoteNewsItemAsyncAction"])(id, points));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_NewsList_component__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/organisms/NewsList/NewsList.style.js":
/*!*********************************************************!*\
  !*** ./components/organisms/NewsList/NewsList.style.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/variables */ "./styles/variables.js");
/* harmony import */ var _styles_device_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/device.breakpoints */ "./styles/device.breakpoints.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\n    .header {\n        background-color: ", ";\n        .logo {\n            border: 2px solid ", ";\n            width: 18px;\n            height: 18px;\n            background-image: url('/images/y18.gif');\n            background-repeat: no-repeat;\n            background-position: center center;\n            display: block;\n\n            &-link {\n                padding: 4px;                \n            }\n        }\n\n        .links {\n            display: flex;\n        }\n\n        .link {\n            padding: 5px 6px;\n            position: relative;\n\n            &:last-child::before {\n                content: ' | ';\n                position: absolute;\n                left: 0px;\n                top: 10px;\n                font-size: .6rem;\n                color: #333;\n            }\n\n            button {\n                font-size: .9rem;\n                color: ", ";\n                border: none;\n                background: ", ";\n                cursor: pointer;\n\n                &:hover {\n                    text-decoration: underline;\n                }\n            }\n        }\n    }\n\n    .newsitems {\n        padding-top: 1rem;\n    }\n\n    .newsitem {\n        display: flex;\n        flex-wrap: wrap;\n        line-height: 1.2rem;\n        padding: 8px 10px 0 10px;\n        font-size: 1rem;\n\n        > div {\n            margin-right: 10px;\n        }\n\n        &:nth-child(even) {\n            background-color: #d8d8d5;\n        }\n    }\n\n    .comments {\n        text-align: right;\n        margin-right: 15px; \n        font-size: .8rem;\n        color: #333;\n\n        @media ", " {\n            flex-basis: auto;\n            order: 0;\n            width: 3rem;\n        }\n    }\n\n    .upvotes {\n        text-align: right;\n        margin-right: 15px;\n        position: relative;\n        padding-right: 12px;\n        font-size: .8rem;\n        color: #333;\n \n        @media ", " {\n            flex-basis: auto;\n            order: 1;\n            width: 3rem;\n        }\n\n        .icon {\n            position: absolute;\n            right: 0;\n            top: 0;\n            cursor: pointer;\n            background: none;\n            border: none;\n            text-indent: -99999px;\n\n            &:focus{\n                outline:none;\n            }\n\n            &::after {\n                content: '';\n                display: block;\n                width: 0px;\n                height: 0px;\n                border: 4px solid transparent;\n                border-bottom: 6px solid #666;\n                position: absolute;\n                right: 0;\n                top: 3px;\n            }\n        }\n    }\n\n    .title {\n        flex-basis: 100%;\n        font-size: .9rem;\n        margin-bottom: 5px;\n\n        @media ", " {\n            flex-basis: auto;\n            order: 2;\n        }\n    }\n\n    .additional-info {\n        flex-basis: 100%;\n        font-size: .7rem;\n        color: #666;\n        margin-bottom: 5px;\n\n        @media ", " {\n            flex-basis: auto;\n        }\n\n        @media ", " {\n            flex-basis: auto;\n            order: 3;\n        }\n    }\n\n    .hide-info {\n        @media ", " {\n            flex-basis: auto;\n            order: 4;\n        }\n\n        .hide-link {\n            float: right;\n            color: #333;\n            cursor: pointer;\n            background: transparent;\n            border: none;\n\n            &:hover {\n                color: #000;\n                text-decoration: underline;\n            }\n\n            &:focus {\n                outline: none;\n            }\n        }\n    }\n\n    .fetch-more-cta {\n        margin: 1rem;\n        color: ", ";\n        background: none;\n        border: none;\n        font-size: 1rem;\n        cursor: pointer;\n\n        &:focus {\n            outline: none;\n        }\n    }\n\n    .footer {\n        border-top: 2px solid ", ";\n        text-align: center;\n        font-size: .8rem;\n        color: #666;\n        padding: 1rem 0;\n    }\n\n    .no-results {\n        padding: 10px;\n        text-align: center;\n        color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].orange, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].white, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].white, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].orange, _styles_device_breakpoints__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _styles_device_breakpoints__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _styles_device_breakpoints__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _styles_device_breakpoints__WEBPACK_IMPORTED_MODULE_3__["device"].tablet, _styles_device_breakpoints__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _styles_device_breakpoints__WEBPACK_IMPORTED_MODULE_3__["device"].laptop, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].orange, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].orange, _styles_variables__WEBPACK_IMPORTED_MODULE_2__["COLORS"].orange));

/***/ }),

/***/ "./components/pages/HomePage/HomePage.component.js":
/*!*********************************************************!*\
  !*** ./components/pages/HomePage/HomePage.component.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _organisms_NewsList_NewsList_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../organisms/NewsList/NewsList.connect */ "./components/organisms/NewsList/NewsList.connect.js");


function HomePage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_NewsList_NewsList_connect__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./components/pages/HomePage/HomePage.connect.js":
/*!*******************************************************!*\
  !*** ./components/pages/HomePage/HomePage.connect.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _HomePage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage.component */ "./components/pages/HomePage/HomePage.component.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function mapStateToProps(state) {
  return _objectSpread({}, state);
}

function mapDispatchToProps(dispatch) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(_HomePage_component__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_pages_HomePage_HomePage_connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/pages/HomePage/HomePage.connect */ "./components/pages/HomePage/HomePage.connect.js");
/* harmony import */ var _redux_actions_news_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions/news.actions */ "./redux/actions/news.actions.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Home = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _Component);

  var _super = _createSuper(Home);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Home, null, [{
    key: "getServerSideProps",
    value: function () {
      var _getServerSideProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, store, options;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, store = _ref.store;
                options = {
                  "params": req.query || {}
                };
                return _context.abrupt("return", store.dispatch(Object(_redux_actions_news_actions__WEBPACK_IMPORTED_MODULE_9__["fetchNewsAsyncAction"])(options)));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getServerSideProps(_x) {
        return _getServerSideProps.apply(this, arguments);
      }

      return getServerSideProps;
    }()
  }]);

  function Home(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Home);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_pages_HomePage_HomePage_connect__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./redux/actions/news.actions.js":
/*!***************************************!*\
  !*** ./redux/actions/news.actions.js ***!
  \***************************************/
/*! exports provided: showFullPageLoaderAction, fetchNewsSuccessAction, fetchLatestNewsSuccessAction, hideNewsItemSuccessAction, upvoteNewsItemSuccessAction, fetchNewsAsyncAction, hideNewsItemAsyncAction, upvoteNewsItemAsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFullPageLoaderAction", function() { return showFullPageLoaderAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNewsSuccessAction", function() { return fetchNewsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLatestNewsSuccessAction", function() { return fetchLatestNewsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNewsItemSuccessAction", function() { return hideNewsItemSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upvoteNewsItemSuccessAction", function() { return upvoteNewsItemSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNewsAsyncAction", function() { return fetchNewsAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNewsItemAsyncAction", function() { return hideNewsItemAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upvoteNewsItemAsyncAction", function() { return upvoteNewsItemAsyncAction; });
/* harmony import */ var _services_news_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/news/news.service */ "./services/news/news.service.js");

function showFullPageLoaderAction(showFullPageLoader) {
  return {
    type: 'SHOW_FULLPAGE_LOADER',
    payload: showFullPageLoader
  };
}
function fetchNewsSuccessAction(news) {
  return {
    type: 'FETCH_NEWS_SUCCESS',
    payload: news
  };
}
function fetchLatestNewsSuccessAction(news) {
  return {
    type: 'FETCH_LATEST_NEWS_SUCCESS',
    payload: news
  };
}
function hideNewsItemSuccessAction(id) {
  return {
    type: 'HIDE_NEWS_ITEM',
    payload: id
  };
}
function upvoteNewsItemSuccessAction(id, upvotes) {
  return {
    type: 'UPVOTE_NEWS_ITEM',
    payload: {
      id: id,
      upvotes: upvotes
    }
  };
}
function fetchNewsAsyncAction(options) {
  return function (dispatch) {
    dispatch(showFullPageLoaderAction(true));
    return Object(_services_news_news_service__WEBPACK_IMPORTED_MODULE_0__["fetchNews"])(options).then(function (news) {
      if (options && options.page === 0) {
        dispatch(fetchLatestNewsSuccessAction(news));
      } else {
        dispatch(fetchNewsSuccessAction(news));
      }

      dispatch(showFullPageLoaderAction(false));
    })["catch"](function () {
      dispatch(showFullPageLoaderAction(false));
    });
  };
}
function hideNewsItemAsyncAction(id) {
  return function (dispatch) {
    dispatch(showFullPageLoaderAction(true));
    return Object(_services_news_news_service__WEBPACK_IMPORTED_MODULE_0__["hideNewsItem"])(id).then(function () {
      dispatch(hideNewsItemSuccessAction(id));
      dispatch(showFullPageLoaderAction(false));
    })["catch"](function () {
      dispatch(showFullPageLoaderAction(false));
    });
  };
}
function upvoteNewsItemAsyncAction(id, upvotes) {
  return function (dispatch) {
    dispatch(showFullPageLoaderAction(true));
    return Object(_services_news_news_service__WEBPACK_IMPORTED_MODULE_0__["upvoteNewsItem"])(id, upvotes).then(function () {
      dispatch(upvoteNewsItemSuccessAction(id, upvotes));
      dispatch(showFullPageLoaderAction(false));
    })["catch"](function () {
      dispatch(showFullPageLoaderAction(false));
    });
  };
}

/***/ }),

/***/ "./services/http/http.service.js":
/*!***************************************!*\
  !*** ./services/http/http.service.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create());

/***/ }),

/***/ "./services/news/news.service.js":
/*!***************************************!*\
  !*** ./services/news/news.service.js ***!
  \***************************************/
/*! exports provided: fetchNews, hideNewsItem, upvoteNewsItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNews", function() { return fetchNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNewsItem", function() { return hideNewsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upvoteNewsItem", function() { return upvoteNewsItem; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./services/http/http.service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function getCreatedOnText(date) {
  var MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
  var diff = (new Date().getTime() - date.getTime()) / MILLISECONDS_IN_A_DAY;

  if (diff < 7) {
    return "".concat(diff, " day ago");
  } else if (diff < 28) {
    return "".concat(Math.floor(diff / 7), " week ago");
  } else if (diff < 365) {
    return "".concat(Math.floor(diff / 30), " month ago");
  } else {
    return "".concat(Math.floor(diff / 365), " year ago");
  }
}

function getDomain(url) {
  return url.replace(/https?:\/\/(www\.)?/, '').split('/')[0];
}

function fetchNews(options) {
  var url = 'https://hn.algolia.com/api/v1/search';
  return _http_http_service__WEBPACK_IMPORTED_MODULE_1__["default"].get(url, options || {}).then(function (res) {
    return _objectSpread(_objectSpread({}, res.data), {}, {
      hits: (res.data.hits || []).filter(function (item) {
        return !!item.title;
      }).map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          _createdOn: getCreatedOnText(new Date(item.created_at)),
          _domain: getDomain(item.url || ''),
          _upvotes: 0
        });
      })
    });
  });
}
function hideNewsItem(id) {
  return new Promise(function (resolve, reject) {
    if (global && global.localStorage) {
      var hiddenNewsItems = JSON.parse(global.localStorage.getItem('hiddenNewsItems') || '[]');
      hiddenNewsItems = hiddenNewsItems.filter(function (item) {
        return item !== id;
      }).concat(id);
      global.localStorage.setItem('hiddenNewsItems', JSON.stringify(hiddenNewsItems));
      setTimeout(function () {
        resolve();
      }, 1000);
    } else {
      reject();
    }
  });
}
function upvoteNewsItem(id, points) {
  return new Promise(function (resolve, reject) {
    if (global && global.localStorage) {
      var upvotedNewsItems = JSON.parse(global.localStorage.getItem('upvotedNewsItems') || '{}');
      upvotedNewsItems[id] = {
        points: points
      };
      global.localStorage.setItem('upvotedNewsItems', JSON.stringify(upvotedNewsItems));
      setTimeout(function () {
        resolve();
      }, 1000);
    } else {
      reject();
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./styles/device.breakpoints.js":
/*!**************************************!*\
  !*** ./styles/device.breakpoints.js ***!
  \**************************************/
/*! exports provided: device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
var size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
var device = {
  mobileS: "(min-width: ".concat(size.mobileS, ")"),
  mobileM: "(min-width: ".concat(size.mobileM, ")"),
  mobileL: "(min-width: ".concat(size.mobileL, ")"),
  tablet: "(min-width: ".concat(size.tablet, ")"),
  laptop: "(min-width: ".concat(size.laptop, ")"),
  laptopL: "(min-width: ".concat(size.laptopL, ")"),
  desktop: "(min-width: ".concat(size.desktop, ")"),
  desktopL: "(min-width: ".concat(size.desktop, ")")
};

/***/ }),

/***/ "./styles/variables.js":
/*!*****************************!*\
  !*** ./styles/variables.js ***!
  \*****************************/
/*! exports provided: COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
var COLORS = {
  orange: '#ff6600',
  beige: '#f6f6ef',
  white: '#fff',
  black: '#000'
};

/***/ })

}]);
//# sourceMappingURL=index.js.map