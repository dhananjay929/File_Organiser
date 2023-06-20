let fs = require("fs");           // and also we have taken input here
let path = require("path");

function treeFn(dirPath){
    // let destPath;
    if(dirPath == undefined){
         treeHelper(process.cwd(), "");     
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath, "");
         }
        else{
        console.log("Kindly enter the correct Path");
        return;

        }
    }
}
function treeHelper(dirPath, indent){
    //check if is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├── "+fileName)
    }
    else{
        let dirName = path.basename(dirPath)
        console.log(indent+"└──"+dirName);
        let children = fs.readdirSync(dirPath);    //here recursion is used
        for(let i = 0; i<children.length;i++){
             let childPath = path.join(dirPath, children[i]); 
            treeHelper(childPath, indent + "\t");
        }


    }

}
module.exports = {
    treeKey: treeFn
}