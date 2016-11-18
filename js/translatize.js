(function()
{
    'use strict';
    $('#submit').click(
        function(event)
        {
            event.preventDefault();
            eventDefault();
        });

    $("#poems").click(

        function(event)
        {
            event.preventDefault();
            let poems = $get("http://poetrydb.org/title").titles;
            console.log(poems);
            let random = Math.floor(Math.random() * titles.length);
            console.log(random);
            let poem = $get("http://poetrydb.org/title/" +
                poems[random] +
                "/lines.json").lines;
            console.log(poem);

        });
})
