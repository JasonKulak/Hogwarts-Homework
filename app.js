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
    // const $h4a = $("<h4>")
    // $h4a.text("Hawthorn Wand with Dragon Heartstring Core")
    // appendChild????
    $container.append($h4)

    const $ul = $("<ul>")
    //$ul = setAttribute("storage", "trunk");
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
});