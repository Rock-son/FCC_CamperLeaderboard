webpackJsonp([0],{

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _tableRow = __webpack_require__(83);

var _tableRow2 = _interopRequireDefault(_tableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        // only in ES6 - mandatory binding of custom methods
        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

        _this.state = { recent: [], alltime: [], shown: [], ordered: 'recent' };
        _this._getRecentData = _this._getRecentData.bind(_this);
        _this._getAllTimeData = _this._getAllTimeData.bind(_this);
        _this._recentData = _this._recentData.bind(_this);
        _this._allTimeData = _this._allTimeData.bind(_this);
        _this._orderByRecent = _this._orderByRecent.bind(_this);
        _this._orderByAlltime = _this._orderByAlltime.bind(_this);
        return _this;
    }

    _createClass(Table, [{
        key: '_getRecentData',
        value: function _getRecentData() {

            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", this._recentData);
            oReq.open("GET", 'https://fcctop100.herokuapp.com/api/fccusers/top/recent');
            oReq.send();
        }
    }, {
        key: '_getAllTimeData',
        value: function _getAllTimeData() {

            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", this._allTimeData);
            oReq.open("GET", 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
            oReq.send();
        }
        // both functions only used at app start

    }, {
        key: '_recentData',
        value: function _recentData(res) {
            var recent = JSON.parse(res.target.responseText);
            // ordered by recent data at start (this.state.shown)
            this.setState({ recent: recent, shown: recent });
        }
    }, {
        key: '_allTimeData',
        value: function _allTimeData(res) {
            var alltime = JSON.parse(res.target.responseText);
            this.setState({ alltime: alltime });
        }
    }, {
        key: '_orderByRecent',
        value: function _orderByRecent(event) {
            this.setState({ shown: this.state.recent, ordered: 'recent' });
        }
    }, {
        key: '_orderByAlltime',
        value: function _orderByAlltime(event) {
            this.setState({ shown: this.state.alltime, ordered: 'alltime' });
        }
        // make AJAX call for recent and alltime data just before mounting (rendering)

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._getRecentData();
            this._getAllTimeData();
        }
    }, {
        key: 'render',
        value: function render() {
            var count = 0;
            var recent = this.state.ordered === 'recent' ? 'active' : "";
            var alltime = this.state.ordered === 'alltime' ? 'active' : "";
            /* //prepare TableRow component for enumeration with map function(in virtual DOM)
                 let enumerateData = (userData, index) => <TableRow key={count} data={userData} index={++count}></TableRow>; 
            */
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'head' },
                    _react2.default.createElement('i', { className: 'fa fa-fire fa-fw' }),
                    'FreeCodeCamp Leaderboard'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'table' },
                    _react2.default.createElement(
                        'div',
                        { className: 'tblRow' },
                        _react2.default.createElement(
                            'div',
                            { className: 'tblData' },
                            '#'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'tblData' },
                            'Camper Name'
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'th1', className: 'tblData th ' + recent, onClick: this._orderByRecent },
                            'Points in past 30 days'
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'th2', className: 'tblData th ' + alltime, onClick: this._orderByAlltime },
                            'All time points'
                        )
                    ),
                    this.state.shown.map(function (userData, index) {
                        return _react2.default.createElement(_tableRow2.default, { key: count, data: userData, index: ++count });
                    })
                )
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

exports.default = Table;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _userImageLink = __webpack_require__(84);

var _userImageLink2 = _interopRequireDefault(_userImageLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRow = function (_React$Component) {
    _inherits(TableRow, _React$Component);

    function TableRow(props) {
        _classCallCheck(this, TableRow);

        return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));
    }

    _createClass(TableRow, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                index = _props.index;

            return _react2.default.createElement(
                'div',
                { className: 'tblRow' },
                _react2.default.createElement(
                    'div',
                    { className: 'tblData' },
                    index
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tblData' },
                    _react2.default.createElement(_userImageLink2.default, { user: data.username, src: data.img, alt: 'user.jpg' }),
                    _react2.default.createElement(
                        'a',
                        { href: "https://www.freecodecamp.com/" + data.username, target: '_blank' },
                        data.username
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tblData' },
                    data.recent
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tblData' },
                    data.alltime
                )
            );
        }
    }]);

    return TableRow;
}(_react2.default.Component);

exports.default = TableRow;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
        return _react2.default.createElement(
                'a',
                { href: "https://www.freecodecamp.com/" + props.user, target: '_blank' },
                _react2.default.createElement('img', { src: props.src, alt: props.alt })
        );
};

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(82);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(81);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function (event) {
     _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
});

/***/ })

},[85]);