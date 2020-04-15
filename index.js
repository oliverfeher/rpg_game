
    let character = document.querySelector("#char");
    character.style.right = "0"

    document.addEventListener("keydown", (e)=> {
        if (e.key === "ArrowLeft") {
            let leftNumbers = character.style.right.replace("%", "");
            let left = parseInt(leftNumbers);
            if(left < 320 ) {
                character.style.right = `${left + 10}px`;
            }
        }
      });

    document.addEventListener("keydown", (e)=> {
        if (e.key === "ArrowRight") {
            let rightNumbers = character.style.right.replace("px", "");
            let right = parseInt(rightNumbers);
            if(right > -320 ) {
                character.style.right = `${right - 10}px`;
            }
        }
      });

      document.addEventListener("keydown", (e)=> {
           if (e.keyCode == 32) {
            character.style.bottom = "-550px"
            setTimeout(()=>{character.style.bottom = "-600px"}, 600);
            setTimeout(()=>{character.style.bottom = "-580px" }, 580);
            setTimeout(()=>{character.style.bottom = "-560px" }, 560);
           }  
      });

