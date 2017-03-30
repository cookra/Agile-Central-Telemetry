Ext.define('Node', {

    parentName: 'Node',
    group: 'circles',
    radius: 20,
    fill: 'blue',
    opacity: 0.3,

    constructor: function () {
        console.log('C Node');
    },
    _typeDefiner: function (type) {
        if (type === 'story') {
            return '#266E5C';
        }
        if (type === 'task') {
            return '#FF9500';
        }
        if (type === 'feature') {
            return '#7D64B1';
        }
    }
});