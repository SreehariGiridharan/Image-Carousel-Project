document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        // Append the first item to the end of the slide
        document.querySelector('.slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        // Prepend the last item to the beginning of the slide
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });
});
