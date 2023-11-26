
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
$(() => {
    const $container = $('#container');	// put jQuery in here
    console.log($container)


const $h1 = $('<h1>')
$container.append($h1)
$h1.text('Hogwarts')

});