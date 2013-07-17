$(function() {
    var h = $(document).height()-250;
    if (h < 700) h = 700;
    $('.body_middle').height(h);
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
    })
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

        $("#icons li").live("click", function(){
            setPage($(this).attr('href'), $(this).attr('title'));
            return false;
        })
    }

});

