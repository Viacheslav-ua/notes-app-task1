import './css/styles.css'
import notesStatic from './json/notes.json'
import categoryStatic from './json/category.json'
import rendering from './js/rendering'
import notesService from './js/notesService'

const data = {
  viewArchive: false,
  notes: [...notesStatic],
  category: [...categoryStatic],
  statistic: [],
}

const notes = []

document.addEventListener('DOMContentLoaded', rendering(data))
const notesContainer = addEventListener('click', onClickBtn)

function onClickBtn(e) {
  if (e.target.nodeName !== 'I' && e.target.nodeName !== 'BUTTON') {
    return
  }
  switch (e.target.outerText) {
    case 'mode_edit':
      notesService.editNote(data, e.target.dataset.key)
      break
    case 'archive':
      notesService.toggleArchive(data, e.target.dataset.key)
      break
    case 'delete':
      notesService.removeNote(data, e.target.dataset.key)
      break
    case 'unarchive':
      notesService.toggleView(data)
      break
    case 'delete_forever':
      notesService.removeAll(data)
      break
    case 'Create Note':
      notesService.createNote(data)
      break
    case 'save_alt':
      notesService.saveNote(data, e.target.dataset.key)
      break
    case 'close':
      notesService.closeNewNote(data)
      break
  }
}