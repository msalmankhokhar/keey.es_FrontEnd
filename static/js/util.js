// let API_LINK = "https://24c8a219efe286ead244b913a66b6d43.serveo.net";
// let API_LINK = "https://ce3e-13-56-230-83.ngrok-free.app";
// let API_LINK = "http://ec2-13-56-230-83.us-west-1.compute.amazonaws.com";
// let API_LINK = "http://localhost:5000";
// let API_LINK = "http://127.0.0.1:5000";
// let API_LINK = "http://192.168.100.101:5000";
// let API_LINK = "https://a1f9-103-82-122-32.ngrok-free.app";
let API_LINK = "https://keeyz.site";

function hideProductKey(key) {
  // Find the last dash in the key
  const lastDashIndex = key.lastIndexOf("-");
  
  // If there is a dash in the key
  if (lastDashIndex !== -1) {
    // Get the substring before the last dash
    const substring = key.substring(0, lastDashIndex + 1);
    
    // Create a string of "X" characters with the same length as the hidden characters
    const hiddenCharacters = "X".repeat(key.length - substring.length);
    
    // Concatenate the substring and the hidden characters
    const hiddenKey = substring + hiddenCharacters;
    
    return hiddenKey;
  }
  
  // If there is no dash in the key, return the original key
  return key;
}



function fetchAsync_json(url, method){
    let xhr = new XMLHttpRequest()
    xhr.open(method, url, false);
    xhr.onload = ()=>{
        // let r_json = JSON.parse(xhr.responseText);
        // console.log(`recived sw text is ${xhr.responseText}`)
        return xhr.responseText
    }
    xhr.send()
    return xhr.onload()
}

function getSoftwareInfo(sw_id){
  return fetchAsync_json(`${API_LINK}/api/getSoftwareInfo/${sw_id}`, "GET")
}

function loadPage(path) {
  let html = fetchAsync_json(`${API_LINK}/${path}`, "GET");
  document.open()
  document.write(html);
  document.close()
}


function gotoSwInfoPage(sw_id) {
     let sw = fetchAsync_json(`${API_LINK}/item/${sw_id}`, "GET");
    //  let sw = getSoftwareInfo(sw_id);
    console.log(`software is ${sw}`)
    document.open()
    document.write(sw);
    document.close()
}

function gotoGetKeyPage(sw_id) {
     let sw = fetchAsync_json(`${API_LINK}/get_key/${sw_id}`, "GET");
    //  let sw = getSoftwareInfo(sw_id);
    // console.log(`software is ${sw}`)
    document.open()
    document.write(sw);
    document.close()
}