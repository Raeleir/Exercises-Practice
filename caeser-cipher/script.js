//create the message to be encrypted
var message = "Hello, World";


//create the encryption function
var encrypt = function (input, key) {
    //create the array for modifying each letter of the input string
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //remake input, removing capitalizations (our array can only modify lowercased letters)
    var input = input.toLowerCase();
    //create the empty string that will become the encrypted input
    var output = "";
    //go through each character in the input string
    for (i = 0; i < input.length; i++) {
        //find the character of the input string in our alpha array (if it's a letter)
        var translatedIndex = alpha.indexOf(input[i]);
        //change the character of the input string, by an amount equal to the encryption key
        var newIndex = (translatedIndex + key) % index.length;
        //if the current character in the input string is a letter, keep going
        if (translatedIndex != -1) {
            //if alpha's new index is invalid, make it a valid indice, then add the encrypted letter to the encrypted string
            if (newIndex < 0) {
                output += alpha[newIndex + index.length];
            //if alpha's new index is valid, add the encrypted letter to the encrypted string
            } else {
                output += alpha[newIndex];
            }
        //if the current character in the input string is not a letter, add the current character unchanged to the encrypted string
        } else {
            output += input[i];
        }
    }
    //return the encrypted string
    return output;
}


var encryptedString = encrypt(message, 2);
console.log(encryptedString);
var decryptedString = encrypt(encryptedString, -2);
console.log(decryptedString);
