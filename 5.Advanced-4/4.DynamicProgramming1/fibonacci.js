// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function fibonacci(n) {
    // Your fibonacci logic here

    let arr = new Array(n+1).fill(null)

    arr[0] = 0
    arr[1] = 1

    for(let i = 2 ; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    
    return arr[n]
}

function main() {
    const A = parseInt(readLine());
    const result = fibonacci(A);
    console.log(result);
}