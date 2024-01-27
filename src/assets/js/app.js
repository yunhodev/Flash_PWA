from { ref } import 'vue'
var currentUrl = ref(window.location.hash)
var homeCurrnent = ref(false)
var flashesCurrent = ref(false)
var siteInfoCurrnent = ref(false)
var otherCurrent = ref(false)
function setCurrent (page) {
  page === 'home' ? homeCurrnent.value = true : homeCurrnent.value = false
  page === 'flashes' ? flashesCurrent.value = true : flashesCurrent.value = false
  page === 'siteInfo' ? siteInfoCurrnent.value = true : siteInfoCurrnent.value = false
  page === 'other' ? otherCurrent.value = true : otherCurrent.value = false
}
if (currentUrl.value === '#/') {
  setCurrent('home')
} else if (currentUrl.value === '#/games') {
  setCurrent('games')
} else if (currentUrl.value === '#/siteInfo') {
  setCurrent('siteInfo')
} else {
  setCurrent('other')
}