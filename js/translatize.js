(function()
{
    'use strict';
    $('#submit').click(
        function(event)
        {
            event.preventDefault();
            let make = $get(
                `https://translate.yandex.net/api/v1.5/tr.json/translate ?key=trnsl.1.1.20161115T161210Z.4d649a3b3fe8724e.b7d41665eccf337b03ed8e6e85dda10f353725ec&text=${input}&lang=en-ru>`
            );
            for (var i = 0; i < 5; i++)
            {
                if (i % 2 === 0)
                {
                    make = $get(
                        "https://translate.yandex.net/api/v1.5/tr.json/translate ?key=trnsl.1.1.20161115T161210Z.4d649a3b3fe8724e.b7d41665eccf337b03ed8e6e85dda10f353725ec&text=" +
                        make + "&lang=ru-en>"
                    );
                    console.log(make);
                }
                else
                {
                    make = $get(
                        "https://translate.yandex.net/api/v1.5/tr.json/translate ?key=trnsl.1.1.20161115T161210Z.4d649a3b3fe8724e.b7d41665eccf337b03ed8e6e85dda10f353725ec&text=" +
                        make + "&lang=en-ru>"
                    );
                    console.log(make);
                }
            }
            console.log(make);
        });

    $("#poems").click(

        function()
        {
            let poems = $get("http://poetrydb.org/title").titles;
            console.log(poems);
            let random = Math.floor(Math.random() * titles.length);
            console.log(random);
            let poem = $get("http://poetrydb.org/title/" +
                poems[random] +
                "/lines.json").lines;
            console.log(poem);
            $("#textarea1").text(poem);
        });
})
"http://poetrydb.org/title/" +
poems[random] +
    "/lines.json").lines;
console.log(poem);
$("#textarea1").text(poem);
});
})
