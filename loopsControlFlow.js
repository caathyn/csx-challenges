function mergingTripletsAndQuints(array1, array2) {
	return array1.reduce((acc, cur, idx) => {
    if (cur % 3 === 0 || cur % 5 === 0) {
      acc.push(cur + array2[idx])
    } else {
      acc.push(cur)
    }

    return acc;
  }, [])
}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
