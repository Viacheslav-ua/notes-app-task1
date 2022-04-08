import notesTemplateHBS from '../templates/notes.hbs'

export default (data) => {
  calcStatistic(data)
  const notesTemplateAction = notesTemplateHBS(data)
  const notesContainer = document.querySelector('#js-container')
  notesContainer.innerHTML = notesTemplateAction

}

function calcStatistic(data) {
  const categoryKeys = data.notes.map(item => item.categoryKey)
  const uniqueKeys = categoryKeys.filter(
    (key, index, arr) => arr.indexOf(key) === index
  )
  const statisticData = uniqueKeys.map((key) => {
    if (!key) return
    const nameCategory = data.category.find(cat => cat.value === key).desk
    return {
      categoryKey: key,
      categoryName: nameCategory,
      archived: data.notes.filter(note => note.categoryKey === key && note.isArchive).length,
      active: data.notes.filter(note => note.categoryKey === key && !note.isArchive).length,
    }
  })
  data.statistic = statisticData
}