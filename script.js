function generateQuestions() {
  // Get student details
  const name = document.getElementById("name").value;
  const rollNumber = document.getElementById("rollNumber").value;
  const enrollmentNumber = document.getElementById("enrollmentNumber").value;
  const className = document.getElementById("class").value;

  // Display student details
  const studentDetailsDiv = document.getElementById("studentDetails");
  studentDetailsDiv.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Roll Number:</strong> ${rollNumber}</p>
    <p><strong>Enrollment Number:</strong> ${enrollmentNumber}</p>
    <p><strong>Class:</strong> ${className}</p>
  `;

  // List of questions for Q1 (must be selected)
  const q1Questions = [
  "Write your full name initials and year of joining college (e.g., A.S.2021) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite superhero name and year (e.g., BATMAN2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your dream profession and birth year (e.g., DOCTOR2003) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite season and any year (e.g., WINTER2019) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your school name initials and pass-out year (e.g., D.P.S.2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your best friend’s name and their birth year (e.g., RAVI2002) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your current city name and year (e.g., MUMBAI2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a motivational word and any year (e.g., BELIEVE2021) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite sport and a year (e.g., CRICKET2018) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a country name you want to visit and year (e.g., JAPAN2025) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your surname and graduation year (e.g., SINGH2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘GROWTH’ and any year (e.g., GROWTH2026) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘FOCUS’ and a meaningful year (e.g., FOCUS2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘POWER’ and a lucky year (e.g., POWER2005) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your pet’s name and adoption year (e.g., BRUNO2019) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘MIND’ and a year (e.g., MIND2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘BRAVE’ and any year (e.g., BRAVE2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘UNITY’ and a year of significance (e.g., UNITY1947) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a mountain and any year (e.g., EVEREST2010) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a river and a historical year (e.g., GANGA1984) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘ENERGY’ and any year (e.g., ENERGY2027) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite subject and a random year (e.g., MATH2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a planet name and a futuristic year (e.g., MARS2070) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a flower name and a random year (e.g., LOTUS2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a tree name and year (e.g., NEEM2016) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘SKY’ and a past year (e.g., SKY2011) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘RACE’ and any year (e.g., RACE2009) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘CALM’ and a peaceful year (e.g., CALM2001) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite bird name and year (e.g., PARROT2014) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘HAPPY’ and a birthday year (e.g., HAPPY1998) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘TRUST’ and a random year (e.g., TRUST2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘HONEST’ and a memorable year (e.g., HONEST2017) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘SKILL’ and a practice year (e.g., SKILL2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a movie title and year (e.g., AVATAR2009) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite animal and any year (e.g., TIGER2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘NEVERGIVEUP’ and a recent year (e.g., NEVERGIVEUP2024) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your college abbreviation and a current year (e.g., IITD2025) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘ENGINEER’ and your graduation year (e.g., ENGINEER2026) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘LEADER’ and any meaningful year (e.g., LEADER2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a god or goddess and a year (e.g., SHIVA2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘FAMILY’ and your family’s founding year (e.g., FAMILY1980) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the name of a festival and year (e.g., DIWALI2021) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘CARE’ and any year (e.g., CARE2013) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘RESPECT’ and year (e.g., RESPECT2012) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘HUSTLE’ and a work year (e.g., HUSTLE2019) in 35mm height uppercase double-stroke Gothic letters.",
  "Write your favorite car brand and model year (e.g., HONDA2020) in 35mm height uppercase double-stroke Gothic letters.",
  "Write a positive word and a motivational year (e.g., SMILE2022) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘ACHIEVE’ and your goal year (e.g., ACHIEVE2025) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘BALANCE’ and a year (e.g., BALANCE2023) in 35mm height uppercase double-stroke Gothic letters.",
  "Write the word ‘VISION’ and future year (e.g., VISION2030) in 35mm height uppercase double-stroke Gothic letters.",
];

  // List of other questions (except Q1)

const otherQuestions = [
  // INVOLUTE

  "Draw an involute of a circle of 20 mm radius.",
  "Draw an involute of a circle of 30 mm radius.",
  "Draw an involute of a regular pentagon with 20 mm sides.",
  "Draw an involute of a regular pentagon with 25 mm sides.",
  "Draw an involute of a regular pentagon with 20 mm sides where string length is less than the perimeter.",
  "Draw an involute of a regular pentagon with 20 mm sides where string length is greater than the perimeter.",
  "Draw an involute of an equilateral triangle with 30 mm sides.",
  "Draw an involute of an equilateral triangle with 25 mm sides.",
  "Draw an involute of an equilateral triangle with 30 mm sides where string length is less than the perimeter.",
  "Draw an involute of an equilateral triangle with 30 mm sides where string length is greater than the perimeter.",
  "Draw an involute of a square with 30 mm sides.",
  "Draw an involute of a square with 40 mm sides.",
  "Draw an involute of a square with 30 mm sides where string length is less than the perimeter.",
  "Draw an involute of a square with 30 mm sides where string length is greater than the perimeter.",
  "A pole is of a shape of half hexagon and semicircle. A string is to be wound having length equal to the pole perimeter. Draw the path of the free end of the string. (Take hexagon with 30 mm sides and semicircle of 60 mm diameter.)",
  "A rod 85 mm long rolls over a semicircular pole without slipping. Draw the locus of both ends of the rod.",
  "A rod 70 mm long rolls over a circular path without slipping. Draw the path traced by the midpoint of the rod.",
  "Draw an involute of a semicircle of 40 mm radius.",
  "Draw the path traced by the free end of a thread unwound from a regular hexagon of 25 mm sides.",
  "Draw the path traced by the free end of a thread unwound from a triangle with 40 mm base and 30 mm height."

,

  // PLAIN SCALE
  "Construct a plain scale to read decimeters and centimeters, and scale should be long enough to measure 5 dm with RF = 1:3. Mark the distance 1.8 and 4.4 dm on the scale.",
  "Construct a plain scale to read kilometer and Hectometer, and scale should be long enough to measure 6 km with RF = 1:32000. Mark the distance 3.6 and 4.1 km on the scale.",
  "Construct a plain scale of RF = 1/32 showing yard, feet and measure upto 5 yards and also indicate the distance of 4 yards 1 feet on the scale.",
  "The R.F. of a scale showing miles, furlongs is 1/50688. Draw a plain scale to read upto 5 miles and show on it, the length representing 3 m 5 f.",
  "Construct a plain scale of RF = 1:4 showing meters and decimeters and capable of measuring up to 8 meters. Mark the distance of 6.5 meters.",
  "Construct a plain scale of RF = 1:10 to measure up to 7 yards, showing yards and feet. Indicate 5 yards 2 feet on the scale.",
  "Draw a plain scale of RF = 1:25000 to measure up to 10 km, showing kilometers and hectometers. Mark 7.3 km on the scale.",
  "Construct a plain scale to read meters and centimeters up to 4 m, RF = 1/5. Show 1.75 m and 3.20 m on the scale.",
  "Draw a plain scale of RF = 1/50 to measure up to 6 yards, showing yards and feet. Show 4 yards 2 feet.",
  "Construct a plain scale of RF = 1:100000 to measure up to 10 nautical miles, showing miles and cables. Mark 8.4 nautical miles.",
  "Construct a plain scale to measure up to 9 meters with RF = 1/12 showing meters and decimeters. Show 3.6 m and 7.5 m on the scale.",
  "Draw a plain scale of RF = 1:60 to measure up to 6 ft showing feet and inches. Show 2 ft 9 inches on the scale.",
  "Construct a plain scale of RF = 1:45 to measure up to 5 yards, showing yards and feet. Indicate 1 yard 2 feet.",
  "Construct a plain scale of RF = 1/20000 to measure up to 8 km, showing km and hm. Mark 4.6 km and 7.1 km.",
  "Draw a plain scale of RF = 1:75 to measure up to 5 m, showing meters and centimeters. Show 2.65 m and 4.75 m.",
  "Construct a plain scale of RF = 1:2 showing feet and inches to measure up to 6 ft. Mark 1 ft 8 inches and 5 ft 3 inches.",
  "Draw a plain scale of RF = 1/30000 to measure up to 9 miles, showing miles and furlongs. Mark 6 miles 3 furlongs.",
  "Construct a plain scale of RF = 1:6 to read meters and decimeters up to 6 m. Mark 2.4 m and 5.6 m.",
  "Draw a plain scale of RF = 1:20 to measure up to 7 feet, showing feet and inches. Indicate 3 ft 10 inches.",
  "Construct a plain scale of RF = 1/40000 showing miles and furlongs up to 10 miles. Show 7 miles 5 furlongs."
,

  // DIAGONAL SCALE
  "Construct a diagonal scale of RF = 1/22 showing yard, feet and inches and measure upto 5 yards and also indicate the distance of 4 yards 2 feet and 10 inches on the scale.",
  "Construct a diagonal scale of RF = 1/40 showing m, dm and cm and measure upto 6 m and also indicate the distance of 5.37 m on the scale.",
  "The R.F of scale showing miles, furlongs & chains is 1/50688. Draw a scale to read upto 5 miles and show on it, the length representing 3 m 5 f 3 ch.",
  "The distance between Delhi and Ambala is 156 km. They are shown 156 mm apart on a road map. What is R.F. and construct a diagonal scale to measure upto 200 km and show the distance of 109 km.",
  "The R.F of scale showing leagues, miles & furlongs is 1/110000. Draw a scale to read upto 4 Leagues and show on it, the length representing 3 leagues 2 miles and 5 furlongs.",
  "Construct a diagonal scale of RF = 1/25 showing feet, inches and sub-inches up to 6 feet and mark a distance of 4 feet 10.5 inches.",
  "Construct a diagonal scale of RF = 1/35 showing meters, decimeters and centimeters to measure up to 7 m. Mark the length 6.48 m on the scale.",
  "The R.F. of a scale is 1/60000. It shows miles, furlongs, and yards. Construct the scale up to 6 miles and indicate 2 miles 6 furlongs 80 yards.",
  "A map shows a distance of 120 km as 100 mm. Find the R.F. and construct a diagonal scale to read up to 180 km. Mark 142 km on it.",
  "Draw a diagonal scale of RF = 1/50 to read up to 4 meters, showing meters, decimeters, and centimeters. Mark 2.63 m on it.",
  "Construct a diagonal scale of RF = 1/30 for measurement up to 5 yards, showing yards, feet, and inches. Indicate 2 yards 1 foot 7 inches.",
  "Construct a diagonal scale of RF = 1/45 to measure up to 8 m, showing m, dm, and cm. Show 7.89 m on the scale.",
  "Draw a diagonal scale of RF = 1/60000 for miles, furlongs, and chains, measuring up to 7 miles. Show 5 miles 3 furlongs 2 chains.",
  "On a railway map, a 240 km route is shown as 200 mm. Find the RF and construct a diagonal scale to read up to 300 km. Mark 218 km.",
  "Draw a diagonal scale of RF = 1/50000 showing kilometers, hectometers, and meters to measure up to 10 km and show 6.75 km.",
  "Construct a diagonal scale of RF = 1/20 to measure up to 5 ft, showing feet, inches, and sub-inches. Mark 3 ft 11.2 inches.",
  "Draw a diagonal scale of RF = 1/60 to measure up to 7 m showing m, dm, and cm. Show 6.42 m on the scale.",
  "A scale has RF = 1/75 and is to measure up to 10 yards, showing yards, feet, and inches. Show 7 yards 2 feet 6 inches.",
  "Draw a diagonal scale of RF = 1/80 for measuring up to 12 m, showing meters, decimeters, and centimeters. Indicate 9.58 m."
,

  // CONIC SECTIONS
  "POINT F IS 50 MM FROM A LINE AB. A POINT P IS MOVING IN A PLANE SUCH THAT THE RATIO OF ITS DISTANCES FROM F AND LINE AB REMAINS CONSTANT AND EQUALS TO 2/3. DRAW LOCUS OF POINT P. {ECCENTRICITY = 2/3}",
  "Construct an ellipse using concentric circle method having a major axis 100 mm and minor axis 70 mm.",
  "Point F is 50 mm from a vertical straight line AB. Draw locus of point P, moving in a plane such that it always remains equidistant from point F and line AB.",
  "Draw an isosceles triangle of 100 mm long base and 110 mm long altitude. Inscribe a parabola in it by method of tangents.",
  "POINT F IS 50 MM FROM A LINE AB. A POINT P IS MOVING IN A PLANE SUCH THAT THE RATIO OF ITS DISTANCES FROM F AND LINE AB REMAINS CONSTANT AND EQUALS TO 3/2. DRAW LOCUS OF POINT P. {ECCENTRICITY = 3/2}",
  "Point P is 40 mm and 30 mm from horizontal and vertical axes respectively. Draw Hyperbola through it.",
  "Draw an ellipse using rectangle method with major axis 120 mm and minor axis 80 mm.",
  "Construct a parabola with its vertex at origin and axis vertical, passing through a point 60 mm from vertex and 30 mm from axis.",
  "A point P moves such that its distance from a fixed point F and a fixed line AB is always equal. Draw the locus of point P and name the curve.",
  "Draw an ellipse using oblong method where the length and breadth of the rectangle are 90 mm and 60 mm respectively.",
  "Construct a hyperbola using the focus-directrix method with eccentricity 5/3.",
  "Draw a parabola using the rectangle method within a rectangle of size 100 mm × 70 mm.",
  "A point P moves in such a way that the ratio of its distance from a fixed point F and a directrix AB is 1. Draw the conic and specify its type.",
  "Draw a parabola in a right-angled triangle having base 80 mm and height 100 mm using the method of tangents.",
  "Draw an ellipse using the intersecting arcs method. The distance between foci is 80 mm and the sum of distances from any point on the curve to the foci is 120 mm.",
  "Point F is 60 mm from a line AB. A point P moves such that the ratio of its distances from F and AB is 5/4. Draw the locus and identify the conic.",
  "Construct a hyperbola by rectangular hyperbola method where transverse and conjugate axes are equal.",
  "Draw a parabola by the double ordinate method using vertex and focus given 50 mm apart.",
  "A point P moves such that the difference of its distances from two fixed points is constant and equal to 60 mm. Draw the curve and name it.",
  "Draw a conic section using eccentricity method with e = 1 and directrix 50 mm from focus."
,

  // CYCLOID CURVES
  "Draw a cycloid generated by a circle of 60 mm diameter rolling on a straight line for one complete revolution.",
  "Draw a cycloid generated by a circle of 40 mm diameter rolling on a straight line for one complete revolution.",
  "Draw a cycloid generated by a circle of 50 mm diameter and mark the path of a point on its circumference during one full revolution.",
  "Draw an epicycloid generated by a circle of 25 mm radius rolling on the outside of another circle of 150 mm diameter.",
  "Draw an epicycloid generated by a circle of 30 mm radius rolling on the outside of a fixed circle of 90 mm radius.",
  "Draw an epicycloid generated by a circle of 35 mm radius rolling outside a circle of 100 mm diameter.",
  "Draw a hypocycloid generated by a circle of 80 mm diameter rolling inside a fixed circle of 120 mm radius.",
  "Draw a hypocycloid generated by a circle of 30 mm radius rolling inside a circle of 100 mm radius.",
  "Draw a hypocycloid generated by a rolling circle of 40 mm radius inside another circle of 90 mm radius.",
  "Draw the locus of a point on a circle of 50 mm diameter as it rolls without slipping on a straight line. Name the curve.",
  "Draw the locus of a point on a circle of 25 mm radius rolling outside a circle of 120 mm diameter. Name the curve.",
  "Draw the locus of a point on a circle of 30 mm radius rolling inside a circle of 150 mm diameter. Name the curve."

];


  // Randomly select one question from Q1
  const q1Index = Math.floor(Math.random() * q1Questions.length);
  const q1Selected = q1Questions[q1Index];

  // Randomly select two other questions from the remaining list
  const otherQuestionsCopy = [...otherQuestions];
  const randomOtherQuestions = [];
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * otherQuestionsCopy.length);
    randomOtherQuestions.push(otherQuestionsCopy[randomIndex]);
    otherQuestionsCopy.splice(randomIndex, 1); // Remove selected question to avoid duplication
  }

  // Combine Q1 question with two randomly selected questions
  const allQuestions = [q1Selected, ...randomOtherQuestions];

  // Display the selected questions
  const questionListDiv = document.getElementById("questionList");
  questionListDiv.innerHTML = `
    <div class="question"><strong>Q1:</strong> ${allQuestions[0]}</div>
    <div class="question"><strong>Q2:</strong> ${allQuestions[1]}</div>
    <div class="question"><strong>Q3:</strong> ${allQuestions[2]}</div>
  `;

  // Show the question section and hide the form
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("questionsSection").style.display = "block";
}

function restartExam() {
  // Reset the form and hide the question section
  document.getElementById("studentForm").style.display = "block";
  document.getElementById("questionsSection").style.display = "none";
  document.getElementById("studentDetails").innerHTML = '';
  document.getElementById("questionList").innerHTML = '';
  document.querySelector('form').reset();
}





