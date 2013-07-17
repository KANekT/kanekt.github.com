$(function() {
    $("a[href^='http']").attr('target','_blank');
    $("#icons li").tooltip({placement: 'bottom'});
});

var NavigationCache = new Array();
$(document).ready(function(){
    if (window.location.hash.length > 0)
    {
        setPage(window.location.hash, '');
    }
    else
    {
        setPage('#development', '');
    }

    NavigationCache[window.location.hash] = $('#content').html();
    history.pushState({page: window.location.hash, type: "page"}, document.title, window.location.hash);
});

function setPage(page, title) {
    $.get('ajax/' + page.substr(1, page.length) + '.k', function(data){
        $('#content').html(data);
        NavigationCache[page] = data;
        history.pushState({page: page, type: "page"}, document.title + title, page);
        $(".btn-group button").removeClass('active');
        $('button[data-action="'+page+'"]').addClass('active');
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
    if (history.pushState) {
        window.onpopstate = function(event) {
            if (event.state.type.length > 0) {
                if (NavigationCache[event.state.page].length>0) {
                    $('#content').html(NavigationCache[event.state.page]);
                }
            }
        }

        $(".btn-group button").live("click", function(){
            setPage($(this).attr('data-action'), $(this).attr('title'));
            return false;
        })
    }

    $("#submit").live("click", function(e){
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
                $(".email-send").text('Сообщение отправлено');
            });
        }
        return false;
    });
});