const playIcon  = document.querySelector("#play")
const audioFile = document.querySelector("audio")
let isAudioPlaying = false

function playTheAudio(){
    audioFile.play()
    isAudioPlaying = true
    playIcon.classList.replace("fa-play", "fa-pause")//fa-solid fa-play
}

function pauseTheAudio(){
    audioFile.pause()
    isAudioPlaying = false
    playIcon.classList.replace("fa-pause", "fa-play")
}
playIcon.addEventListener("click", function(){
    //Logic to play the audio once and also pause the audio
    if(isAudioPlaying){
        pauseTheAudio()
    }
    else{
        playTheAudio()
        
    }
})


//While click on Forward Button, the following should change
//Image, Audio, Song Name, singer Name
const myImage = document.querySelector("img")
const mySongName = document.querySelector("h1")
const mySingerName = document.querySelector("h2")

const songsData = [
    {
        image : "Images/rainbow.png",
        audio : "Audios/Hazelwood.mp3",
        singerName : "Sunitha",
        songName : "HazelWood"
    },

    {
        image : "Images/trees.png",
        audio : "Audios/Walen.mp3",
        singerName : "Malavika",
        songName : "walen"
    },

    {
        image : "Images/camera.png",
        audio : "Audios/Aylex.mp3",
        singerName : "Geeta",
        songName : "Aylex"
    }
]

const forwardIcon = document.querySelector("#forward")
function changeData(info){
    //Logic to change the data
    myImage.src = info.image
    audioFile.src = info.audio
    mySongName.textContent = info.songName
    mySingerName.textContent = info.singerName
}
let songIndex = 0
forwardIcon.addEventListener("click", function(){ 
    if(songIndex > songsData.length-1){
        songIndex=0
    }
    changeData(songsData[songIndex])
    playTheAudio()
    songIndex++
})

//Backward button
const backwardIcon = document.querySelector("#backward")
function changeData(info){
    //Logic to change the data
    myImage.src = info.image
    audioFile.src = info.audio
    mySongName.textContent = info.songName
    mySingerName.textContent = info.singerName
}
let songsIndexx = songsData.length-1
backwardIcon.addEventListener("click", function(){ 
    if(songsIndexx == 0){
        songsIndexx=songsData.length-1
    }
    changeData(songsData[songsIndexx--])

})



const myTotalTime = document.querySelector(".totalTime")
const myCurrentTime = document.querySelector(".currentTime")
const myMovableContainer = document.querySelector(".movableContainer")


//How to get the total time of Audio File
//timeUpdate event will update the time related information(it will give current time and total time) of that audio file
audioFile.addEventListener("timeupdate", function(output){
    let fetchedCurrentTime = output.srcElement.currentTime
    let fetchedDuration = output.srcElement.duration

    let percentageOfTotalAudioPlayed = fetchedCurrentTime/fetchedDuration *100
    myMovableContainer.style.width=`${percentageOfTotalAudioPlayed}%`

    //fetchedDuration in minutes = fetchedDuration in seconds / 60
    let durationInMinutes = Math.floor(fetchedDuration/60)
    let durationInSeconds = Math.floor(fetchedDuration%60)
    //console.log(durationInMinutes, durationInSeconds)
    myTotalTime.textContent = `${durationInMinutes} : ${durationInSeconds}`



    let currentTimeInMinutes = Math.floor(fetchedCurrentTime/60)
    let currentTimeInSeconds = Math.floor(fetchedCurrentTime%60)

    if(currentTimeInSeconds < 10 ){
        currentTimeInSeconds = `0${currentTimeInSeconds}`
    }
    myCurrentTime.textContent = `${currentTimeInMinutes} : ${currentTimeInSeconds}`
})

//What is the percentage of Audio Played?
//currentTime / totalTime * 100 =Percentage of the Audio Played

const heartIcon= document.querySelector("#heart")
heartIcon.addEventListener("click", function(){
    //Change the colour to red
    heartIcon.style.color = "red"
    //We can store song details inside the localstorage(browser)
    localStorage.setItem(mySongName.textContent, mySingerName.textContent)


})