/**
 * @file
 * Data Handlers for Rest API requests
 */

export async function fetchData(
  url = '', 
  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }  
) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: headers,
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
  return response.json();
}

export async function sendData(
  url = '',
  data = '',
  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'secret-key': '$2b$10$2Aa7XURtNFy0EsuXqiLF2Oc8pOCnGH/eG8J1WwETlYnHxREEB2vS2',
    'X-Master-Key': '$2b$10$2Aa7XURtNFy0EsuXqiLF2Oc8pOCnGH/eG8J1WwETlYnHxREEB2vS2'    
  }  
) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: headers,
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  return response.json();
}
