(function () {
    // interface labelledObjValue {
    //   label: string,
    //   color?: string,
    // }
    var mySearch;
    mySearch = function (sur, sub) {
        var result = sur.search(sub);
        return result > -1;
    };
    console.log(mySearch("string", "t"));
    function getCounter() {
        var counter = function (start) {
            // console.log(start, "///");
            // return start.toString();
        };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    var c = getCounter();
    c(10);
    c.reset();
    console.log(c(10));
})();
