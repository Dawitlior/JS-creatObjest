//1.	צרו אובייקט של מנהל, עם שדות של שם פרטי, שם משפחה, גיל ושכר ותנו להם ערכים.
//  var maneger = {
// firstName : 'lior',
// lastName : 'dawit',
// age : 25,
// money : 45450 
// }



// 2.	צרו אובייקט של עובד, עם שדות של שם מלא, שנת לידה, אימייל וכתובת ותנו להם ערכים.
// var worker = {
// firstName : 'yosi',
// lastName : 'balacho',
// bornIn : 1997,
// email : 'yosi@gmail.com',
// adress : 'beerYakov'
// }



// 2.	צרו אובייקט של עובד, עם שדות של שם מלא, שנת לידה, אימייל וכתובת ותנו להם ערכים.

// var frute = {
// name : 'apple',
// color : 'Red',
// type : 'tree'
// }



// 7.	צרו אובייקט של כיתה, עם שדות של מספר הכיתה, מספר התלמידים ושמות התלמידים, תנו ערכים הגיוניים, שמות התלמידים הוא מערך של 5 שמות.
// var myClass = {
// numberClass : 1,
// numberStudents : 5,
// namesOfStudents : ['yosi,yaso,lior,naten,taka']
// }
// for(var i = 0; i < myClass.namesOfStudents.length;i++){
//     document.write(myClass.namesOfStudents[i]);
// }
// var myKee = prompt('enter a kea')
// console.log(myClass[myKee]);




// 9.	צרו אובייקט של גן ילדים, עם שדות של שם גננת, מספר הילדים ושמות הילדים, תנו ערכים הגיוניים, שמות הילדים הוא מערך של 10 שמות.

// var schollkids = {
// techer : 'noa',
// numberOfKids : 10,
// nameOfKids : ['yoav' , 'natan', 'elias' , 'yaniv' , 'noach' ,'lior' , 'david' , 'eldad','yoni','dalia']
// }
// for(var i = 0 ; i<schollkids['nameOfKids'].length; i++){
// document.write(schollkids[nameOfKids][i] + "<br>")
// }

// var someKey = prompt('Type a key')
// document.write(schollkids[someKey])




// 11.	קלטו מהמשתמש key והדפיסו את הערך שלו למסך.
// var myObject = {};
// myObject.name = prompt("tell me someting");
// console.log(myObject);




// 12.	צרו אובייקט של כיתה, בעזרת קלטים מהמשתמש צרו שדות של מספר הכיתה, מספר התלמידים וגיל והדפיסו את האובייקט ללוג.

// var bestClass = {}
// bestClass.numberClass = +prompt("tell me what is your number class");
// bestClass.numberStudents = +prompt("tell me how much students in the class");
// bestClass.age = +prompt("what your age");
// console.log(bestClass);




// 14.	צרו אובייקט של מנהל, בעזרת קלטים צרו שדות של שם פרטי, שם משפחה, גיל ושכר ותנו להם ערכים מהמשתמש.
//     var maneger = {}
// for(var i = 0 ; i<4 ; i++){
//     var valueFromUser = +prompt("that your value")
//     var keyFromUser = +prompt("what the key")
//     maneger[keyFromUser] = valueFromUser ; 
// }



// 13.	צרו אובייקט של מורה, בעזרת קלט צרו שדה של שם ותנו לו ערך מהמשתמש.
    // var techer = {}
    // var nameValue = prompt("what your name")
    // var nameKey = prompt("what the key")
    
    // techer[nameKey] = nameValue ;




// 15.	צרו אובייקט של משתמש, בעזרת קלטים צרו שדות של שם פרטי, שם משפחה, אימייל וסיסמה ותנו להם ערכים מהמשתמש, הדפיסו את האובייקט למסך, כל ערך בדיב משלו.

// var someUser = {};
// for(var i = 0 ; i<2 ; i++){
//     var valueFromUser = prompt("what your value")
//     var keyFromUser = prompt("what your key")
//     someUser[keyFromUser] = valueFromUser
//     document.write("<div>" + someUser[keyFromUser] + "</div>")
// }


// 16.	צרו 4 אובייקטים של רכב, לכל רכב יש שדות של חברה, צבע, סמ"ק ושנתון. תנו להם ערכים מהמשתמש, הדפיסו כל אובייקט למסך, כל אובייקט בדיב משלו.

// function someFunction(){
//   var carsArray = [];
//   for (var i = 0; i < 4; i++) {
//     var car = {};
//     (car.company = prompt("type random company")),
//       (car.color = prompt("type random color")),
//       (car.type = prompt("type random type")),
//       (car.kg = +prompt("type random kg")),
//       carsArray.push(car);
//     document.write(
//       "<div>" +
//         car.company +
//         "" +
//         car.color +
//         " " +
//         car.type +
//         " " +
//         car.kg +
//         "</div>"
//     );
//   }
// }
// someFunction();




// 17.	צרו פונקציה שיוצרת 3 אובייקטים של חתול, לכל חתול יש שם, שנת לידה, סוג ומשקל. תנו להם ערכים מהמשתמש, הדפיסו כל אובייקט למסך, כל אובייקט ב h1 משלו.

// function printObjectToScreen(){
//     var array = []
//     for(var i = 0 ; i<4 ; i++){
//        var cat = {};
//        cat.name = prompt("type random name");
//        cat.year = prompt("type random year");
//        cat.type =  prompt("type random type of cat");
//        cat.kg = +prompt("type kg");
//        array.push(cat);
//        document.write(
//            "<h1>" + cat.name + " "+ cat.year + " " + cat.type + " " + cat.kg + "</h1>"
//        )
//     }
// }


// 18.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של כלב, לכל כלב יש שם, גיל, סוג ושם בעלים. תנו להם ערכים מהמשתמש, הדפיסו כל אובייקט למסך, כל אובייקט ב p משלו.

// function printAllObjectToScreen(){
//     var user = +prompt("type random number")
//     someArray = []
//     for(var i = 0 ; i<user; i++){
//         var dog = {}
//         dog.name = prompt("type random name")
//         dog.age = +prompt("type random age")
//         dog.type = prompt("type random type")
//         dog.owners = prompt("type random owners name")
//         someArray.push(dog)
//         document.write(
//           "<p>" + dog.name + "</p>",
//           "<p>" + dog.age + "</p>",
//           "<p>" + dog.type + "</p>",
//           "<p>" + dog.owners + "</p>"
//         );
//     }
// }
//     printAllObjectToScreen();


// 19.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של חרק, לכל חרק יש שם רגיל, שם מדעי, מספר רגליים והאם יש לו כנפיים. תנו להם ערכים מהמשתמש, הדפיסו רק את החרקים שיש להם כנפיים, כל חרק ב H3 משלו.

// function printOnlyTheBugsWithWings(){
//     var userNumber = +prompt("type random number");
// someArray = []
// for(var i = 0 ; i<userNumber ; i++){
//     var bug = {}
//     bug.name = prompt("type random name");
//     bug.scienceName = prompt("type random Scientific name");
//     bug.numberLegs = +prompt("type random number of legs");
//     bug.wings = confirm("type if he had some wings");
//     someArray.push(bug)
//     if(bug.wings == 'yes'){
//         document.write(someArray[bug.wings])
//     }}}
// printOnlyTheBugsWithWings();




// 20.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של ילד, לכל ילד יש שם מלא, גיל, והאם הוא בגן. תנו להם ערכים מהמשתמש, הדפיסו רק את הילדים מעל גיל 4 למסך, כל ילד ב p משלו.
// function printOnlySpsificAge(){
//     var userNumber = +prompt("type random number")
// someArray = []
// for(var i = 0 ; i<userNumber ; i++){
//     var theKid = {}
//     theKid.name = prompt("type random name");
//     theKid.age = +prompt("type");
//     theKid.garden = confirm("did the kid learn in scholl?");
//     someArray.push(theKid);
//     if(theKid.age>4){
//         document.write("<p>" + theKid.name + "</p>");
//     }
// }
// }

// printOnlySpsificAge();


// 21.	צרו פונקציה המקבלת מספר כארגומנט ומייצרת מספר אובייקטים, על פי המספר, של מחשב, לכל מחשב יש חברה, דגם, משקל והאם יש במלאי.
//  תנו להם ערכים מהמשתמש, הדפיסו רק את המחשבים שיש במלאי והמשקל שלהם מעל 2 קילו למסך, כל מחשב ב p משלו.








// 22.	צרו פונקציה המקבלת מספר כארגומנט ומייצרת מספר אובייקטים, על פי המספר, של מורה, לכל מורה יש שם מלא, שכר שעתי, אימייל ושנת לידה. תנו להם ערכים מהמשתמש, הדפיסו רק את המורים שמקבלים יותר מ 100  שקל לשעה או שנת הלידה שלהם נמוכה מ 1990 למסך, כל מורה ב SPAN משלו.

