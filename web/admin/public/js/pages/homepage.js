var listsInParagraphs = $('.customer-options').find('div.wysiwyg ul');

function setStylesToListsInParagraphs(listsInParagraphs) {
    listsInParagraphs.each(function () {
        $(this).addClass('list-1');
    });
}

$(document).ready(function () {
    setStylesToListsInParagraphs(listsInParagraphs);
});
