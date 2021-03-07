/**
 * Dependency Modules
 */
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");
// Application Server
const serverUri = "http://localhost:3000/#";
const appTitle = "React App";
/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder()
    .usingServer()
    .withCapabilities({ browserName: "chrome" })
    .build();
/**
* Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
* @type {webdriver}
*/
/*
var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "firefox" })
 .build();
 */
/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
    return new Promise((resolve, reject) => {
        browser.getTitle().then(function (title) {
            resolve(title);
        });
    });
}


describe('userName basic test', function () {
    it('fill the user name', function () {
        assert.equal(John, findElement({ id: "username" }));
    })
});
/**
  * Test case to load our application and check the title.
  */
it("Should load the home page and get title", function () {
    return new Promise((resolve, reject) => {
        browser
            .get(serverUri)
            .then(logTitle)
            .then(title => {
                assert.strictEqual(title, appTitle);
                resolve();
            })
            .catch(err => reject(err));
    });
});

it("Should check whether the given element is loaded", function () {
    return new Promise((resolve, reject) => {
        browser
            .findElement({ id: "username" })
            .then(elem => resolve())
            .console.log(`REceived`)
            .catch(err => reject(err));
    });
});

