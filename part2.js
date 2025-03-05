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
      on}</td>`//why button not showing?
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
  