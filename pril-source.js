var PRIL = PRIL || (function() {
    "use strict";
    
    (function _init() {
        // Create common style rules for all PRIL images.
        var commonStyles = document.createElement("style");
            
        commonStyles.textContent = "img[data-prilId] { \
            background-repeat: no-repeat; \
            color: transparent;}";
            
        document.querySelector("head").appendChild(commonStyles);
        
        console.log("PRIL initialized.");
    }());
    
    var _image = null,
        _id = null;
    
    function _registerImage(img) {
        _image = img.nodeName.toUpperCase() === "IMG" ? img : null;
        
        // Provide image with a unique PRIL id if one does not already exist for the image.
        if(_image && !_image.getAttribute("data-prilId")) {
            _id = Math.floor(Math.random() * 10000);
            _image.setAttribute("data-prilId", _id);
        }
    }
    
    // Remove src value in image, so background image (controlled by media queries) determines display.
    function _removeImgSrc() {
        if(_image) {
            _image.src = "";
        }
    }
    
    function _createBreakpoint(min, max, path) {
        if(arguments.length === 3 && Number.isInteger(min) && Number.isInteger(max) && min < max) {
            var breakpoint = document.createElement("style");
            
            breakpoint.textContent = "@media only screen and (min-width: " + min + "px) and (max-width: " + max + "px) { \
                img[data-prilId=\"" + _id + "\"] { \
                background-image: url(" + path + ");}}";
        
            return _image.parentNode.insertBefore(breakpoint, _image);
        } else {
            return null;
        }
    }
    
    return {
        add: function(min, max, path) {
            // Intentional tight coupling between script and image.
            _registerImage(document.currentScript.previousElementSibling);
            
            _createBreakpoint(min, max, path);
            
            _removeImgSrc();
        }
    };
}());
