const getEventsAPI_url = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/events';
const postEventAPI_url ='https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/events';
const getSingleEventURL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/events/{id}'   ;
const updateEventURL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/events/{id}';
const deleteEventAPI = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/events/{id}';


const state = {
    partyAll: []
}

async function getPartydata() {
    
}

async function addPartyData() {
    
}




//render

function renderPartydata(){}

async function renderAll() {
    await getPartydata();
    renderPartydata();
    
}

renderAll();

//delete button
//add Event button
//form?