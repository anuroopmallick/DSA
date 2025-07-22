module.exports = {
  solve: function (A, B, C) {
    let dp = [];

    for (let i = 0; i <= A; ++i) {
      let array = new Array(B + 1).fill(0);
      dp.push(array);
    }

    dp[0][0] = 1;
    for (let i = 1; i <= A; ++i) {
      dp[i][0] = 1;
      for (let j = 1; j <= B; ++j) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % C;
      }
    }

    return dp[A][B];
  },
};
