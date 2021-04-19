$(function() {
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});

/* function saveLocalLang(language) {
  let langs
  if (localStorage.getItem('langs') === null ) {
    langs = []
  } else {
    langs = JSON.parse(localStorage.getItem('langs'))
  }
  langs.push(language)
  localStorage.setItem('langs', JSON.stringify(langs))
}

function getLocalLang() {
  let langs
  if (localStorage.getItem('langs') === null ) {
    langs = []
  } else {
    langs = JSON.parse(localStorage.getItem('langs'))
  }
  langs.forEach(function (language) {
    let lang = langs[langs.length - 1]
    setTimeout( ()=> {
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    }, 0)
  });
} */
