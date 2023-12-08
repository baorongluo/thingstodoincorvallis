# final-project-i-love-corvallis
final-project-i-love-corvallis created by GitHub Classroom

To do list:
- add post modal (done)
- display post modal
- CSS for each page
- home page html (in progress)
- self care page html (done)
- view activities html (done)
- open post modal
- create posts
- talk to professor about publishing it



COLOR PALATE:
- Stone beige #c6b6a6
- Sage green 1 #849376
- Sage green 2 #cfdfc5
- Sage green 3 #7ea392
- Cream white #fbfbf3
- Dark grey/black type
- Font - google?fonts is linked in Benny's list, add to our html, decide specific fonts later.

FONTS:
- https://fonts.google.com/specimen/DM+Sans



Header/logo
- make I heart Corvallis run crosswise
- clickable image
- background sage green 1
- text/heart beige


Header Code: *Spacing doesn't adjust with page size the way I want, but for now this works well for fullscreen and I'll fix it soon*
    *For home page code, ignore/don't copy any code with class "page-link"*
html -
  <header>
      <div class="header-image-container"a href="#">
        <img src="iheartcorvallis.jpg" class="header-image" alt="I love Corvallis Logo">
      </div>
      <div class="page-link">
        <p><a href="index.html"></a>Home</p>
      </div>
      <div class="page-link">
        <p><a href="location.html"></a>Location</p>
      </div>
      <div class="page-link">
        <p><a href="selfcare.html"></a>Self Care</p>
      </div>

    </header>
CSS:
header {
  background-color: #849376;
  display: flex;
  align-items: center;
}

.header-image {
  max-width: 600px;
  max-height: 250px;
  margin: auto;
  margin-top: 10px;
  display: block;
}

.header-image-container,
.page-link {
  cursor: pointer;
  display: block;
}

.page-link {
  padding: 0px 15px;
  border: 0;
  margin: 10px;
  font-family: Roboto, serif;
  font-size: medium;
  background-color: #cfdfc5;
}

.page-link:hover{
  text-decoration: underline;
}
