/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = (page * 9);
   const ul = document.getElementsByClassName('student-list')[0];
   let studentItem = ' ';
   ul.innerHTML = ' ';

   for(let i = 0; i < list.length; i += 1) {
      studentItem = list[i];
      if(i >= startIndex && i <= endIndex){
         const li = document.createElement('li');
         li.className = 'student-item';
         const student_details_div = document.createElement('div');
         student_details_div.className = 'student-details'

         const img = document.createElement('img');
         img.className = 'avatar';
         let picture = studentItem.picture;
         img.src = picture.thumbnail;

         const heading = document.createElement('h3');
         let name = studentItem.name;
         heading.textContent = `${name.title} ${name.first} ${name.last}`;

         const email = document.createElement('span');
         email.className = 'email';
         let emailAddress = studentItem.email;
         email.textContent = emailAddress;

         const joined_details = document.createElement('div');
         joined_details.className = 'joined-details';
         const jdSpan = document.createElement('span');
         jdSpan.className = 'date';
         joined_details.appendChild(jdSpan);
         let registered = studentItem.registered;
         jdSpan.textContent = `Resgistered: ${registered.date}`;
         
         
         ul.appendChild(li);
         li.appendChild(student_details_div);
         student_details_div.appendChild(img);
         student_details_div.appendChild(heading);
         student_details_div.appendChild(email);
         student_details_div.appendChild(joined_details);
         
         
         
         
      }
      
   }
}


   


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1);

// for(let i = 0; i < data.length; i++){
//    let list = data[i];
//    let name = list.name;
//    let email = list.email;
//    let registered = list.registered;
//     console.log(`${name.title} ${name.first} ${name.last} 
//                   ${email}
//                    ${registered.date}
//                    ${registered.age}`);
// }