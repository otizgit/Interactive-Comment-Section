const plus = document.querySelectorAll('.plus')
const minus = document.querySelectorAll('.minus')
const count = document.querySelectorAll('.count')

plus[0].addEventListener('click', function(){
    let convert = parseInt(count[0].innerText)
    count[0].innerText = convert + 1
    // let countTrack = {
    //     present: count.innerText
    // }
    // let countTrackSerialized = JSON.stringify(countTrack)
    // console.log(countTrackSerialized)
    // localStorage.setItem("countTrack", countTrackSerialized)
    // console.log(localStorage)
    // localStorage.clear()
})

plus[1].addEventListener('click', function(){
    let convert = parseInt(count[1].innerText)
    count[1].innerText = convert + 1
})

plus[2].addEventListener('click', function(){
    let convert = parseInt(count[2].innerText)
    count[2].innerText = convert + 1
})

plus[3].addEventListener('click', function(){
    let convert = parseInt(count[3].innerText)
    count[3].innerText = convert + 1
})

minus[0].addEventListener('click', function(){
    let convert = parseInt(count[0].innerText)
    count[0].innerText = convert - 1
    if (count[0].innerText < 1){
        count[0].innerText = 1
    }
})

minus[1].addEventListener('click', function(){
    let convert = parseInt(count[1].innerText)
    count[1].innerText = convert - 1
    if (count[1].innerText < 1){
        count[1].innerText = 1
    }
})

minus[2].addEventListener('click', function(){
    let convert = parseInt(count[2].innerText)
    count[2].innerText = convert - 1
    if (count[2].innerText < 1){
        count[2].innerText = 1
    }
})

minus[3].addEventListener('click', function(){
    let convert = parseInt(count[3].innerText)
    count[3].innerText = convert - 1
    if (count[3].innerText < 1){
        count[3].innerText = 1
    }
})


const replyBtn = document.getElementsByClassName('reply')
const commentContainer = document.getElementsByClassName('comment-container')
const responseImg = document.querySelector('response-img')
const send = document.querySelector('.send')
const inputDiv = document.querySelector('.input-div')
const container2 = document.querySelector('.container2')


replyBtn[0].addEventListener('click', adddiv)

function adddiv(){
    const commentDiv = document.createElement('div')

    const responseImg = document.createElement('div')
    const img = document.createElement('img')
    responseImg.appendChild(img)
    img.src = "./images/avatars/image-juliusomo.png"

    const inputDiv = document.createElement('div')
    inputDiv.classList.add('input-div')
    const input = document.createElement('input')
    inputDiv.appendChild(input)

    const send = document.createElement('div')
    send.innerHTML = "SEND"
    send.classList.add('send')

    commentDiv.appendChild(responseImg)
    commentDiv.appendChild(inputDiv)
    commentDiv.appendChild(send)

    commentDiv.classList.add('response')
    commentContainer[0].appendChild(commentDiv)

    send.addEventListener('click', function(){
        if (input.value === ''){
            alert('Enter a Message')
        }
        else {
            const container2 = document.createElement('div')
            container2.classList.add('container2')

            const verticalLine = document.createElement("div")
            const line = document.createElement("div")
            line.classList.add('line')
            verticalLine.classList.add('vertical-line')
            verticalLine.appendChild(line)

            const comment = document.createElement("div")
            comment.classList.add('comment')

            const vote = document.createElement("div")
            vote.classList.add('vote')
            const plus = document.createElement("p")
            plus.textContent = "+"
            const count = document.createElement("p")
            count.textContent = "0"
            const minus = document.createElement("p")
            minus.textContent = "-"
            plus.classList.add('plus')
            minus.classList.add('minus')
            count.classList.add('count')
            vote.appendChild(plus)
            vote.appendChild(count)
            vote.appendChild(minus)

            comment.appendChild(vote)

            const content = document.createElement("div")
            content.classList.add('content')

            const profile = document.createElement("div")
            profile.classList.add('profile')

            const profileLeft = document.createElement("div")
            profileLeft.classList.add('profile-left')
            const name = document.createElement("div")
            name.classList.add('name')
            name.textContent = "juliusomo"
            const you = document.createElement("div")
            you.classList.add('you')
            you.textContent = "you"
            const time = document.createElement("div")
            time.classList.add('time')
            time.textContent = "just now"
            profileLeft.appendChild(img)
            profileLeft.appendChild(name)
            profileLeft.appendChild(you)
            profileLeft.appendChild(time)

            const profileRight = document.createElement("div")
            profileRight.classList.add('profile-right')

            const deletE = document.createElement("div")
            deletE.classList.add('delete')

            const deleteImg = document.createElement("img")
            deleteImg.src = "./images/icon-delete.svg"

            const deleteP = document.createElement("p")
            deleteP.textContent = "Delete"

            deletE.appendChild(deleteImg)
            deletE.appendChild(deleteP)

            const editImg = document.createElement("img")
            editImg.src = "./images/icon-edit.svg"

            const edit = document.createElement("p")
            edit.classList.add('edit')
            edit.textContent = "Edit"

            profileRight.appendChild(deletE)
            profileRight.appendChild(editImg)
            profileRight.appendChild(edit)

            const words = document.createElement('div')
            words.classList.add('words')
            words.textContent = input.value

            profileRight.appendChild(words)

            profile.appendChild(profileLeft)
            profile.appendChild(profileRight)
            content.appendChild(profile)
            content.appendChild(words)
            comment.appendChild(vote)
            comment.appendChild(content)

            container2.appendChild(verticalLine)
            container2.appendChild(comment)
            commentContainer[0].appendChild(container2)

            commentDiv.style.display = "none"

            deletE.addEventListener('click', function(){
                commentContainer[0].removeChild(container2)
            })
        }
    })
}


const deletee = document.querySelector('.delete')
const comment3 = document.querySelector('.comment3')

deletee.addEventListener('click', function(){   
    comment3.style.display = "none"
})

send.addEventListener('click', function(){
    const comment = document.createElement("div")
    comment.classList.add('comment')

    const vote = document.createElement("div")
    vote.classList.add('vote')
    const plus = document.createElement("p")
    plus.textContent = "+"
    const count = document.createElement("p")
    count.textContent = "0"
    const minus = document.createElement("p")
    minus.textContent = "-"
    plus.classList.add('plus')
    minus.classList.add('minus')
    count.classList.add('count')
    vote.appendChild(plus)
    vote.appendChild(count)
    vote.appendChild(minus)

    comment.appendChild(vote)

    const content = document.createElement("div")
    content.classList.add('content')

    const profile = document.createElement("div")
    profile.classList.add('profile')

    const profileLeft = document.createElement("div")
    profileLeft.classList.add('profile-left')
    const name = document.createElement("div")
    name.classList.add('name')
    name.textContent = "juliusomo"
    const you = document.createElement("div")
    you.classList.add('you')
    you.textContent = "you"
    const time = document.createElement("div")
    time.classList.add('time')
    time.textContent = "just now"
    profileLeft.appendChild(img)
    profileLeft.appendChild(name)
    profileLeft.appendChild(you)
    profileLeft.appendChild(time)

    const profileRight = document.createElement("div")
    profileRight.classList.add('profile-right')

    const deletE = document.createElement("div")
    deletE.classList.add('delete')

    const deleteImg = document.createElement("img")
    deleteImg.src = "./images/icon-delete.svg"

    const deleteP = document.createElement("p")
    deleteP.textContent = "Delete"

    deletE.appendChild(deleteImg)
    deletE.appendChild(deleteP)

    const editImg = document.createElement("img")
    editImg.src = "./images/icon-edit.svg"

    const edit = document.createElement("p")
    edit.classList.add('edit')
    edit.textContent = "Edit"

    profileRight.appendChild(deletE)
    profileRight.appendChild(editImg)
    profileRight.appendChild(edit)

    const words = document.createElement('div')
    words.classList.add('words')
    words.textContent = input.value

    profileRight.appendChild(words)

    profile.appendChild(profileLeft)
    profile.appendChild(profileRight)
    content.appendChild(profile)
    content.appendChild(words)
    comment.appendChild(vote)
    comment.appendChild(content)

    container2.appendChild(comment)
})