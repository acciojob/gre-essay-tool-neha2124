//your code here
const textArea = document.getElementById('evaluatedText');
textArea.addEventListener('input', () => {
    var textLn =  textArea.value;
	// console.log(textLn)
    let count = document.getElementById('wordCount')
	
    count.innerHTML='Total words: '+getWordCount(textLn);
	})


function getWordCount(str) {
     const arr = str.split(' ');

  return arr.filter(word => word !== '').length;
}

