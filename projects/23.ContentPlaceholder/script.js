const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'My Life is Hell'
  excerpt.innerHTML =
    'I am gonna die. To much of work load'
  profile_img.innerHTML =
    '<img src="https://media.licdn.com/dms/image/v2/D5603AQFtaXHW-1-aDQ/profile-displayphoto-shrink_400_400/B56ZW2d19uGQAg-/0/1742523033306?e=1749686400&v=beta&t=Xdhx8hrcY5xWJsCqcGeDlKUo9HERYSL90-4DFCAIPoE" alt="" />'
  name.innerHTML = 'Prasoon Kr'
  date.innerHTML = 'Jan 01, 2025'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
