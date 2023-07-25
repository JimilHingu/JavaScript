let recordingButn = document.querySelector('button');
recordingButn.addEventListener('click',inputMSG);

function inputMSG(){
    let name = prompt('enter name of student');
    recordingButn.textContent = 'Roll No 1' + name
    
}