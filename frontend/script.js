document.addEventListener("DOMContentLoaded",()=>{
  const allUsers=document.querySelector(".allUsers")
  const blankList = document.querySelector(".blankList")
  const findUserForm = document.querySelector(".findUserForm")
  const inputName = document.querySelector(".inputName")
  const singleUser = document.querySelector(".singleUser")
  const allPhotos = document.querySelector(".allPhotos")
  const blankDiv1 = document.querySelector(".blankDiv1")
  const blankDiv2 = document.querySelector(".blankDiv2")
  const blankDiv3 = document.querySelector(".blankDiv3")
  const blankDiv4 = document.querySelector(".blankDiv4")
  const removeBotton = document.querySelector(".remove")
  let userID;
  let quote;
  let picture;

  //for users
      allUsers.addEventListener("click",()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>{
          let userArr = Object.values(res['data']['users'])

        while(blankList.firstChild){
          blankList.removeChild(blankList.firstChild)
        }

        userArr.forEach((el,i)=>{
          let newLi = document.createElement("li");
          newLi.setAttribute("value", i+1)
          newLi.innerText = `Name:  ${el["name"]}  Age:  ${el["age"]}`
          blankList.appendChild(newLi)
        })
      })
    })

  //find user
    findUserForm.addEventListener("submit", event=>{
      event.preventDefault();

        let userName  = inputName.value;
        userName = userName.toLowerCase()

      axios.get("http://localhost:3000/users")
      .then(res=>{
        let userArr = Object.values(res['data']['users'])

        while(blankDiv1.firstChild){
          blankDiv1.removeChild(blankDiv1.firstChild)
        }

        userArr.forEach(el=>{
          if(userName == el['name'].toLowerCase()){

            let newP = document.createElement("p")
            newP.innerText = `Id: ${el["id"]}  Name:  ${el["name"]}  Age:  ${el["age"]}`
            blankDiv1.appendChild(newP)
          // }else{
          //   let errorP = document.createElement("p")
          //   errorP.innerText = `Error! Please input a value user name`
          //   blankDiv1.appendChild(errorP)
          }
        })

      })
    })

// single User Mode:
  blankList.addEventListener('click',(event)=>{
    userID = event.target.value;
    axios.get(`http://localhost:3000/posts/user/${userID}`)
    .then(res=>{
      quote = res["data"]['posts']

      while(blankDiv2.firstChild){
        blankDiv2.removeChild(blankDiv2.firstChild)
      }

      let quoteBox = document.createElement("p");
      quoteBox.innerText = quote;
      blankDiv2.appendChild(quoteBox)

    })
    axios.get(`http://localhost:3000/pictures/user/${userID}`)
    .then(res=>{
      picture = res['data']['usersImages'][0]['url']

      while(blankDiv3.firstChild){
      blankDiv3.removeChild(blankDiv3.firstChild)
      }

      let pictureBox = document.createElement("img");
      pictureBox.src = picture;
      blankDiv3.appendChild(pictureBox)

    })





  })

//all photos:
  allPhotos.addEventListener("click",()=>{
    axios.get("http://localhost:3000/pictures")
    .then(res=>{
      const pictureArray = res['data']['pictures']

      while(blankDiv4.firstChild){
        blankDiv4.removeChild(blankDiv4.firstChild)
      }

      pictureArray.forEach(el=>{
        let newImg = document.createElement("img");
        newImg.src = el['url'];
        blankDiv4.appendChild(newImg)
      })

    })

  })

  removeBotton.addEventListener("click",()=>{

    //remove photos:
    while(blankDiv4.firstChild){
      blankDiv4.removeChild(blankDiv4.firstChild)
    }

    //remove single User Mode:
    while(blankDiv2.firstChild){
      blankDiv2.removeChild(blankDiv2.firstChild)
    }
    while(blankDiv3.firstChild){
    blankDiv3.removeChild(blankDiv3.firstChild)
    }
    // clear find user
    while(blankDiv1.firstChild){
      blankDiv1.removeChild(blankDiv1.firstChild)
    }
    //remove list:
    while(blankList.firstChild){
      blankList.removeChild(blankList.firstChild)
    }
  })

})
