//your code here
const textArea = document.getElementById('evaluatedText');
textArea.addEventListener('input', () => {
    var textLn =  textArea.value;
    document.getElementById('wordCount').innerHTML='Total words: '+getWordCount(textLn);
});

function getWordCount(str) {
     return str.trim().split(/\s+/).length;
}

