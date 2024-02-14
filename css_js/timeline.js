var bounds = [
    {min:0,max:768,func:none},
    {min:758,max:2560,func:timeline},
];

// define a resize function. use a closure for the lastBoundry determined.
var resizeFn = function(){
    var lastBoundry; // cache the last boundry used
    return function(){
        var width = window.innerWidth; // get the window's inner width
        var boundry, min, max;
        for(var i=0; i<bounds.length; i++){
            boundry = bounds[i];
            min = boundry.min || Number.MIN_VALUE;
            max = boundry.max || Number.MAX_VALUE;
            if(width > min && width < max 
               && lastBoundry !== boundry){
                lastBoundry = boundry;
                return boundry.func.call(boundry);            
            }
        }
    }
};
$(window).resize(resizeFn()); // bind the resize event handler
$(document).ready(function(){
    $(window).trigger('resize'); // on load, init the lastBoundry
});

function none() {

}

function timeline() {
    $(function(){
        $().timelinr({
            orientation: 	'vertical',
            issuesSpeed: 	500,
            datesSpeed: 	1000,
            startAt:		1
        })
    });
}