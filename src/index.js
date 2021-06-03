// Initially showTheForm === false 
let showTheForm = false;

const API_DATABASE_URL = "http://localhost:3000/toys"
  console.log("Hey! This is our Toy Database URL ->", API_DATABASE_URL)


document.addEventListener("click", (event)=>{ console.log("💻🔬👀:: You Just Clicked on == ", event.target) }  )
////  'Listen To TheDOM🌌🧘🌠👁✨'
document.addEventListener("DOMContentLoaded", () => {

  
  const toyFormContainer = document.querySelector(".container");
  const addBtn = document.querySelector("#new-toy-btn");

    addBtn.addEventListener("click", () => {

      // Hide & Seek With The Form ;)
      showTheForm = !showTheForm;
      // Working as a Toggle

      // Initially showTheForm === false
      if (showTheForm) {
        toyFormContainer.style.display = "block";
      } else {
        toyFormContainer.style.display = "none";
      }

    });




    

    const renderToy =(toyObj)=> {


      // Display a Card for each Toy
      // Create the Outer Wrapping/Containing Element 
      ////  - In this case a <div>
      const cardDiv = document.createElement("div")

      // Assigning any classes etc to it
      ////  - In this case: class="card"
      cardDiv.classList.add("card")
  

      // use innerHTML to create the inner elements
      cardDiv.innerHTML = `

          <h2>${toyObj.name}</h2>
          <img src=${toyObj.image} class="toy-avatar" />
          <p>${toyObj.likes} Likes </p>
          <button data-id="${toyObj.id}" class="like-btn">Like <3</button>

        `
        // <button data-id="${toyObj.id}" class="delete-btn"> DELETE🚁💫🚂? </button>

      
      // SSSlap it on the DOM (toy-collection)
      const collectionDiv = document.querySelector("#toy-collection")
      collectionDiv.append(cardDiv)


    }
    const renderAllToys =(toyArray)=> {


      toyArray.forEach(toyObj => { renderToy(toyObj) } )

      ////  Using a (ForOfLoop)
        // for(let toyObj of toyArray){

        //   renderToy(toyObj)
          
        // }


    }









  //=====  BASIC GET FETCH PROCESS  ========


  fetch(API_DATABASE_URL).then(response => response.json())
  .then(fetchedArray => { console.log(fetchedArray);
    
    renderAllToys(fetchedArray)
    // fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 

  })  //// !!  ////  (fetchedArray => { 
  ////  .then(console.log)  //


  // console.log(">>>>>>>>>>>", fetchedArray)
  // WE DON'T HAVE ACCESS OUTSIDE OF FETCH  :(


  // fetch(API_DATABASE_URL).then(response => response.json())
  // .then(console.log)
  // // .then(whatWeFetched => {console.log(whatWeFetched)} ) // What We Are Going to Decide to Do With The Data  


  // fetch(API_DATABASE_URL).then(response => response.json())
  // .then(fetchedArray => { 
    
  //   fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 

  // })  //// !!  ////  (fetchedArray => { 
  // // //then(console.log)  //


  //=====  BASIC GET FETCH PROCESS  ========









  //=====  POST FETCH PROCESS  ========


  // Connecting 'JS-Puppet-Strings' to The New Toy Form
  const newToyForm = document.querySelector(".add-toy-form")

    newToyForm.addEventListener("submit", event =>{ event.preventDefault(); 
        console.log(event.target) 


        //  Getting User Form Input Data 📋🖋🤪
        const name = event.target.name.value
        const image = event.target.image.value


      fetch(API_DATABASE_URL, {
    
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ 
          "name": name,
          "image": image,
          "likes": 0
          /* WHAT WE ARE POSTING */
        })
    
      })
      .then(response => response.json())
      .then(theThingWePostedButFromTheServer => renderToy(theThingWePostedButFromTheServer) )
      //.then(theThingWePosted => console.log("Hey! This is what we posted 📋🤓👍:  ", theThingWePosted))  //

        //       event.target.reset()   //  ****

    })  ////  addEventListener("submit", event =>{
      // newToyForm.addEventListener("submit", event =>{ console.log(event) })
      // newToyForm.addEventListener("submit", event =>{ console.log(event.target) })

      





  
  //========  DELETE FETCH  ========

    const cardsCollection = document.querySelector("#toy-collection")
      console.log(deleteButton)



    deleteButton.addEventListener("submit", event =>{ event.preventDefault(); 
      console.log(event.target)  

      //if(event.target.matches(".delete-btn")){ console.log(event.target) }

      if(event.target.matches(".delete-btn")){ 
        
        console.log(event.target) 


        const id = event.target.dataset.id



        fetch(`{API_DATABASE_URL}/${id}`, {
      
        method: "DELETE"

        })
        .then(response => response.json())
        .then(theThingWePosted => console.log("You Just Deleted  ->", theThingWePosted))

      
      }


    })
















});  //// !!  ////  ("DOMContentLoaded", () => {














