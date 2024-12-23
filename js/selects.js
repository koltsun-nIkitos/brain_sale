export const activateSelects = () =>{

    // перевод языка
    const selectLanguage = document.getElementById("selectLanguage");
    const selectLanguageMobile = document.getElementById('selectLanguageMobile');
    
    const selects = [
        selectLanguage,
        selectLanguageMobile
    ]


    selects.forEach((select) =>{

        const current = select.querySelector(".select-current");
        const items = select.querySelectorAll(".select-item");
        
        select.addEventListener("click", () => {
            select.classList.toggle("open");
        });
        
        items.forEach(item => {
            item.addEventListener("click", () => {
            current.textContent = item.textContent;
            select.classList.remove("open");
            });
        });
        
        document.addEventListener("click", (e) => {
            if (!select.contains(e.target)) {
            select.classList.remove("open");
            }
        });
    })

    
}