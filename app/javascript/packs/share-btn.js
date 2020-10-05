import $ from 'jquery';

window.initShare = function () {
  $('.share-btn').click(function (event) {
    event.preventDefault()
    // 抓綁在 .share-btn 上面的 data-message
    const content = $(this).data('message')
    // 抓綁在 .share-btn 上面的 data-id
    const id = $(this).data('id')
    // 將 id 與 content 指定到 form 裡面的欄位
    console.log($(this))
    $('.select-message').html(content)
    $('#share_message_id').val(id)
    // 顯示 popup
    $('.popup').show()
  })
}

$(document).ready(function () {
  window.initShare()
  $('.cancel').click(function (event) {
    event.preventDefault();
    $('.popup').hide();
  });

});

document.querySelectorAll('.share-btn').forEach((e)=>{
  e.addEventListener('click', function (e) {
    let shareContent = e.target.parentNode.querySelector('.content').textContent
    let selectMessage = document.querySelector('.select-message')
    selectMessage.textContent = shareContent
    let input = document.getElementById('share_message_id')
    input.value = this.dataset.id
  })
})