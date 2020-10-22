
// search filter functionality
$(document).ready( function() {
    // declare a variable that will get my images
    let images = document.getElementsByTagName('a');
        // use an event that will keep track of what is entered in the search bar
        $('#search').on( 'keyup', function() {
        // store the search bar entry in a variable
        let search = $('#search').val().toLowerCase();
        // loop through all of my images
        for ( var i = 0; i < images.length; i++ ){
            // look for a particular attribute on each image
            let searchVal = images[i].getAttribute('data-caption');
            // if an image has that attribute, show it
            if ( searchVal.toLowerCase().indexOf(search) > -1 ) {
                images[i].parentElement.style.display = '';
            } 
            // if not, hide it
            else {
                images[i].parentElement.style.display = 'none';
            }
        }
    });
});

// generate HTML photo gallery

const dataCaption = [
    'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
    'The lake was so calm today. We had a great view of the snow on the mountains from here.',
    'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
    'It was amazing to see an iceberg up close, it was so cold but didn’t snow today. ',
    'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
    'Fall is coming, I love when the leaves on the trees start to change color.',
    'I drove past this plantation yesterday, everything is so green!',
    'My summer vacation to the Oregon Coast. I love the sandy dunes!',
    'We enjoyed a quiet stroll down this countryside lane.',
    'Sunset at the coast! The sky turned a lovely shade of orange.',
    'I did a tour of a cave today and the view of the landscape below was breathtaking.',
    'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
]

const alt = [
    'Hay Bales',
    'Lake',
    'Canyon',
    'Iceberg',
    'Desert',
    'Fall',
    'Plantation',
    'Dunes',
    'Countryside Lane',
    'Sunset',
    'Cave',
    'Bluebells'
]

const gallery = document.querySelector('#gallery');

for ( let i = 0; i < alt.length; i++ ) {
    gallery.innerHTML += `
        <div class="box">
            <a href="photos/${[i+1]}.jpg" data-caption="${dataCaption[i]}">
                <img src="photos/thumbnails/${[i+1]}.jpg" alt="${alt[i]}">
            </a>
        </div>
    `;
}

// light box plugin for photo gallery
baguetteBox.run('.gallery');
