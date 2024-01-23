const axios = require('axios');
const FormData = require('form-data');


//fetch shopify data
//fetch meta ads data
//fetch google ads data
//pre process and normalise data


//push it to google sheets


const AddToGsheet = (Name,Email) => {
    console.log(Name,Email)
    let data = new FormData();
data.append('Email', Email);
data.append('Name', Name);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://script.google.com/macros/s/AKfycbx7n9rgGqE5q9GmAzBBGDwHTvHq9kma-MZdfUX9mvfQtQlsCkIFyIlrmh7rcCQPtAPA/exec',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
}
AddToGsheet('Rishab','rishab@outwrk.co')
AddToGsheet('Rishsdsdab','rishab@outwrkgg.co')
