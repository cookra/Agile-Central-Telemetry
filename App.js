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
        var myTarget = Ext.create('Circle', 'circle', 20, 'blue', 20, 20);
        console.log(myTarget);
        var mySurface = Ext.create('Ext.draw.Component', {
            id: 'asasdadasadasasd',    
            viewbox: false,

            items: [myTarget],
        });
        console.log(mySurface);
        this.down('#mypanel').add(mySurface);

    }


});