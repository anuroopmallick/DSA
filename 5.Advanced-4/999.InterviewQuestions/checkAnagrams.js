// Problem Description

// You are given two lowercase strings A and B each of length N. Return 1 if they are anagrams to each other and 0 if not.

// Note : Two strings A and B are called anagrams to each other if A can be formed after rearranging the letters of B.


// Problem Constraints

// 1 <= N <= 105
// A and B are lowercase strings


// Input Format

// Both arguments A and B are a string.


// Output Format

// Return 1 if they are anagrams and 0 if not


// Example Input

// Input 1:
// A = "cat"
// B = "bat"
// Input 2:
// A = "secure"
// B = "rescue"


// Example Output

// Output 1:
// 0
// Output 2:
// 1


// Example Explanation

// For Input 1:
// The words cannot be rearranged to form the same word. So, they are not anagrams.
// For Input 2:
// They are an anagram.

module.exports = { 
 //param A : string
 //param B : string
 //return an integer
	solve : function(A, B){
        let freq1 = new Array(26).fill(0);
        let freq2 = new Array(26).fill(0);
        for (let i = 0; i < A.length; i++) {
            freq1[A.charCodeAt(i) - 97]++;
            freq2[B.charCodeAt(i) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            if (freq1[i] !== freq2[i]) {
                return 0;
            }
        }
        return 1;
	}
};