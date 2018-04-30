var common = require("./sound-common");

var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        _super.apply(this, arguments);

        this._volume = 1.0;
        this._player = new android.media.SoundPool(1, android.media.AudioManager.STREAM_MUSIC, 0);
        this._soundId = this._player.load(this._path, 1);
    }
    Sound.prototype.setVolume = function (volume) {
      if(typeof volume === 'number' && volume >= 0.0 && volume <= 1.0)
        this._volume = volume;
      else
        console.error("Volume not set; volume outside of range 0.0 - 1.0");
    };
    Sound.prototype.play = function () {
        this._player.play(this._soundId, this._volume, this._volume, 1, 0, 1.0);
    };
    Sound.prototype.stop = function () {
        this._player.stop(this._soundId);
    };
    Sound.prototype.reset = function () {
    };
    return Sound;
})(common.Sound);
exports.Sound = Sound;

exports.create = function(path) {
    return new Sound(path);
};
