
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

});