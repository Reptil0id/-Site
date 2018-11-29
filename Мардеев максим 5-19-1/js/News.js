window.onload = function(){
        
    document.getElementById('add').onclick = startComm;
    }
 
function startComm(){
	var text = document.getElementById('txt').value;
    var comm = document.createElement('p');
    var newText = document.createTextNode(text);
        
    comm.appendChild(newText);
        
    document.getElementById('comments').appendChild(comm);
    return true;
    }

