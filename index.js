
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
           if (e.key === "ArrowUp") {
            character.style.top = "75%"
            setTimeout(()=>{character.style.top = "85%" }, 500);
           }
      });
