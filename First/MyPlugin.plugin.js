/**
 * @name MyFirstPlugin
 * @author Fantom
 * @description Basic Plugin
 * @version 1.0.0
 * @invite wVC6xR6JV8
 * @authorId 505780854426042400
 * @authorLink https://twitter.com/Whoever
 * @website https://github.com/fhjalsa/BetterDiscord/
 */

module.exports = class MyFirstPlugin {
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {
        let usernameText = document.getElementById("username-2b1r56");
        usernameText.style.color = document.getElementById("roleColor-rz2vM0").style.color;
    }
    stop() {
        usernameText.style.color = "white";
    }
}
