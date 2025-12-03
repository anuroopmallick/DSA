// Problem Description
// You are developing a feature for Zomato that helps users find the nearest restaurants to their current location.
//  It uses GPS to determine the user's location and has access to a database of restaurants, each with its own set of
//  coordinates in a two-dimensional space representing their geographical location on a map. The goal is to identify the "B"
// closest restaurants to the user, providing a quick and convenient way to choose where to eat.
// Given a list of restaurant locations, denoted by A (each represented by its x and y coordinates on a map), and an integer B
// representing the number of closest restaurants to the user. The user's current location is assumed to be at the origin (0, 0).

// Here, the distance between two points on a plane is the Euclidean distance.
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)
// NOTE: Euclidean distance between two points P1(x1, y1) and P2(x2, y2) is sqrt( (x1-x2)2 + (y1-y2)2).

module.exports = {
  //   param A : array of array of integers
  //   param B : integer
  //   return a array of array of integers
  solve: function (A, B) {
    A.sort((a, b) => {
      let ed1 = Math.sqrt(a[0] ** 2 + a[1] ** 2);
      let ed2 = Math.sqrt(b[0] ** 2 + b[1] ** 2);

      return ed1 - ed2;
    });

    return A.slice(0, B);
  },
};
