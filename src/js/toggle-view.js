import rendering from './rendering'

export default (data) => {
  if (data.viewArchive) {
    data.viewArchive = false
  } else {
    data.viewArchive = true
  }

  rendering(data)
}