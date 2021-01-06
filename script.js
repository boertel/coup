Array.from(document.querySelectorAll('h2:not(#mw-toc-heading)')).reduce((prev, current, index) => {
  let ol = current.nextElementSibling
  if (ol.tagName !== 'OL') {
      ol = ol.nextElementSibling
  }
  if (ol.tagName === 'OL') {
    return prev.concat(Array.from(ol.querySelectorAll('li')).map((li) => li.innerText).map(li => {
          const [date, text = ''] = li.split(':');
          const year = date.match(/\d{4}/)
          return {
              date,
              year: year ? parseInt(year[0], 10) : null,
              country: current.innerText,
              text: text.trim(),
          }
      }))
  } else {
    console.log(ol.tagName, ol)
  }
  return prev
}, [])
