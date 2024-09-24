let lists = [...document.getElementsByTagName("li")]
lists.map(list => {
    list.addEventListener("click", () => {
        let active = document.getElementsByClassName("active")
        console.log(active);
        active[0].classList.remove("active")
        list.classList.add("active")
    })
})