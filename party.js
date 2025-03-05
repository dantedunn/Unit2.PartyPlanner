//GET data from API (all/single Event)
// Post new event API
//PUT update existing event
//DELETE existing event

//Create table that will hold the data
//create delete button
//add logic that will delete the entry

//add FORM that will accept new data and POST to api

// const getEventsAPI_url = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2412-FTB-MT-WEB-PT/events'
// const postEventAPI_url ='https://fsa-crud-2aa9294fe819.herokuapp.com/api/2412-FTB-MT-WEB-PT/events';
// const deleteEventAPI = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2412-FTB-MT-WEB-PT/events/{id}';

let state = {
  partyAll: [],
  singleEvent: {} //would a single event be an object?
}
const ulBody = document.querySelector('.list')



const getAllPartydata = async () => {
  try {
    const respond = await fetch(
      'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2412-FTB-MT-WEB-PT/events'
    )
    const eventData = await respond.json()
    //console.log("Fetched Data:", eventData);
    const eventAllArray = eventData.data 
    //console.log("Fetched Results:",eventAllArray)
    //const eventAllData = document.getElementById('eventAllData') Changed to use TableBody in ForEach to create table body
    //eventAllData.innerHTML = " ";//clearing existing content, why?
    const tableBody = document.getElementById('partyTableBody');
    if (!tableBody) {console.error('No table Body');
        return;
    }

    eventAllArray.forEach(event => {
      //const li = document.createElement('li') replacing with row const
      const row = document.createElement('tr') //created a new table row 
      row.innerHTML = 
    `<td>${event.id}</td>    
    <td> ${event.name}</td>
    <td>${event.description}</td>
    <td>${event.date}</td>
    <td>${event.location}</td>
    <td><button class ="deleteButton" "data-id="${event.id}>Delete</button></td>`//why button not showing?
    tableBody.appendChild(row) //changed () to row. Error because my inital eventalldata was not the ID named in html ID   
    })
  } catch (error) {
    console.error('error here', error)
  }
}
//create a delete button, add event listener CLICK, then delete, must capture the ID?
const deleteButton = document.createElement('button')
deleteButton.innerText = 'Delete Party'
document.querySelectorAll('.deleteButton').forEach(button => {
    button.addEventListener('click', async (el) => {
        const eventID = el.target.getAttribute('data-id')
        deleteEvent(eventID, el.target.closest('tr'))
    })
})
//event to delete an entry, not working though
const deleteEvent = async (id,row) => {
    try{
        const response = await fetch ('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2412-FTB-MT-WEB-PT/events/${id}', 
        {method:'DELETE'}
        )
        if (response.ok) {
            console.log(`Event with ID ${id} deleted`);
            row.remove(); // Remove row from the table
        }else {
                console.error("Failed to delete event");
              }
    } catch (error){
        console.log(error)
    }
}




// const renderAllPartyData = () => {
// state.partyAll.forEach((party) => {
//     const liSpot = document.createElement("li")
//     liSpot.innerHTML = "new entry"
// ulBody.append(liSpot)
// }  )

// }

// //create a new event, will be used when data added to form
// //add button and Form for user to input data on the webpage
// const addSingleEvent = async () => {
//   await fetch(
//     'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2412-FTB-MT-WEB-PT/events'
//   ),
//     {
//       method: 'POST',
//       Headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }
// }

//event to take form data and post to api

//create const to own the html id fields
document.getElementById('eventForm').addEventListener('submit', async function (e){
const name = document.getElementById('partyName').value;
const description = document.getElementById('partydescr').value;
const date = document.getElementById('partydate').value;
const location = document.getElementById('partyloc').value;

//userData will now contain all the new const of the html ids
//userData added to body of POST call
const userData = {
    name,
    description,
    date,
    location
}

//need to make a call to api with TRY
try{
await fetch ('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2412-FTB-MT-WEB-PT/events',
   {
    method:"POST",
    headers:{"Content-Type":"application/json",},
    body: JSON.stringify(userData)
   } 
)}catch (error) {console.log(error)}
})
















// const deleteListener = async () =>
//   deleteButton.addEventListener('click', function () {
//     fetch(
//       'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2412-FTB-MT-WEB-PT/events/{id}'
//     ),
//       {
//         method: 'DELETE',
//         headers: {
//           'content=type': 'application/json',
//           body: JSON.stringify(data) //what to use as a param?>
//         }
//       }
//   })
//how to delete the whole entry?

//render

// function renderPartydata () {}

// async function renderAll () {
//   await getPartydata()
//   renderPartydata()
// }

// renderAll()
// //render means to render to the html via DOM
//delete button
//add Event button
//form?
getAllPartydata()