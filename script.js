arr = [
    {
        dp:"https://lh3.googleusercontent.com/proxy/V47kwq9Z6SWZVTt8ubDhNeBR3fKNHaCsyYYDffxoM7WWKLkIEIBa9EIE7k3sBPZUubpOmyuW5j8GzvsHqH9mWyQGZMsp82ikkTEIsYI6fJJclVQ2Y0AXDm3PFqzACWlUFR2yw87CyhA9XbKEi5c",
        story:"https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/limestone-rock-phang-nga-1-Beautiful-limestone-rock-in-the-ocean.jpg"
    },
    {
        dp:"https://i.pinimg.com/originals/db/4c/47/db4c472ae2e674a4ea8660553faaa1cd.jpg",
        story:"https://hblimg.mmtcdn.com/content/hubble/img/leh/mmt/destination/m_leh-landscape_l_400_640.jpg"
    },
    {
        dp:"https://img.freepik.com/free-photo/interested-girl-grey-sweater-photo-sensual-european-lady-posing-home_197531-14056.jpg",
        story:"https://media.timeout.com/images/105242423/750/422/image.jpg"
    },
    {
        dp:"https://storage.needpix.com/rsynced_images/model-2612058_1280.jpg",
        story:"https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/best-places-to-visit-in-india.jpg"
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPEeQqJsFdYJGbiyohZfXgFChFhca9odekg&usqp=CAU",
        story:"https://shaggyley.files.wordpress.com/2013/08/anjarle-beach-ratnagiri-1024x768.jpg?w=650"
    }
]

var clutter = " "
arr.forEach(function(elem,idx){
    clutter += ` <div id="story">
        <img id="${idx}" src="${elem.dp}">
    </div>`
    
})

document.querySelector("#element").innerHTML = clutter

document.querySelector("#element").addEventListener("click", function(dets) {
    // console.log(arr[dets.target.id].story)
    document.querySelector("#img-story").style.backgroundImage = `url(${arr[dets.target.id].story})`
    document.querySelector("#img-story").style.display = "block"

    setTimeout(function(){
        document.querySelector("#img-story").style.display = "none"
    },3000)
})

