import { v4 as uuidv4 } from 'uuid'
import rendering from './rendering'

export default (data) => {
  const newNote = {
    id: uuidv4(),
    name: '',
    created: new Date().toLocaleDateString('en-GB'),
    category: "",
    categoryKey: "",
    content: "",
    dates: [],
    isArchive: false,
    isEdit: true,
    isNew: true,
  }

  data.notes.push(newNote)
  rendering(data)

  const elSelect = document.querySelector('#js-select')
  const btnCreate = document.querySelector('#js-btn-create')
  btnCreate.disabled = true

  const categoryOptionArr = data.category.map((item => {
    const elOptionCategory = document.createElement('option')
    elOptionCategory.value = item.value
    elOptionCategory.textContent = item.desk
    return elOptionCategory
  }))

  elSelect.append(...categoryOptionArr)
}