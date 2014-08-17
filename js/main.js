var NavigationCache = new Array();

function setPage(page, title) {
    $.get('ajax/' + page.substr(1, page.length) + '.k', function(data){
        $('main').html(data);
        NavigationCache[page] = data;
        history.pushState({page: page, type: "page"}, document.title + title, page);
        $(".btn-group button").removeClass('active');
        $('button[data-action="'+page+'"]').addClass('active');
        $("dt .item-h1").tooltip({placement: 'bottom'});
        $(".portfolio-item.page1").show();
    })
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( $email ) ) {
        return false;
    } else {
        return true;
    }
}

$(function() {
    if (window.location.hash.length > 0)
    {
        setPage(window.location.hash, '');
    }
    else
    {
        setPage('#development', '');
    }

    NavigationCache[window.location.hash] = $('main').html();
    history.pushState({page: window.location.hash, type: "page"}, document.title, window.location.hash);

    if (history.pushState) {
        window.onpopstate = function(event) {
            if (event.state.type.length > 0) {
                if (NavigationCache[event.state.page].length>0) {
                    $('main').html(NavigationCache[event.state.page]);
                }
            }
        }

        $(".btn-group").on("click", "button", function(){
            setPage($(this).attr('data-action'), $(this).attr('title'));
            return false;
        })
    }

    $("main").on('click', '.pagination li', function(){
        $(".portfolio-item").hide();
        $(".pagination ul > li").removeClass("active");
        var page = $(this).attr("data-page");
        $(this).addClass("active");
        $(".portfolio-item." + page).show();
    });

    $(document).on("submit", "form", function(e){
        e.preventDefault();
        var noError = true;

        if ($("#name").val().length == 0)
        {
            noError = false;
            $("#error-name").show();
        }
        else
        {
            $("#error-name").hide();
        }

        if ($("#email").val().length == 0 || !validateEmail($("#email").val()))
        {
            noError = false;
            $("#error-email").show();
        }
        else
        {
            $("#error-email").hide();
        }

        if ($("#message").val().length == 0)
        {
            noError = false;
            $("#error-message").show();
        }
        else
        {
            $("#error-message").hide();
        }

        if (noError)
        {
            var data = $("form").serialize();
            $.post('http://mail.kanekt.ru/send',data,function(data){

            }).done(function(data) {
                    $(".email-send").text('Сообщение отправлено');
                    $("#reset").click();
                }).fail(function(data) {
                    $(".email-send").text('Сообщение отправлено');
                    $("#reset").click();
                });
        }
        return false;
    });
});