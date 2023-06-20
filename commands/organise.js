function organiseFn(dirPath){
    //console.log("Organise command implemented for", dirPath);
    //1. input-> directory path given
    let destPath;
    if(dirPath==undefined){
        destPath = process.cwd();
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
    //2. create -> organised_files -> directory
            destPath = path.join(dirPath,"organised_files");
            if(fs.existsSync(destPath)==false){
            fs.mkdirSync(destPath);
            }

        }
        else{
        console.log("Kindly enter the correct Path");
        return;

        }
    }
    organsieHelper(dirPath, destPath);

    
    
    
}
//3. identify categories of all the files  present  in that  input directory

function organsieHelper(src, dest){
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for(let i =0; i<childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile){
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            console.log(childNames[i],"belongs to -->", category);
            //4. copy/cut files to that organised directory inside of any category folder 
            
            sendFiles(childAddress, dest, category);
        
        
        }
    }

}
function sendFiles(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
                    
     }
     let fileName = path.basename(srcFilePath);
     let destFilePath = path.join(categoryPath, fileName);
     fs.copyFileSync(srcFilePath, destFilePath);
     fs.unlinkSync(srcFilePath);
     console.log(fileName,"copied to",category);





}

function getCategory(name){
    let ext = path.extname(name);
    // console.log(ext);
    ext =ext.slice(1);
    for(let type in types){
        let cTypeArray = types[type];
        for(let i = 0; i<cTypeArray.length; i++){
            if (ext== cTypeArray[i]){
                return type;
            }
        }
    }
    return "others";

}
module.exports = {
    organiseKey: organiseFn
}