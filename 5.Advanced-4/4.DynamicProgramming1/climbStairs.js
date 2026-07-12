//Recursive approach with memoization
// TC: 0(n) SC: 0(n)

module.exports = { 
 //param A : integer
 //return an integer
	climbStairs : function(A){

        let arr = new Array(A + 1).fill(null)

        function stairs(num) {

            if(num == 0) return 1
            if(num < 0) return 0

            if(arr[num] !== null) return arr[num]

            arr[num] = (stairs(num - 1) + stairs(num - 2) ) % (10 ** 9 + 7)

            return arr[num]

        }

        stairs(A)

        return arr[A] % (10 ** 9 + 7)

	}
};


//iterative approach

module.exports = { 
 //param A : integer
 //return an integer
	climbStairs : function(A){

        let arr = new Array(A+1).fill(null)

        arr[0] = 1
        arr[1] = 1

        for (let i = 2 ; i <= A; i++) {
            arr[i] = (arr[i-1] + arr[i-2]) % (10 ** 9 + 7)
        }

        return arr[A] % (10 ** 9 + 7)


	}
};


