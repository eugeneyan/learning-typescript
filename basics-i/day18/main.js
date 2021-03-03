"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/*
 * Callbacks take two parameters. The first is err and the second is result. If err is false, there
 * will not be an error; otherwise, error.
 *
 * Callbacks are functions passed as an argument to another function. They are executed after
 * another function has finished executing, thus the name "callback"
 * - https://www.w3schools.com/js/js_callback.asp
 * - https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
 */
var doSomething = function (callback) {
    setTimeout(function () {
        var skills = ['Python', 'Scala', 'TypeScript'];
        callback('It did not go well', skills);
    }, 0);
};
var callback = function (err, result) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
};
// Prints after 0.3 secs
doSomething(callback);
// Change callback err arg to false
var doSomething2 = function (callback) {
    setTimeout(function () {
        var skills = ['Python', 'Scala', 'TypeScript'];
        callback(false, skills);
    }, 0);
};
// Prints after 0.2 secs, thus BEFORE the prior doSomething() is ran
doSomething2(callback);
/*
 * Promise: A way to handle async operations in JavaScript, allowing handlers with an async
 * action to have an eventual success value or failure reason. Instead of immediately returning
 * the final value, the async method returns a promise to supply the value sometime in the future.
 *
 * Promises have these states:
 * - pending: Initial state, neither fulfiled nor rejected
 * - fulfiled: Operation completed successfully
 * - rejected: Operation failed
 */
/*
 * Promises are created using the Promise constructor. Inside the constructor, it takes a
 * callback function, which has two parameters which are the resolve and reject functions.
 * - resolve: returns the result
 * - reject: returns as error in try catch
 */
var doPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var skills = ['Python', 'Scala', 'TypeScript', 'SQL'];
        if (skills.length > 0) {
            resolve(skills);
        }
        else {
            reject('Something wrong has happened');
        }
    }, 0);
});
// Settled with resolve
doPromise
    .then(function (result) {
    console.log(result);
})["catch"](function (error) { return console.log(error); });
var doPromise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var skills = ['Python', 'Scala', 'TypeScript', 'SQL'];
        if (skills.indexOf('Node') !== -1) {
            resolve('Fullstack dev');
        }
        else {
            reject('Something wrong has happened');
        }
    }, 0);
});
// Settled with reject
doPromise2
    .then(function (result) {
    console.log(result);
})["catch"](function (error) { return console.log(error); });
var fetch = require('node-fetch');
var url = 'https://restcountries.eu/rest/v2/all';
// fetch(url)  // Where does response come from?
//     .then(response => response.json())  // Access API data as JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log(error))
/*
 * Async and Await: An elegant way to handle promises.
 * - async: Having it infront of a function means the function will return a promise
 * - await: to access the value from the promise
 */
var square = function (n) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, n * n];
        });
    });
};
console.log(square(2));
var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, countries, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                countries = _a.sent();
                console.log(countries);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
console.log('===== async and await');
fetchData();
