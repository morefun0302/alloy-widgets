
//Use node.js .on() notation.
$.bottomNav.on('click', function(e){
    var button = e.source.id;

    alert("You clicked the " +button);
});
