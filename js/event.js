parseFeed();

function parseFeed() {
$.getFeed({
    url: 'http://utaalumni.org/controls/cms_v2/components/rss/rss.aspx?sid=1379&gid=1&calcid=895&page_id=61',
    dataType: "xml",
    success: function(feed) {

    $('#feedresult').empty();

    var html = '<ul data-role="listview">';

    for(var i = 0; i < feed.items.length; i++) {

        var item = feed.items[i];

        html += '<li>'
        + '<a href="#article?id='
        + i
        + '">'
        + item.title
        + '</a>'
        + '</li>';
    }

    html = html + '</ul>';

    $('#feedresult').append(html);
    $('#main').page('destroy').page();

    }});
};