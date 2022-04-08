import './css/styles.css'
import notesStatic from './json/notes.json'
import categoryStatic from './json/category.json'
import rendering from './js/rendering'
import createNote from './js/create-note'
import saveNote from './js/save-note'
import closeNewNote from './js/close-form'
import editNote from './js/edit-note'
import removeAll from './js/remove-all'
import removeNote from './js/remove-note'
import toggleView from './js/toggle-view'
import toggleArchive from './js/toggle-archive'

const data = {
  viewArchive: false,
  notes: [...notesStatic],
  category: [...categoryStatic],
  statistic: [],
}

document.addEventListener('DOMContentLoaded', rendering(data))
const notesContainer = addEventListener('click', onClickBtn)

function onClickBtn(e) {
  if (e.target.nodeName !== 'I' && e.target.nodeName !== 'BUTTON') {
    return
  }
  switch (e.target.outerText) {
    case 'mode_edit':
      editNote(data, e.target.dataset.key)
      break
    case 'archive':
      toggleArchive(data, e.target.dataset.key)
      break
    case 'delete':
      removeNote(data, e.target.dataset.key)
      break
    case 'unarchive':
      toggleView(data)
      break
    case 'delete_forever':
      removeAll(data)
      break
    case 'Create Note':
      createNote(data)
      break
    case 'save_alt':
      saveNote(data, e.target.dataset.key)
      break
    case 'close':
      closeNewNote(data)
      break
  }
}