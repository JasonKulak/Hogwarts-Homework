


// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

////////
//Year 1
////////

$(() => {

    
	// put jQuery in here
    $container = $("#container")
    //console.log($container)

    $h1 = $("<h1>")
    //console.log($h1)
    $h1.text("Hogwarts")
    //console.log($h1)
    $container.append($h1)

////////
//Year 2
////////

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
    $container.append($h4)

    const $h4a = $("<h4>")
    $h4a.text("Hawthorn Wand with Dragon Heartstring Core")
    $container.append($h4a)

    ////////
    //Year 3
    ////////

    const $ul = $("<ul>")
    .attr("storage", "trunk")
    $container.append($ul)
    
   const $li = $("<li>")
   $li.text("butter beer")
   $ul.append($li)

   const $li1 = $("<li>")
   $li1.text("invisibility cloak")
   $li1.addClass("secret")
   $ul.append($li1)

   const $li2 = $("<li>")
   $li2.text("magic map")
   $li2.addClass("secret")
   $ul.append($li2)

   const $li3 = $("<li>")
   $li3.text("time turner")
   $li3.addClass("secret")
   $ul.append($li3)

   const $li4 = $("<li>")
   $li4.text("leash")
   $li4.addClass("cat")
   $ul.append($li4)

   const $li5 = $("<li>")
   $li5.text("Berttie Bott's Every Flavor [Jelly] Beans")
   $ul.append($li5)

   ////////
   //Year 4
   ////////

   const $h5 = $("<h5>")
   $h5.text("Spring 2017")
   $container.append($h5)

   const $table = $("<table>")
   $container.append($table)

   const $thred = $("<thred>")
   $table.append($thred)

   const $th = $("<th>")
   $th.text("Day")
   $thred.append($th)

   const $th2 = $("<th>")
   $th2.text("Classes")
   $thred.append($th2)

   const $tr = $("<tr>")
   $table.append($tr)

   const $td = $("<td>")
   $td.text("Monday")
   $tr.append($td)

   const $td2 = $("<td>")
   $td2.text("Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.")
   $tr.append($td2)

   const $tr2 = $("<tr>")
   $table.append($tr2)

   const $tr3 = $("<tr>")
   $table.append($tr3)

   const $tr4 = $("<tr>")
   $table.append($tr4)

   const $tr5 = $("<tr>")
   $table.append($tr5)

////////
//Year 5
////////

   $h4a.remove()

   $li.remove()

   const $h4b = $("<h4>")
   $h4b.text("I HAVE A NEW WAND!!! Holly Wand with Unicorn Hair Core")
   $h4b.insertAfter($h4)

   $h4.remove()
    $h4.insertAfter($table)
    $h4.insertBefore($h4b)

////////
//Year 6
////////

$(".secret").hide("slow").delay(2000)
$(".secret").show("slow")
$li4.addClass("cabbage")
$li4.removeClass("cabbage")

////////
//Year 7
////////

$h5.replaceWith("Fall 2018")

const $li6 = $("<li>")
$li6.text("Butter Beer")
$ul.prepend($li6)

.attr("storage", "chest")
});


