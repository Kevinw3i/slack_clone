import $ from 'jquery';
window.jQuery = $
window.$ = $

window.initShare = function () {
  $('.share-btn').click(function (event) {
    event.preventDefault()
    // 抓綁在 .share-btn 上面的 data-message
    const content = $(this).data('message')
    // 抓綁在 .share-btn 上面的 data-id
    const id = $(this).data('id')
    // 將 id 與 content 指定到 form 裡面的欄位
    $('.select-message').html(content)
    $('#share_message_id').val(id)
    // 顯示 popup
    $('.popup').show()
  })
}

$(document).ready(function () {
  window.initShare()
  $('.cancel').click(function (event) {
    event.preventDefault()
    $('.popup').hide()
  })
})