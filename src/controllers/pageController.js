const express = require("express")

exports.HomePage = (req,res)=>{
    res.send("This is Home Page")
}
exports.AboutPage = (req,res)=>{
    res.send("This is About Page")
}
exports.ContactPage = (req,res)=>{
    res.send("This is Contact Page")
}