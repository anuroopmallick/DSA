module.exports = {
    //param A : array of array of integers
    //return an integer
    calculateMinimumHP: function (dungeon) {
        var scores = [],
            rows = dungeon.length,
            cols = dungeon[0].length;
        const getBestPathSoFar = function (acc, el) {
            if (acc.lowest >= 0)
                return (el.lowest >= 0 && el.score > acc.score) ? el : acc;
            if (el.lowest === acc.lowest)
                return (el.score > acc.score) ? el : acc;
            return el.lowest > acc.lowest ? el : acc;
        };

        /* Set up the top row. */
        scores[0] = [];
        let score = 0,
            lowest = Number.MAX_VALUE;
        for (let i = 0; i < cols; i++) {
            let d = dungeon[0][i];
            lowest = Math.min(lowest, d + score);
            scores[0][i] = [{
                score: d + score,
                lowest
            }];
            score += d;
        }

        /* Set up the left column. */
        score = scores[0][0][0].score, lowest = scores[0][0][0].lowest;
        for (let i = 1; i < rows; i++) {
            let d = dungeon[i][0];
            scores[i] = [];
            lowest = Math.min(lowest, d + score);
            scores[i][0] = [{
                score: d + score,
                lowest
            }];
            score += d;
        }

        /* Now everything in between. */
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                /* 
                        The previous low point could be the final low point, OR high negative values closer 
                        to the goal could bring a new low.
                        With that in mind, retain the following paths:
                        - Highest negative (or any non-negative) value of lowest with highest score.
                        - Any paths with a higher score than that.
                */

                /* Find the best paths. */
                let d = dungeon[i][j];
                let paths = [...scores[i - 1][j], ...scores[i][j - 1]];
                paths = paths.map(el => ({
                    score: el.score + d,
                    lowest: Math.min(el.lowest, el.score + d)
                }));
                let bestPath = paths.reduce(getBestPathSoFar, paths[0]);
                paths = paths.filter(el => el.score > bestPath.score);
                let map = new Map();
                for (let i = 0; i < paths.length; i++) {
                    let item = map.get(paths[i].lowest);
                    if (item === undefined || item < paths[i].score)
                        item = paths[i].score;
                    map.set(paths[i].lowest, item);
                }
                paths = [bestPath];
                map.forEach((score, lowest) => {
                    paths.push({
                        score,
                        lowest
                    })
                });
                scores[i][j] = paths;
                // scores[i-1][j] = scores[i][j-1] = null;
            }
            scores[i - 1] = null;
        }

        /* Use the largest low score value to calculate HP needed. */
        let result = scores[rows - 1][cols - 1].reduce((acc, el) => acc < el.lowest ? el.lowest : acc, scores[rows - 1][cols - 1][0].lowest);
        return Math.max(1, 1 - result);
    }
};