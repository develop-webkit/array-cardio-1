"use strict;"

const inventor = [
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, 
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, 
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, 
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, 
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
];

const people = ['Beck1, Glenn', 'Becker2, Aarl', 'Ceckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi' , 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken' , 'Ciden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Firrell, Zugustine', 'Zlack, Elk', 'Blair, Robert', 'Blair2, Tony', 'Blake1, William']; 


const data = ['car','walk','car','car','car','car','walk','walk','walk','walk','walk','walk','walk','van','van','van'];

const newData = data.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(newData)