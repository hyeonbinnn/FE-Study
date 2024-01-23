var Me = /** @class */ (function () {
    function Me(name) {
        this.name = name;
    }
    Me.prototype.sayHoo = function () {
        return '안녕~' + this.name;
    };
    return Me;
}());
var me = new Me('덕배');
console.log(me.sayHoo());
