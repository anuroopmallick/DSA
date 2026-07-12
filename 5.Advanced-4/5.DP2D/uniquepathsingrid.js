module.exports = {
    //param A : array of array of integers
    //return an integer
    uniquePathsWithObstacles: function (obstacleGrid) {
        if (obstacleGrid.length === 0 || obstacleGrid[0].length === 0) {
            return 0;
        }
        let height = obstacleGrid.length,
            width = obstacleGrid[0].length;
        if (obstacleGrid[0][0] === 1 || obstacleGrid[height - 1][width - 1] === 1) {
            return 0;
        }
        for (let row = height - 1; row >= 0; row--) {
            for (let col = width - 1; col >= 0; col--) {
                if (row === height - 1 && col === width - 1) {
                    obstacleGrid[row][col] = 1;
                    continue;
                }
                let right = col < width - 1 ? obstacleGrid[row][col + 1] : 0;
                let bottom = row < height - 1 ? obstacleGrid[row + 1][col] : 0;
                obstacleGrid[row][col] = (obstacleGrid[row][col] === 0) ? right + bottom : 0;
            }
        }
        return obstacleGrid[0][0];
    }
};

