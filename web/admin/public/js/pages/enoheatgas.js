var listsInParagraphs = $('.col-sm-100').find('.wysiwyg ul');

function setStylesToListsInParagraphs(listsInParagraphs) {
    listsInParagraphs.each(function () {
        $(this).addClass('list-1');
    });
}

$(document).ready(function () {
    setStylesToListsInParagraphs(listsInParagraphs);
});