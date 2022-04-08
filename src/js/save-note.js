import rendering from './rendering'

export default (data, id) => {
  const elInputName = document.querySelector('#js-input-name')
  const elSelect = document.querySelector('#js-select')
  const elInputContent = document.querySelector('#js-input-content')

  data.notes.find((item) => {
    if (item.id === id) {
      item.isEdit = false
      item.isNew = false
      item.name = elInputName.value
      item.categoryKey = elSelect.value
      item.category = data.category.find(item => item.value === elSelect.value).desk
      item.content = elInputContent.value

      const newData = registerDates(item.content, item.dates)
      if (newData) {
        item.dates.push(newData)
      }
      return rendering(data)
    }
  })
}

function registerDates(str, dates) {
  const strDate = str.match(/\d{1,2}[\.\/\-]\d{1,2}[\.\/\-]\d{4}/)
  if (!strDate) {
    return
  }
  const date = strDate[0].replace(/[\.\-]/g, '/')
  if (dates.find(item => item === date)) {
    return
  }
  return date
}