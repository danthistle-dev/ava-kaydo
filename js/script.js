const bgImg = document.querySelector('.bg-img');
const title = document.querySelector('#title');

const youtube = document.querySelector('#youtube');
const twitter = document.querySelector('#twitter');
const apple = document.querySelector('#apple');
const spotify = document.querySelector('#spotify');
const instagram = document.querySelector('#instagram');
const facebook = document.querySelector('#facebook');

const showBio = document.querySelector('.bio-btn');
const hideBio = document.querySelector('.bio-hide-btn');
const bio = document.querySelector('#slide-up');

const onHover = function(event, icon, color) {
  icon.addEventListener(event, function() {
    title.style.color = color;
  });
}

onHover('mouseenter', youtube, '#ff0000');
onHover('mouseleave', youtube, 'white');

onHover('mouseenter', twitter, '#1da1f2');
onHover('mouseleave', twitter, 'white');

onHover('mouseenter', apple, '#a6b1b7');
onHover('mouseleave', apple, 'white');

onHover('mouseenter', spotify, '#1ed760');
onHover('mouseleave', spotify, 'white');

onHover('mouseenter', instagram, '#c32aa3');
onHover('mouseleave', instagram, 'white');

onHover('mouseenter', facebook, '#3b5998');
onHover('mouseleave', facebook, 'white');


showBio.addEventListener('click', function(){
  bio.style.transform = 'translateY(-100vh)'
})

hideBio.addEventListener('click', function() {
  bio.style.transform = 'translateY(100vh)'
})