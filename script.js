$(function() {

  $('.circle-p-wrapper').click(function() {
      var wrapper = $(this).parent();
      $(this).fadeOut(1000);
      $(wrapper.children('.info-pane')).fadeIn(1000);
  });

  // there's almost certainly a way to condense these, but I'm not sure
  // whether the callback structure supports making them one function
  // this hacky solution will have to do for \_(ツ)_/¯
  $('#vvvvvv').flip({
    front:'#vvvvvv-image',
    back: '#vvvvvv-text'
  });

  $('#waterpolo').flip({
    front:'#waterpolo-image',
    back:'#waterpolo-text'
  });

  $('#dartmouth').flip({
    front:'#dartmouth-image',
    back:'#dartmouth-text'
  });

  $('#gov').flip({
    front:'#gov-image',
    back:'#gov-text'
  });

  $('#cs').flip({
    front:'#cs-image',
    back:'#cs-text'
  });

  $('#sigep').flip({
    front:'#sigep-image',
    back:'#sigep-text'
  });

  $('#sigepalt').flip({
    front:'#sigepalt-image',
    back:'#sigepalt-text'
  });

  $('#undertable').flip({
    front:'#undertable-image',
    back:'#undertable-text'
  });

  $('#bonfire').flip({
    front:'#bonfire-image',
    back:'#bonfire-text'
  });

  $('#keybiscayne').flip({
      front:'#keybiscayne-image',
      back:'#keybiscayne-text'
  });

  $('#kid').flip({
      front:'#kid-image',
      back:'#kid-text'
  });

  $('#wallstreet').flip({
      front:'#wallstreet-image',
      back:'#wallstreet-text'
  });
});
