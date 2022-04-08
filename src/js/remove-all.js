import rendering from './rendering'

export default (data) => {
  if (!window.confirm("Do you really want to delete all entries?")) {
    return
  }
  for (let i = 0; i < data.notes.length; i++) {
    data.notes.splice(i)
  }
  rendering(data)
}