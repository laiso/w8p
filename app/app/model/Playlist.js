Ext.define('W8P.model.Playlist', {
    extend: 'Ext.data.Model',
    config: {
        clientKey: 'zxjz9gshitt1y1c',
        dropbox: null,
        dir: 'Music',
        data: []
    },
    constructor: function (config) {
        this.initConfig(config);
        return this;
    },
    authenticate: function(callback){
        var self = this;
        var client = new Dropbox.Client({key: this.getClientKey()});

        if(client.isAuthenticated()){
            this._dropbox = client;
            callback();
            return;
        }

        client.authDriver(new Dropbox.AuthDriver.Redirect());
        client.authenticate(function(error, dropbox){
            if(error){
                alert(error);
                return;
            }

            self._dropbox = dropbox;
            callback();
        });
    },
    getAllMusic: function (callback) {
        var me = this;
        this._dropbox.readdir(this._dir, function(error, result){
            me._data = [];
            Ext.Array.each(result, function(item){
                me._data.push({filename: item});
            });
            callback(error, me._data);
        });
    },
    getMusicAt: function(index, callback){
        var music = this._data[index];
        this._dropbox.makeUrl(this._dir+'/'+music.filename, {download: true, longUrl: false}, function(error, item){
            music.url = item.url;
            callback(error, music);
        });
    }
});
