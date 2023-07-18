const themeTogglebtn = document.getElementById('theme-toggle')
const themeToggleDarkbtn = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightbtn = document.getElementById('theme-toggle-light-icon')

//
if (
  localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) { 
   //Show light icon
   themeToggleLightbtn.classList.remove('hidden')
} else {
  //Show dark icon
  themeToggleDarkbtn.classList.remove('hidden')
}

//Listen for toggle button click
themeTogglebtn.addEventListener('click',toggleMode)

function toggleMode() {
  //Toggle Icon
  themeToggleDarkbtn.classList.toggle('hidden') 
  themeToggleLightbtn.classList.toggle('hidden') 

  //If is set in localStorage
  if (localStorage.getItem('color-theme')) {
    //If light, make dark and save in localStorage
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } 
  } else {
    //if not in localStorage
    if (document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme','light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme','dark')
    }
  }

}