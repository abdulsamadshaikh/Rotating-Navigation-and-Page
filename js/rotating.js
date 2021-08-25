/*  
Project Name: Rotating Navigation and Page - HTML, CSS and JAVASCRIPT
Description: Simple Rotating Navigation and Page using HTML, CSS and JAVASCRIPT, Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Tags: Mobile-friendly, All-Devices-Supported. 
*/

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const postdates = document.querySelectorAll('.date')

open.addEventListener('click', () => container.classList.add('show-nav')) 

close.addEventListener('click', () => container.classList.remove('show-nav'))

function postDate(currntdate) {
    let today = new Date()
    let date = String(today.getDate()).padStart(2, '0')
    //let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let yyyy = today.getFullYear()

    // If you want to output of month as number then you have to replace of the first span value with mm. Don't forget to uncomment mm code above.  
    // If you want to include year in your output just copy '<span>' + yyyy + '</span>' and paste with below code after last '</span>' closing tag.
    // Don't forget to include + operator before pasting year code.
    today = '<span>' + monthNames[today.getMonth()] + ' ' + date + ' ' + yyyy +'</span>'

    // Render date loop through
    for (let i = 0; i < postdates.length; i++) {
        postdates[i].innerHTML = today;
    }
}    
postDate()