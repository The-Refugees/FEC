// Helper Functions for the Reviews Module


// Converts ISO 8601 date format into Month Day, Year format
const dateParser = (isoDate) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let date = new Date(isoDate);
  let year = date.getFullYear();
  let day = date.getDate();
  let month = months[date.getMonth()];

  return month + ' ' + day + ', ' + year;
}

const avgRating = (ratings) => {
  let s5 = Number(ratings.ratings[5]);
  let s4 = Number(ratings.ratings[4]);
  let s3 = Number(ratings.ratings[3]);
  let s2 = Number(ratings.ratings[2]);
  let s1 = Number(ratings.ratings[1]);
  let totalRatings = s5 + s4+ s3 + s2 + s1;

  return (((5 * s5) + (4 * s4) + (3 * s3) + (2 * s2) + s1) / totalRatings).toFixed(1);
}




export {dateParser, avgRating};