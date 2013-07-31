Ext.define('W8P.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Audio'
    ],
    config: {
        items: [
            {
                title: 'W8P',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Home'
                },

                html: [
                    "<a href=\"/#login\">login</a>"
                ].join("")
            }
        ]
    }
});
