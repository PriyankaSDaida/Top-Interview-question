/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

function validBraces(str) {
    const stack = [];
    const braceMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char); // Push opening braces to the stack
        } else if (char === ')' || char === ']' || char === '}') {
            // If the stack is empty or top of stack doesn't match the closing brace
            if (stack.length === 0 || stack.pop() !== braceMap[char]) {
                return false;
            }
        }
    }

    // If stack is not empty, it means there are unmatched opening braces
    return stack.length === 0;
}