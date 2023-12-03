// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
	// put jQuery in here
    $container = $("#container")
    //console.log($container)

    $h1 = $("<h1>")
    //console.log($h1)
    $h1.text("Hogwarts")
    //console.log($h1)
    $container.append($h1)

    $h2 = $("<h2>")
    $h2.text("Jason")
    $container.append($h2)

    $h3 = $("<h3>")
    $h3.text("Gryffindor")
    $container.append($h3)

    $h4 = $("<h4>")
    $h4.text("Lord Stark")
    const $input = $("input")
    const val = $input.val();
    $h4.addClass("cat").text(val);
    // const wand = $input.wand();
    // $h4.text("Hawthorn Wand with Dragon Heartstring Core")
    
    $container.append($h4)
});
