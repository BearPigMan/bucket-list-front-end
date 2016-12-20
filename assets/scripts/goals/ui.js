'use strict';

$('.post-response-container').hide();
$('.patch-response-container').hide();

const failure = (error) => {
  console.log(error);
};

const patchFailure = (error) => {
  $('.patch-response-container').show();
  $('#click-marker-modal').on('hidden.bs.modal', function(){
    $('.patch-response-container').hide();
    $('.click-title-field').val('');
    $('.click-description-field').val('');
  });
};

const postFailure = (error) => {
  $('.post-response-container').show();
  $('#create-marker-modal').on('hidden.bs.modal', function(){
    $('.post-response-container').hide();
    $('.create-title-field').val('');
    $('.create-description-field').val('');
  });
};

module.exports = {
  failure,
  patchFailure,
  postFailure,
};
