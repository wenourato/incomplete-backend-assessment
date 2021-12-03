let fortuneBtn = document.querySelector('fortune')

const fortuneBtn = () => {
    axios.get("https://unpkg.com/axios/dist/axios.min.js")
    .then((req, res) => {
        console.log(req.data)
        document.body.appendChild(element);
            })
        }



    residentBtn.addEventListener('click', btnClicked)