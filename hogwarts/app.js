
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

});