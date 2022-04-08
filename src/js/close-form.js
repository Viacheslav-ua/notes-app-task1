import rendering from './rendering'

export default (data) => {
  data.notes.splice(-1, 1)
  rendering(data)
}