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
  let s5 = Number(ratings[5]) || 0;
  let s4 = Number(ratings[4]) || 0;
  let s3 = Number(ratings[3]) || 0;
  let s2 = Number(ratings[2]) || 0;
  let s1 = Number(ratings[1]) || 0;
  let totalRatings = s5 + s4 + s3 + s2 + s1;

  let avg = (((5 * s5) + (4 * s4) + (3 * s3) + (2 * s2) + s1) / totalRatings);

  let rounded = (Math.round(avg * 10) / 10).toFixed(1);

  return rounded;
}

const percentRating = (ratings) => {
  let array = [];
  for (var i = 5; i > 0; i--) {
    array.push(
      {
      ratings: Number(ratings[i]) || 0,
      star: i
      }
    );
  }
  let totalRatings = array.reduce((acc, val) => acc + val.ratings, 0);
  let pctRatings = array.map((val, i) => {array[i].percent = Math.round((val.ratings / totalRatings) * 100) });
  return array;
}

const percentRecommended = (recommended) => {
  let total = Number(recommended.false) + Number(recommended.true);
  return Math.round((recommended.true / total) * 100);
}


export {dateParser, avgRating, percentRating, percentRecommended};