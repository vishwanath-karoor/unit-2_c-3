// fill in javascript code here<form>



    document.querySelector("form").addEventListener("submit",fun1)

    function fun1(event){
        event.preventDefault()

        var emplname=document.querySelector("#name").value
        var empid=document.querySelector("#employeeID").value
        var deptselect=document.querySelector("#department").value
        var experience=document.querySelector("#exp").value
        var mailid=document.querySelector("#email").value
        var mobilenumber=document.querySelector("#mbl").value

        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerText=emplname

        var td2=document.createElement("td")
        td2.innerText=empid

        var td3=document.createElement("td")
        td3.innerText=deptselect

        
        var td5=document.createElement("td")
        td5.innerText=mailid

        var td6=document.createElement("td")
        td6.innerText=mobilenumber

        
        
        var td7=document.createElement("td")
        var td4=document.createElement("td")
        td4.innerText=experience

        if(experience>5)
        {
            td7.innerText="SENIOR"

        }
        else if(experience>1 && experience<=5)
        {
            td7.innerText="JUNIOR"
        }
        else if(experience<=1)
        {
            td7.innerText="FRESHER"
        }
       
     

        var td8=document.createElement("td")
        td8.innerText="Delete"

        td8.addEventListener("click",fun2)

       
       
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        document.querySelector("tbody").append(tr)

   

    }
    function fun2(event){
        event.target.parentNode.remove()
    }
   