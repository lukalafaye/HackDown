document.querySelectorAll('.date').forEach(el => {
	let time = moment(el.innerHTML)
	el.innerHTML = time.fromNow()
})

document.addEventListener('DOMContentLoaded', replaceIMG)
