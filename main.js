#!/usr/bin/env node

let inputArr =  process.argv.slice(2);    // here we have sliced from index 2 because in this at index 0 is node and at index 1 is the currently executing file path
let fs = require("fs");           // and also we have taken input here
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organiseObj = require("./commands/organise");



//console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organise "directoryPath"
// node main.js help
let command = inputArr[0];
let types = {
    media: ["mp4","mkv"],
    archives: ['zip','7z','rar','tar','gz','ar','ar','iso',"xz"],
    documents: ['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app: ['exe','dmg','pkg',"deb"]
}
switch (command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organise":
        organiseObj.organiseKey(inputArr[1]);
        break;
    case "help": 
        helpObj.helpKey();
        break;
    default: console.log("Please input correct command");
         break;
}

