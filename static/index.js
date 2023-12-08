$(document).ready(function(){
  $('.slides').slick({
      slidesToShow: 4,
  });
});

/*-------------------------------------- */

function createPost(title,distance,type,details) {

    var post = Handlebars.templates.post({
      title: title,
      distance: distance,
      type: type,
      details: details
    })
  

    return post
      
}
  
function handleModalAcceptClick() {
  var title = document.getElementById('activity-text-input').value.trim()
  var distance = document.querySelector('#activity-distance-fieldset input:checked').value
  var typeOp = document.querySelectorAll('#activity-type-fieldset input[type="checkbox"]:checked')
  var checkedValues = [];
  typeOp.forEach(function(checkbox){
      checkedValues.push(checkbox.value);
  })
  var type = checkedValues.join(', ')

  var details = document.getElementById('activity-detail-input').value.trim()

  if (!distance || !title || !type || !details) {
      alert("You must fill in all of the fields!");
  } else {
      var newPost = createPost(title, distance, type, details);
      var postContainer = document.querySelector('#posts');
      postContainer.insertAdjacentHTML("beforeend", newPost);
      hideModal();
  }
}
  
  
function showModal() {
  
    var modal = document.getElementById('post-activity-modal');
    var modalBackdrop = document.getElementById('modal-backdrop');
  
    modal.classList.remove('hidden');
    modalBackdrop.classList.remove('hidden');
  
}
  
  
// function clearModalInputs() {
  
//     var modalInputElements = document.querySelectorAll('#post-activity-modal input')
//     for (var i = 0; i < modalInputElements.length; i++) {
//       modalInputElements[i].value = '';
//     }

//     var checkboxElements = document.querySelectorAll('#post-activity-modal> input[type="checkbox"]');
//     for (var j = 0; j < checkboxElements.length; j++) {
//     checkboxElements[j].checked = false;
//   }
  
// }

function clearModalInputs() {
  // Clear text input values
  var activityTextInput = document.getElementById('activity-text-input');
  activityTextInput.value = '';

  var activityDetailInput = document.getElementById('activity-detail-input');
  activityDetailInput.value = '';

  var activityDistanceRadioButtons = document.querySelectorAll('#activity-distance-fieldset input[type="radio"]');
  activityDistanceRadioButtons[0].checked = true;

  // Clear checkbox selection
  var activityTypeCheckboxes = document.querySelectorAll('#activity-type-fieldset input[type="checkbox"]');
  for (var j = 0; j < activityTypeCheckboxes.length; j++) {
    activityTypeCheckboxes[j].checked = false;
  }
}
  
  
function hideModal() {
  
    var modal = document.getElementById('post-activity-modal');
    var modalBackdrop = document.getElementById('modal-backdrop');
  
    modal.classList.add('hidden');
    modalBackdrop.classList.add('hidden');
  
    clearModalInputs();
  
}
  
  
  /*
   * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
   */
window.addEventListener('DOMContentLoaded', function () {
  
    var addPostButton = document.getElementById('post-activity-button');
    addPostButton.addEventListener('click', showModal);
  
    var modalAcceptButton = document.getElementById('modal-accept');
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  
    var modalHideButtons = document.getElementsByClassName('modal-hide-button');
    for (var i = 0; i < modalHideButtons.length; i++) {
      modalHideButtons[i].addEventListener('click', hideModal);
    }
  
});