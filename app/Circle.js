Ext.define('Circle', {
    extend: 'Node',
    config: {
        name: 'Circle',
        type: 'circle',
    },
    constructor: function (x, y, type) {
        this.x = x;
        this.y = y;
        console.log(this.config,x,y, ' CHILD');
        console.log(this.parentName, ' CHILD');
        console.log(this.radius, ' CHILD');
        console.log(this.name, ' CHILD');
        console.log(this.parentName, ' CHILD');
        console.log(this.group, ' CHILD');
        console.log(this.type, ' CHILD');
        this.fill = this._typeDefiner(type);
    }
});