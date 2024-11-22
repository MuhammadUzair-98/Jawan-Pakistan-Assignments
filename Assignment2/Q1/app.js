function submit() {
    let inpus = document.getElementsByClassName("details");
    let setData = document.getElementsByClassName("data")
    let inputVals = {};
    let total = 500;
    for(let i = 0; i < inpus.length; i++) {
        inputVals[inpus[i].name + "1"] = inpus[i].value;
    }
    
    for(let i = 0; i < setData.length; i++) {
        for(let val in inputVals) {
            setData[i].id === val ? setData[i].innerHTML = inputVals[val] : ""
            
        }
    }
    let totalObtained = Number(inputVals["fend1"]) + Number(inputVals["bend1"]) + Number(inputVals["devops1"]) + Number(inputVals["mobile1"]);
    let percentage = totalObtained / total * 100;
    let obtainedGrade = percentage < 35 ? "F" : 
                        percentage >= 35 ? "E" :
                        percentage >= 40 ? "D" : 
                        percentage >= 50 ? "C" :
                        percentage >= 60 ? "B" :
                        percentage >= 70 ? "A" :
                        percentage >= 80 && percentage <= 100 ? "A+" : ""


    document.getElementById("total1").innerHTML = totalObtained;
    document.getElementById("per1").innerHTML = `${Math.ceil(percentage)}%`;
    document.getElementById("grade").innerHTML = obtainedGrade
    document.getElementById("pf").innerHTML = percentage > 35 ? "Pass" : "Fail";
    
}