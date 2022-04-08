import rendering from './rendering'

export default (data, id) => {
  const index = data.notes.findIndex(item => item.id === id)
  if (index === -1) {
    return
  }

  data.notes[index].isEdit = true
  rendering(data)

  const elSelect = document.querySelector('#js-select')
  const btnCreate = document.querySelector('#js-btn-create')
  const elInputName = document.querySelector('#js-input-name')
  const elInputContent = document.querySelector('#js-input-content')

  btnCreate.disabled = true
  elInputName.value = data.notes[index].name
  elInputContent.value = data.notes[index].content

  const categoryOptionArr = data.category.map((item => {
    const elOptionCategory = document.createElement('option')

    if (item.value === data.notes[index].categoryKey) {
      elOptionCategory.selected = true;
    }

    elOptionCategory.value = item.value
    elOptionCategory.textContent = item.desk
    return elOptionCategory
  }))

  elSelect.append(...categoryOptionArr)
}
