// Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.


// Input Format

// The only argument given is string A.
// Output Format

// Return the length of the longest consecutive 1’s that can be achieved.
// Constraints

// 1 <= length of string <= 1000000
// A contains only characters 0 and 1.
// For Example

// Input 1:
//     A = "111000"
// Output 1:
//     3

// Input 2:
//     A = "111011101"
// Output 2:
//     7

function maximum_one(s) {
    let cnt_one = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        if (s[i] === '1') {
            cnt_one++;
        }
    }

    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);

    if (s[0] === '1') {
        left[0] = 1;
    } else {
        left[0] = 0;
    }

    if (s[n - 1] === '1') {
        right[n - 1] = 1;
    } else {
        right[n - 1] = 0;
    }

    for (let i = 1; i < n; i++) {
        if (s[i] === '1') {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 0;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (s[i] === '1') {
            right[i] = right[i + 1] + 1;
        } else {
            right[i] = 0;
        }
    }

    let cnt = 0;
    let max_cnt = 0;

    for (let i = 0; i < n; ++i) {
        max_cnt = Math.max(max_cnt, Math.max(right[i], left[i]));
    }

    for (let i = 1; i < n - 1; i++) {
        if (s[i] === '0') {
            const sum = left[i - 1] + right[i + 1];

            if (sum < cnt_one) {
                cnt = sum + 1;
            } else {
                cnt = sum;
            }

            max_cnt = Math.max(max_cnt, cnt);
            cnt = 0;
        }
    }

    return max_cnt;
}
module.exports = { 
 //param A : string
 //return an integer
    solve : function(A) {
        return maximum_one(A);
    }
};
