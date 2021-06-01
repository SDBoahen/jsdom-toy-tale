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

      // display a card for each toy
      // create the outer element
      const cardDiv = document.createElement("div")
      // assign any classes etc to it
      cardDiv.classList.add("card")
  

      // use innerHTML to create the inner elements
      cardDiv.innerHTML = `

          <h2>${toyObj.name}</h2>
          <img src=${toyObj.image} class="toy-avatar" />
          <p>${toyObj.likes} Likes </p>
          <button data-id="${toyObj.id}" class="like-btn">Like <3</button>

      `
      
      // slap it on the DOM (toy-collection)
      const collectionDiv = document.querySelector("#toy-collection")
      collectionDiv.append(cardDiv)

    }
  

    const renderAllToys =(toyArray)=> {

      for(let toyObj of toyArray){

        renderToy(toyObj)
        
      }

    }










  fetch(API_DATABASE_URL).then(response => response.json())
  .then(fetchedArray => { 
    
    renderAllToys(fetchedArray)
    // fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 

  })  //// !!  ////  (fetchedArray => { 
  // //then(console.log)  //


  // fetch(API_DATABASE_URL).then(response => response.json())
  // .then(console.log)
  // // .then(whatWeFetched => {console.log(whatWeFetched)} ) // What We Are Going to Decide to Do With The Data  


  // fetch(API_DATABASE_URL).then(response => response.json())
  // .then(fetchedArray => { 
    
  //   fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 

  // })  //// !!  ////  (fetchedArray => { 
  // // //then(console.log)  //




  



});  //// !!  ////  ("DOMContentLoaded", () => {













//  (3)
// fetch(API_DATABASE_URL).then(response => response.json())
// .then(fetchedArray => { 
  
//   renderAllToys(fetchedArray)
//   // fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 

// })  //// !!  ////  (fetchedArray => { 
// //then(console.log)  //









  // const toyForm = document.querySelector(".add-toy-form")
  // toyForm.addEventListener("submit", event => {
  //   // ALWAYS DO THIS FOR FORM SUBMITS!
  //   event.preventDefault()
    
  //   // make a POST /toys
  //     // get the user input from the form
  //   const name = event.target.name.value
  //   const image = event.target.image.value

  //   fetch(API_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       "name": name,
  //       "image": image,
  //       "likes": 0
  //     }),
  //   })
  //     .then(r => r.json())
  //     .then(newToy => {
  //       // when we get the new toy from the server
  //       // slap it on the DOM
  //       renderToy(newToy)
  //       event.target.reset()
  //     })
  // })