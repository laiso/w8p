Ext.define('W8P.controller.Playlist', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            playlistView: 'playlist',
            titlebar: 'titlebar',
            audio: 'audio'
        },
        control: {
            playlist: {
                itemtap: 'start'
//                show: 'refresh'
            }
        },
        playlist: null
    },
    launch: function () {
        var me = this;

        this.setPlaylist(Ext.create('W8P.model.Playlist'));
        this._playlist.authenticate(function(){
            me.loadMusic();
        });
    },
    loadMusic: function(){
        var me = this;
        me._playlist.getAllMusic(function(error, data){
            if(error){
                alert(error);
            }

            me.getPlaylistView().setData(data);
        });
    },
    start: function(list, index, target, record, e){
        var me = this;
        this._playlist.getMusicAt(index, function(error, music){
            me.getTitlebar().setTitle(music.filename);
            var audio = me.getAudio();
            audio.setUrl(music.url);
            audio.play();
        });
    }
});
