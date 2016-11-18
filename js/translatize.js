'use strict';


$('#submit').click(
    function(event)
    {
        let make;
        event.preventDefault();
        $.get(
                `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161115T161210Z.4d649a3b3fe8724e.b7d41665eccf337b03ed8e6e85dda10f353725ec&text=${input.value}&lang=en-ja`
            )
            .done(function(data)
            {

                make = data.text[0];
            })
            .then(function()
            {

                for (var i = 0; i < 5; i++)
                {
                    if (i % 2 === 0)
                    {
                        $.get(
                            `http://galvanize-cors-proxy.herokuapp.com/https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161115T161210Z.4d649a3b3fe8724e.b7d41665eccf337b03ed8e6e85dda10f353725ec&text=${make}&lang=ja-en`
                        ).done(function(data)
                        {
                            make = data.text[0];
                        });
                    }
                    else
                    {
                        $.get(
                            `http://galvanize-cors-proxy.herokuapp.com/https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161115T161210Z.4d649a3b3fe8724e.b7d41665eccf337b03ed8e6e85dda10f353725ec&text=${make}&lang=en-ja`
                        ).done(function(data)
                        {
                            make = data.text[0];
                        });

                    }
                }

            }).then(function()
            {
                $.get(
                    `http://galvanize-cors-proxy.herokuapp.com/https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161115T161210Z.4d649a3b3fe8724e.b7d41665eccf337b03ed8e6e85dda10f353725ec&text=${make}&lang=ja-en`
                ).done(function(data)
                {
                    make = data.text[0];
                    $('#output').val(make);
                    $('#output').trigger('autoresize');
                });

            })
    });
$("#poems").click(

    function(event)
    {
        let titles = [];
        let random;
        event.preventDefault();
        $.get(
                "http://galvanize-cors-proxy.herokuapp.com/http://poetrydb.org/title"
            )
            .done(function(data)
            {
                let poemTitles = data.titles
                for (var i = 0; i < poemTitles.length; i++)
                {

                    titles.push(poemTitles[i]);
                }
                random = Math.floor(Math.random() * titles.length);
            })
            .then(function()
            {
                $.get(
                        "http://galvanize-cors-proxy.herokuapp.com/http://poetrydb.org/title/" +
                        titles[random] +
                        "/lines.json")
                    .done(function(data)
                    {
                        let poetry = ''
                        for (var i = 0; i < data[0].lines.length; i++)
                        {
                            poetry += data[0].lines[i] + ' \n';
                        }
                        console.log(poetry);
                        $("#input").val(poetry);
                        $('#input').trigger('autoresize');
                    });
            })
    });
