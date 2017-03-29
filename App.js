Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function () {

        this.add(Ext.create('Ext.panel.Panel', {
            html: '<div id="content"></div>',
            layout: 'fit',
            height: 500,
            id: 'mypanel',
            itemId: 'mypanel',
            listeners: {
                afterrender: function () {
                    console.log('Container Created : Calling _build()');
                    this._build();
                },
                scope: this
            },
        }));

    },
    _build: function () {
        this.down('#mypanel').add(this._circle());
    },
    _circle: function () {
        var drawComponent = Ext.create('Ext.draw.Component', {
            viewBox: false,
            items: [{
                type: 'circle',
                fill: '#79BB3F',
                radius: 100,
                x: 100,
                y: 100
            }]
        });
        return drawComponent;
    }
});