
baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');

// create a function
$(document).ready( function() {
    // declare a variable that will get my images
    let images = document.getElementsByTagName('a');
        // use an event that will keep track of what is entered in the search bar
        $('#search').on( 'keyup', function() {
        // tell it what you want to happen when you type
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

