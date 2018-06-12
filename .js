function reverse(word){
var reverseWord = "";
for(var i =word.length-1;i>=0;i--){
 var letter = word[i];
 reverseWord = reverseWord+letter;

}
return reverseWord;
}
reverse("ami faisha gasi minkar chipaoi");
