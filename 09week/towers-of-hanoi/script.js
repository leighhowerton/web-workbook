'use strict';

$(document).ready(function() {

  $('[data-block]').draggable({
    revert: 'invalid'
  });

  $('[data-stack]').droppable({
    drop: function(event, ui){
      let $last =
      ($(this).children().last()).data('block');
      // console.log(`last element on stack ${$last}`);
      let $dragging = $(ui.draggable).data('block');
      // console.log(`dragging element ${$dragging}`);
      if ($dragging > $last){
        $(ui.draggable).draggable('option ', 'revert', true);
      }else{
    $(ui.draggable).appendTo(this).attr('style',
    'position: "relative"');
    }
  }
});

function checkWin(){
  if($("[data-stack=3], [data-stack=2]")
.children())

}
