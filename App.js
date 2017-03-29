Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function () {

        this.add(Ext.create('Ext.container.Container', {
            layout: 'fit',
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
        var myTarget = [];
        var posX = 60;
        for (var x = 0; x < 3; x++) {
            myTarget[x] = Ext.create('Circle', posX, posX);
            posX = posX + 30;
        }
        console.log(myTarget);
        var mySurface = Ext.create('Ext.draw.Component', {
            id: 'asasdadasadasasd',
            viewbox: false,
            height: 500,
            items: [myTarget],
        });
        console.log(mySurface);
        this.down('#mypanel').add(mySurface);
    }


});