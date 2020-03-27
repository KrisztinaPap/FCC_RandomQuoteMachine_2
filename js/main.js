$(document).ready(function(){

    var quotes = [
        { text: '"Life is like riding a bicycle. To keep your balance, you must keep moving."' , author: " - Albert Einstein"},
        { text: '"I have no special talents. I am only passionately curious."', author: " - Albert Einstein"},
        { text: '"Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy."', author: " - Albert Einstein"},
        { text: '"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom."', author: " - Isaac Asimov"},
        { text: '"All we have to decide is what to do with the time that is given us."', author: " - J. R. R. Tolkien"},
        { text: '"Not all those who wander are lost."', author: " - J. R. R. Tolkien"},
        { text: '"The Answer to the ultimate question of Life, The Universe and Everything is...42!"', author: " - Douglas Adams"},
        { text: '"Stories of imagination tend to upset those without one."', author: " - Terry Pratchett"},
        { text: '"Literature is the most agreeable way of ignoring life."', author: " - Fernando Pessoa"},
        { text: '"Literature is a textually transmitted disease, normally contracted in childhood."', author: " - Jane Yolen"},
        { text: '"He liked the mere act of reading, the magic of turning scratches on a page into words inside his head."', author: " - John Green"},
        { text: '"Make improvements, not excuses. Seek respect, not attention"', author: " - Roy T. Bennett"}
    ];

    // A random quote is displayed when the page loads

    var randomNumber = Math.floor(Math.random() * quotes.length);
    $('#text').html(quotes[randomNumber].text);
    $('#author').html(quotes[randomNumber].author);

    // New-quote button: shows a new quote when pressed

    $('#new-quote').bind('click', function(){
        var randomNumber = Math.floor(Math.random() * quotes.length);
        $('#text').html(quotes[randomNumber].text);
        $('#author').html(quotes[randomNumber].author);

        // Tweet-quote button: Tweets active quote
        $('#tweet-quote').on('click', function() {
            var url = 'https://twitter.com/intent/tweet?text=' + quotes[randomNumber]["text"] + quotes[randomNumber]["author"];
            window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0'); 
        });
    });

});