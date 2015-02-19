var path = require('path');

function Helper(dir) {
    this.dir = dir ? dir : __dirname;
};

Helper.prototype = {
    resolve: function(dir) {
        return path.join(this.dir, dir);
    }
}

module.exports = function(dir) {
    return new Helper(dir);
};
