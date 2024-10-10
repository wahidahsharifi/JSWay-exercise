let color = prompt('choose the text color')
let backgroundColor = prompt('choose the backgroundColor')

document.querySelectorAll('div').forEach(paragraph => paragraph.style.color = color)

document.querySelectorAll('h1').forEach(heading => heading.style.color = backgroundColor)