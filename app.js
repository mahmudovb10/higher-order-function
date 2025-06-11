const movies = [
  {
    name: "T 34",
    year: 2019,
    rate: 4.5,
    state: "Russia",
    isAdult: true,
  },
  {
    name: "The Godfather",
    year: 1979,
    rate: 4.3,
    state: "Italy",
    isAdult: false,
  },
  {
    name: "Spiderman",
    year: 2023,
    rate: 3.5,
    state: "Usa",
    isAdult: true,
  },
  {
    name: "Mafia",
    year: 2005,
    rate: 5,
    state: "Usa",
    isAdult: true,
  },
  {
    name: "Temir Musht",
    year: 2020,
    rate: 5,
    state: "japan",
    isAdult: true,
  },
  {
    name: "Titanic",
    year: 1997,
    rate: 6,
    state: "England",
    isAdult: false,
  },
  {
    name: "Minecraft",
    year: 2025,
    state: "France",
    isAdult: true,
  },
];

// Reduce

const allMoviesYear = movies.flatMap((movie) => {
  return movie.year;
});
// console.log(allMoviesYear);

const sumAllyear = allMoviesYear.reduce((acc, curVal) => {
  if (!acc[curVal]) {
    acc[curVal] = 1;
  } else {
    acc[curVal] += 1;
  }
  return acc;
}, {});
console.log(sumAllyear); // Bu Yerda Yillar Bor Masalan 2025 - yilgi Kinolardan 1  Va Shungasa O'xshash Bir Yilda 2 ta Kino Bo'lsa 2 ta Chiqaradi

// Sort() Metodi Malumotni Nushalamaydi Nusxalash Uchun ' [...movies] ' va 'Object.assign(movies) dan foydalaniladi dan Foydalaniladi

const sortedMovies = movies.sort((m1, m2) => {
  return m2.rate - m1.rate; // Moviesni Rate siga Qarab Sortlash Kamayish Tartibida
});
// console.log(sortedMovies);

// find() Metodi Massivda Joylashgan Birinchi Elementni ko'rsatadi
// findIndex() Massivdagi Joylashuvini Aytadi

const findedMovie = movies.findIndex((movie) => {
  return movie.name == "Temir Musht";
});
// console.log(findedMovie);

// Map() Metodi  massivdagi har bir elementga amal bajarib, yangi massiv qaytaradi.
const descriseRate = movies.map((movie) => {
  return { ...movie, rate: movie.rate - 1, name: movie.name + " Uz" };
});
// console.log(descriseRate);

// filter() Metodi  massivdagi elementlarni qisqacha aytganda saralab beradi

const moviesRate = movies.filter((movie) => {
  return movie.rate >= 5;
});
// console.log(moviesRate);

// some() Metodi massivdagi elementni berilgan shartga qarab chiqarib beradi

// console.group("Search Movie"); <<< Natijani Bitta Grupaga Olib  Qo'yadi
const someMovies = movies.some((movie) => {
  console.log(movie); // <<<
  return movie.year > 1979; //  <<< Shart Beriladi
});
// console.log(someMovies);
// console.groupEnd();  <<< Natijani Bitta Grupaga Olib  Qo'yadi

// flat() Metodi Ichma Ich arraylarni Bitta Qilib Beradi

let arr1 = [10, 20, [30, 40, 50], [60, 70, 80, 90], 100];
let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100];
let arr3 = [10, 20, [30, [40, 50]], [[[60, 70], 80], 90], 100];

// const arrExample = arr3.flat(3); // flat(3) 'Bu Arraylarni Chuqurligi,  Massivdagi Arrayga Nisbatan Qo'yiladi'
// console.log(arrExample);

let employee = [
  { id: 101, name: "John", skills: ["HTML", "CSS", "JAVASCRIPT"] },
  { id: 101, name: "John", skills: ["C#", "SQL"] },
  { id: 101, name: "John", skills: ["ANGULAR", "REACT"] },
];

// const employee1 = employee.map((employer) => {
//     return employer.skills; // Bu yerda Hamma Array Bitta Massivga Solindi
//   })
//   .flat(); // Array Ichma Ich Bo'lib Ketgani Uchun Uni Bitta Arrayga Aylatirildi
// console.log(employee1);

// Qisqaroq Yo'l

const employee1 = employee.flatMap((employer) => {
  // Bu yerda Bir Yo'li flat() Qilib Ketilyaabdi Natija Bir Xil
  return employer.skills;
});
console.log(employee1);

// Sort() Metodi  Sortiga Ajratib beradi  Boshidagi raqamga Qarab Parametr Olmasa Masalan 2200 < 1 chunki Boshidagi raqamga Qaraydi Sort()

const num = [1, 2, 5, 3, 6, 70, 8.8, 55, 90];
console.log(`${num.sort().join(" ")} Callback function Qo'shilmasa`);

// Sort() Metodiga Callback function Qo'shilsa

const numb = [1, 2, 5, 3, 6, 70, 8.8, 55, 90].sort((num1, num2) => {
  return num1 - num2;
});
console.log(`${numb.join(" ")} Callback function Qo'shilsa`);

// Callback function Qo'shilsa  Kamayish Tartibida Chiqadi

const numb1 = [1, 2, 5, 3, 6, 70, 8.8, 55, 90].sort((num1, num2) => {
  return num2 - num1;
});
console.log(
  `${numb1.join(
    " "
  )} Callback function Qo'shilsa va  Uni Joyini O'zgartirib Qo'ysa`
);

// Harflarda Ham Huddi Shunday Ularni Joylashuviga Qarab Sortlaydi   'Katta Harflar Har Qanday Holatda Ham Birinchiga O'tadi'

// Reduce() Metodi

const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => {
  console.log("Acumlator", accumulator, "Currrent Value", currentValue);
  return accumulator + currentValue;
});
// console.log(sum);
