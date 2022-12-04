let name="melka"
let firstname = "botale"
try{
    if(firstname.length>=3){
        console.log(firstname)
    }
    else throw new Error("nom trop cour")
}
catch(error){
    console.log("There was an error",error);
}
