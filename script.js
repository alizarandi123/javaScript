function styleText(){
    var ReturnValue = document.querySelector('#inp-text').value
    if (ReturnValue !== "") {
        
        alert(`Hello my friend...
        welcome 
        `)
        var hideDiv = document.querySelector(".valueWrite")
        hideDiv.setAttribute("style" , "display : block;")
        //imported value
        document.querySelector('#write').innerHTML = ReturnValue
        document.querySelector('#write2').innerHTML = ReturnValue
        document.querySelector('#write3').innerHTML = ReturnValue
        return
    }
    alert("please enter tour text")
        
}