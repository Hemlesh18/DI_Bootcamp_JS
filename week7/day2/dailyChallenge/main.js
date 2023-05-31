const express = require("express")
const app = express()

const PORT = 3000;
app.use("/form",express.static("public"));
app.use(express.json());
app.get("/aboutMe/:hobby", handleHoobby)
app.get("/pic", displayPic)
app.post("/formData", handlePost)
app.listen(PORT);

function handleHoobby(req, res){
    const hobby = req.params.hobby;
    if(! isonlyLetters(hobby))
    return res.status(404).send("only please");
    res.send("nice hobby")

}

//     if(hobby.match(noNumRegex)){
//         res.send("You like " + hobby);
//         console.log("hobby:",hobby)
//         // return console.log(noNumRegex.test(Boolean))

//     }else{
// res.status(404).send("Invalid hobby...hobby cannot have a number.");
//         console.log("Invalid hobby...hobby cannot have a number.")
// // return console.log(noNumRegex.test(Boolean)+ " hobby cannot have a number")

//     };



function isonlyLetters(str){
    const onlyletterRegex = /^[A-Za-z]+$/;
    return onlyletterRegex.test(str);
}

function displayPic(req,res){
    res.send("<img src = 'https://i.imgur.com/4m8L6uT.jpeg' />")
}

function handlePost(req,res){
    const email = req.body.email
    const message = req.body.message
    res.send(`${email} sent a message: ${message}`)
}