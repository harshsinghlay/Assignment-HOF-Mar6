
const urlValidator=(input)=>{
    const exp = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-._]+[.][a-zA-Z0-9]+/;
    const flags = 'gi'; 
    let regex = new RegExp(exp, flags);
    if(regex.test(input)){
        console.log("Valid Url");
    }
    else{
        console.log("InValid Url");
    }
}


let url = "https://www.google.com";
urlValidator(url);
