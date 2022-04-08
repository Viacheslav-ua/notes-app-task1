import rendering from './rendering'

export default (data, id) => {
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