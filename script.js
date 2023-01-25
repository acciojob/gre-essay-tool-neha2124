//your code here
const textArea = document.getElementById('evaluatedText');
textArea.addEventListener('input', () => {
    var textLn =  textArea.value;
	// console.log(textLn)
    let count = document.getElementById('wordCount')
	
   
    count.innerHTML='Total words: '+getWordCount(textLn);
	})


function getWordCount(str) {
     return str.trim().split(" ").length;
}

