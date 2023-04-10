const express= require("express");
const res = require("express/lib/response");
const app= express();


//addition of value 1 & value 2
app.get("/add/:num1/:num2", (req,res)=>{
    try{
        const value1= parseFloat(req.params.num1);
        const value2= parseFloat(req.params.num2);

        if(isNaN(value1)) {
            res.send("Error! invalid number")
        }
        if(isNaN(value2)) {
            res.send("Error! invalid number")
        }

        const sum = value1 + value2;
        res.send("The sum of two numbers is: " +sum)

    } catch (error) {
        res.send(error)
    }
});

//subtraction of value 2 from value 1
app.get("/sub/:num1/:num2", (req,res)=>{
    try{
        const value1= parseFloat(req.params.num1);
        const value2= parseFloat(req.params.num2);

        if(isNaN(value1)) {
            res.send("Error! invalid number")
        }
        if(isNaN(value2)) {
            res.send("Error! invalid number")
        }
    
        const subtraction = value1 - value2;
        res.send("Subtraction of value 2 from value 1 is: " +subtraction.toString());
    } catch (error) {
        res.send(error);
    }
});

//multiplication of value 1 & value 2
app.get("/mul/:num1/:num2", (req,res)=>{
    try{
        const value1= parseFloat(req.params.num1);
        const value2= parseFloat(req.params.num2);

        if(isNaN(value1)) {
            res.send("Error! invalid number")
        }
        if(isNaN(value2)) {
            res.send("Error! invalid number")
        }
    
        const multiplication = value1 * value2;
        res.send("Multiplication of two values is: " +multiplication.toString());
    } catch (error) {
        res.send(error);
    }
});

//division of  value1 by value2
app.get("/div/:num1/:num2", (req,res)=>{
    try{
        const value1= parseFloat(req.params.num1);
        const value2= parseFloat(req.params.num2);

        if(isNaN(value1)) {
            res.send("Error! invalid number")
        }
        if(isNaN(value2)) {
            res.send("Error! invalid number")
        }
    
        const division = value1/value2;
        res.send("Division of value 1 by value 2 is: " +division.toString());
    } catch (error) {
        res.send(error);
    }
});

const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port " +port);
})