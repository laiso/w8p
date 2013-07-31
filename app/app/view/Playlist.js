Ext.define('W8P.view.Playlist', {
    extend: 'Ext.List',
    xtype: 'playlist',
    requires: [
        'Ext.TitleBar',
        'Ext.Audio',
        'Ext.data.Store'
    ],
    scrollable: {
        direction: 'vertical'
    },
    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'W8P'
            },
            {
                xtype: 'audio',
                docked: 'top'
            }
        ],
        itemTpl: '{filename}'
    }
});
