
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
$(() => {
    const $container = $('#container');	// put jQuery in here
    console.log($container)


const $h1 = $('<h1>')
$container.append($h1)
$h1.text('Hogwarts')

const $name = $('<h2>')
$container.append($name)
$name.text('Rohan Sinha')

const $house = $('<h3>')
$container.append($house)
$house.text('Gryffindor')

const $pet = $('<h4>')
$container.append($pet)
$pet.text('Freddy')
$pet.addClass('owl')

const $wand = $('<h4>')
$container.append($wand)
$wand.text('Hawthorn Wand with Dragon Heartstring Core')

const $items = $('<ul>')
$container.append($items)
$items.attr("storage", 'trunk')

const $bbeer = $('<li>')
$items.append($bbeer)
$bbeer.text('butter beer')

const $cloak = $('<li>')
$items.append($cloak)
$cloak.text('invisibility cloak')
$cloak.addClass('secret')

const $map = $('<li>')
$items.append($map)
$map.text('magic map')
$map.addClass('secret')

const $clock = $('<li>')
$items.append($clock)
$clock.text('time turner')
$clock.addClass('secret')

const $owl = $('<li>')
$items.append($owl)
$owl.text('leash')
$owl.addClass('owl')

const $semester = $('<h5>')
$container.append($semester)
$semester.text('Spring 2017')

const $classes = $('<table>')
$container.append($classes)

const $thead = $('<thead>')
$classes.append($thead)

const $th1 = $('<th>')
$thead.append($th1)
$th1.text('Days') 

const $th2 = $('<th>')
$thead.append($th2)
$th2.text('Classes') 

const $tr1 = $('<tr>')
$classes.append($tr1)

const $td1 = $('<td>')
$tr1.append($td1)
$td1.text('Monday')

const $td2 = $('<td>')
$tr1.append($td2)
$td2.text('Herbology, Divination')

const $tr2 = $('<tr>')
$classes.append($tr2)

const $td3 = $('<td>')
$tr2.append($td3)
$td3.text('Tuesday')

const $td4 = $('<td>')
$tr2.append($td4)
$td4.text('History of Magic, Charms')

const $tr3 = $('<tr>')
$classes.append($tr3)

const $td5 = $('<td>')
$tr3.append($td5)
$td5.text('Wednesday')

const $td6 = $('<td>')
$tr3.append($td6)
$td6.text('Potions, Transfiguration')

const $tr4 = $('<tr>')
$classes.append($tr4)

const $td7 = $('<td>')
$tr4.append($td7)
$td7.text('Thursday')

const $td8 = $('<td>')
$tr4.append($td8)
$td8.text('Defense Against the Dark Arts, Quidditch practice')

const $tr5 = $('<tr>')
$classes.append($tr5)

const $td9 = $('<td>')
$tr5.append($td9)
$td9.text('Friday')

const $td10 = $('<td>')
$tr5.append($td10)
$td10.text('Javascript')

});