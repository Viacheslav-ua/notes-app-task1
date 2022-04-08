import { v4 as uuidv4 } from 'uuid'
import rendering from './rendering'

const createNote = (data) => {
  const newNote = {
    id: uuidv4(),
    name: '',
    created: new Date().toLocaleDateString(),
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

const closeNewNote = (data) => {
  data.notes.splice(-1, 1)
  rendering(data)
}

const editNote = (data, id) => {
  const index = data.notes.findIndex(item => item.id === id)
  if (index === -1) {
    return
  }
  data.notes[index].isEdit = true
  rendering(data)
  const elSelect = document.querySelector('#js-select')
  const btnCreate = document.querySelector('#js-btn-create')
  btnCreate.disabled = true
  const elInputName = document.querySelector('#js-input-name')
  elInputName.value = data.notes[index].name
  const elInputContent = document.querySelector('#js-input-content')
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

const saveNote = (data, id) => {
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
const removeNote = (data, id) => {
  if (!window.confirm("Do you really want to delete this?")) {
    return
  }
  const indexDel = data.notes.findIndex(item => item.id === id)
  if (indexDel !== -1) {
    data.notes.splice(indexDel, 1)
    rendering(data)
  }
}

const toggleView = (data) => {
  if (data.viewArchive) {
    data.viewArchive = false
  } else {
    data.viewArchive = true
  }
  rendering(data)
}

const toggleArchive = (data, id) => {
  const index = data.notes.findIndex(item => item.id === id)
  if (index !== -1) {
    if (data.notes[index].isArchive) {
      data.notes[index].isArchive = false
    } else {
      data.notes[index].isArchive = true
    }
    rendering(data)
  }
}

const removeAll = (data) => {
  if (!window.confirm("Do you really want to delete all entries?")) {
    return
  }
  for (let i = 0; i < data.notes.length; i++) {
    data.notes.splice(i)
  }
  rendering(data)
}

function registerDates(str, dates) {
  const strDate = str.match(/\d{1,2}\.\d{1,2}\.\d{4}/)
  if (!strDate) {
    return
  }
  console.log('find', dates.find(item => item === strDate[0]))
  if (dates.find(item => item === strDate[0])) {
    return
  }
  return strDate[0]
}

export default {
  createNote,
  closeNewNote,
  saveNote,
  removeNote,
  toggleView,
  toggleArchive,
  removeAll,
  editNote,
}