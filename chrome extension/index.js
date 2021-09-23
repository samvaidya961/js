let myLinks = []
        const inputText = document.querySelector('#input-link');
        const saveBtn = document.querySelector('#save-btn');
        const linksText = document.querySelector('#links')


        saveBtn.addEventListener("click", function () {
            myLinks.push(inputText.value);
            inputText.value = "";
            render();

        })

        function render() {
            let listLinks = ""
            for (let i = 0; i < myLinks.length; i++) {
                // listLinks += "<li><a href='"+ myLinks[i] +"' target='_blank'>" + myLinks[i] + "</a></li>";
                listLinks += `
                <p>
                    <a href="${myLinks[i]}"  target="_blank">
                        ${myLinks[i]}
                    </a>
                </p>
               
            `
            }
            linksText.innerHTML = listLinks;
        }