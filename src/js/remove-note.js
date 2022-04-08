import rendering from './rendering'

export default (data, id) => {
  if (!window.confirm("Do you really want to delete this?")) {
    return
  }

  const indexDel = data.notes.findIndex(item => item.id === id)

  if (indexDel !== -1) {
    data.notes.splice(indexDel, 1)
    rendering(data)
  }
}