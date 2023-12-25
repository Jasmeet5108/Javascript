let arrOfObj = [
    {
        name: "Jasmeet",
        age: 21,
        course: "Python",
    },
    {
        name: "Shivam",
        age: 20,
        course: "Java",
    },
    {
        name: "Ankit",
        age: 22,
        course: "C++",
    }
]


// if let text = ``; is outside of loop

let text = ``;
for (i in arrOfObj) {
    console.log(arrOfObj[i]);
    text += `\n The name is ${arrOfObj[i].name}. \n His age is ${arrOfObj[i].age}. \n Course is ${arrOfObj[i].course} \n`;
    console.log(text);
    i++;
}

// Output 

/*
{ name: 'Jasmeet', age: 21, course: 'Python' }

 The name is Jasmeet.
 His age is 21.
 Course is Python

{ name: 'Shivam', age: 20, course: 'Java' }

 The name is Jasmeet.
 His age is 21.
 Course is Python

 The name is Shivam.
 His age is 20.
 Course is Java

{ name: 'Ankit', age: 22, course: 'C++' }

 The name is Jasmeet.
 His age is 21.
 Course is Python

 The name is Shivam.
 His age is 20.
 Course is Java

 The name is Ankit.
 His age is 22.
 Course is C++
 */



// if let text = ``; is inside of loop

for (i in arrOfObj) {
    let text = ``;
    console.log(arrOfObj[i]);
    text += `\n The name is ${arrOfObj[i].name}. \n His age is ${arrOfObj[i].age}. \n Course is ${arrOfObj[i].course} \n`;
    console.log(text);
    i++;
}

// Output 

/* { name: 'Jasmeet', age: 21, course: 'Python' }

The name is Jasmeet. 
His age is 21. 
Course is Python 

{ name: 'Shivam', age: 20, course: 'Java' }

The name is Shivam. 
His age is 20. 
Course is Java 

{ name: 'Ankit', age: 22, course: 'C++' }

The name is Ankit. 
His age is 22. 
Course is C++
*/