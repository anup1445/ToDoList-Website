import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
let newItems= [];
app.get("/", (req, res) => {
   
       const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
       const today = new Date();
        const day = today.toLocaleDateString("en-US", options);  
        
    res.render("index.ejs",{ currentDay : day , addedListOfItems : newItems});
})

app.post("/",(req,res) =>{
    let newItem = req.body.newItem;
    newItems.push(newItem);//it pushes the tasks that are added into the newItems array
    res.redirect("/");
})



app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})