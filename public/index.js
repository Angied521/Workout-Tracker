init()

async function init () {
  if (document.location.search.split('=')[1] === undefined) {
    const workout = await API.getLastWorkout()
    if (workout) { 
      document.location.search = '?id=' + workout._id
    } else {
      document.querySelector('#continue-btn').classList.add('d-none')
    }
  }
}
