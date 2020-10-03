const inquirer = require("inquirer")
const fs = require("fs");

inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"What is a title of your project?",
    },
    {
        type:"input",
        name:"description",
        message:"In short, how would you describe your project",
    },
    {

        type:"input",
        name:"table",
        message:"What is table of contets?",
    },
    {
        type:"input",
        name:"instalation",
        message:"How would you install it",
    },
    {
    
        type:"input",
        name:"usage",
        message:"What are the usage purposes?",
    },   
    { 
        type:"input",
        name:"license",
        message:"What license does it need?",  

    }, 
    {
        type:"input",
        name:"contributing",
        message:"Who helped you on this project?",  

    },
    {
        type:"input",
        name:"tests",
        message:"Did you run any tests?",  
    },
    {
        type:"input",
        name:"questions",
        message:"Any questions?",  
    },

    
]).then(function(answers){
    const myHtml = generateHtml(answers)

    fs.writeFile("profile.html", myHtml, function(err){
        if(err){
            console.log(err);
        }else{
            console.log("good")
        }
    })

})


function generateHtml(userAnsw) {
   return `<!doctype html>
   <html lang="en">
     <head>
       <!-- Required meta tags -->
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   
       <!-- Bootstrap CSS -->
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
   
       <title>Readme</title>
     </head>
     <body>
       <ul class="list-group list-group-horizontal-xl">
         <h4 class="list-group-item">Title: ${userAnsw.title}</h4>
         <h4 class="list-group-item">Description: ${userAnsw.description}</h4>
         <h4 class="list-group-item">Table of Contents: ${userAnsw.table}</h4>
         <h4 class="list-group-item">Installation: ${userAnsw.installation}</h4>
         <h4 class="list-group-item">Usage: ${userAnsw.usage}</h4>
         <h4 class="list-group-item">License: ${userAnsw.license}</h4>
         <h4 class="list-group-item">Contributing: ${userAnsw.cobtributing}</h4>
         <h4 class="list-group-item">Tests: ${userAnsw.tests}</h4>
         <h4 class="list-group-item">Questions: ${userAnsw.questions}</h4>
       </ul>
       
   
       <!-- Optional JavaScript -->
       <!-- jQuery first, then Popper.js, then Bootstrap JS -->
       <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
       <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
     </body>
   </html>`

}


