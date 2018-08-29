var common = require("./sound-common");

var Sound = (function(_super) {
    __extends(Sound, _super);

    function Sound() {
        _super.apply(this, arguments);

        this._url = NSURL.fileURLWithPath(this._path);
        this._player = new AVAudioPlayer();
        this._player.initWithContentsOfURLError(this._url);
        this._player.prepareToPlay();
    }
    Sound.prototype.setVolume = function(volume) {
        if (typeof volume === 'number' && volume >= 0.0 && volume <= 1.0)
            this._player.volume = volume;
        else
            console.error("Volume not set; volume outside of range 0.0 - 1.0");
    };
    Sound.prototype.play = function() {
        this._player.play();
    };
    Sound.prototype.stop = function() {
        this._player.stop();
    };
    Sound.prototype.reset = function() {
        this._player.stop();
        this._player.prepareToPlay();
        this._player.currentTime = 0;
    };
    Sound.prototype.release = function() {
        if (this._player) {
            this._player.release();
            this._player = null;
        }
    };
    return Sound;
})(common.Sound);
exports.Sound = Sound;

exports.create = function(path) {
    return new Sound(path);
};