
$(document).ready(function() {
    var first = $('.header-sidebar__linklist li').first().children('.header-sidebar__collapsible-panel');
    $(first).css('display','block');
    $(first).attr('aria-expanded', true);
    $(first).prev('.header-sidebar__linklist-button').addClass('toggleopen');
});
$(document).on('click', 'button.header-sidebar__linklist-button', function() {
    var panel = $(this).next("header-sidebar-collapsible-panel");
    var child = $(this).next("header-sidebar-collapsible-panel").find('.header-sidebar__sub-panel');
    if( $(panel).attr('aria-expanded') == 'false' ) {
        $(panel).attr('aria-expanded', true);
        $(panel).css('display','block');
        $(this).addClass('toggleopen');
    } else {
        $(panel).attr('aria-expanded', false);
        $(panel).css('display','none');
        $(this).removeClass('toggleopen');
    }
    return false;
})
