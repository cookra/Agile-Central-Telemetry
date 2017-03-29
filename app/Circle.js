Ext.define('Circle', {
    type: 'circle',
    fill: 'red',
    radius: 10,
    cx: 0,
    cy: 0,
    group: 'circles',

    constructor: function (x, y) {
        console.log(x,y);
        this.cx = x;
        this.cy = y;
    }
});