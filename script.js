const tagsEl = document.getElementById("tags")
const textArea = document.getElementById("textarea")


textArea.focus()

textArea.addEventListener("keyup", (e) =>{
    createTags(e.target.value)

    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = ""
        }, 10)
        randomSelect()
    }
})




createTags = (input) =>{
    const choices = input.split(",").filter(choice=> choice.trim !== "").map(choice=> choice.trim()).filter(choice=> choice !== "")
    console.log(choices)
    tagsEl.innerHTML = ""
    choices.forEach(choice => {
        const tag = document.createElement("span")
        tag.classList.add("tag")
        tag.innerText = choice
        tagsEl.appendChild(tag)
    });
}

randomSelect = () =>{
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlight(randomTag)

        setTimeout(() => {
            unhighlight(randomTag)
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            highlight(pickRandomTag())
        }, 100);
    }, times * 100);
}

pickRandomTag = () =>{
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random()*tags.length)]
}

highlight = (tag) =>{
    tag.classList.add("highlight")
}

unhighlight = (tag) =>{
    tag.classList.remove("highlight")
}