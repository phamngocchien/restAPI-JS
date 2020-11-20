// var htmls = courses.map2(function(course){
     //      return `<h2>${course}</h2>`;
     // });
     // console.log(htmls.join(''))
     
// var courses = ['JS', 'PHP', 'Ruby'];

// Array.prototype.map2 = function(callback){
//      var output = [];
//      var arrayLength = this.length;
//      for (var i = 0; i < arrayLength; ++i){
//           var result = callback(this[i], i);
//           output.push(result);
//      }
//      return output;
// }
// var htmls = courses.map(function(course){
//      return `<h2>${course}</h2>`;
// })
// console.log(htmls.join(''));
     
/*-------------------------Callback----------------------------*/
// function myFunction(param){
//      if (typeof param === 'function'){
//           param('Chien')
//      }
// }
// function myCallback(value){
//      console.log('value: ',value);
// }
// myFunction(myCallback);

/*-------------------------forEach2----------------------------*/

// Array.prototype.forEach2 = function(callback){
//      for(var index in this){
//           if(this.hasOwnProperty(index)){
//                callback(this[index], index, this);
//           }
//      }
// }
// courses.forEach2(function(course, index, array){
//      console.log(course, index, array);
// });
// var courses = [{
//           name: 'Javascript',
//           coin: 1000,
//           isFinish: false,
//      },
//      {
//           name: 'PHP',
//           coin: 750,
//           isFinish: false,
//      },
//      {
//           name: 'C++',
//           coin: 800,
//           isFinish: false,
//      }
// ]
/*-----------filter-------------*/
// Array.prototype.filter2 = function(callback){
//      var output = [];
//      for (var index in this){
//           if(this.hasOwnProperty(index)){
//                var result = callback(this[index]);
//                     output = result.push();
//           }
//      }
// }
// var result = courses.filter(function(course){
//      return course.coin > 750;
// })
// console.log(result)

/*-----------some-------------*/
// Array.prototype.some2 = function(callback){
//      for (var index in this){
//           if(this.hasOwnProperty(index)){
//                var result = callback(this[index]);
//                if(result){
//                     return true;
//                }
//           }
//      }
//      return false;
// }
// var result = courses.some2(function(course){
//      return course.isFinish;
// })
// console.log(result)

/*-----------every-------------*/
// Array.prototype.every2 = function(callback){
//      for (var index in this){
//           if(this.hasOwnProperty(index)){
//                var result = callback(this[index]);
//                if(!result){
//                     return false;
//                }
//           }
//      }
//      return true;
// }
// var result = courses.every2(function(course){
//      return course.isFinish;
// })
// console.log(result);

// var checkboxNodes = document.querySelectorAll('input')
// var checkbox1Element = document.querySelector('input')

// var div = document.getElementsByTagName('input');
// var x = div.getElementsByTagName('checked').item(3)
// console.log(checkboxNodes);

// var listItems1 = document.querySelectorAll('.parent>li')
// console.log(listItems1)
// var listItems2 = document.querySelectorAll('.parent>ul>li')
// console.log(listItems2)
// var listItems3 = document.querySelectorAll('.parent>li, .parent>ul>li')
// console.log(listItems3)

// var x = document.querySelector('a:nth-child(2)');
// console.log(x)
// var f8ShortLink = x.setAttribute('href','https://f8.edu.vn')
// var y = document.querySelector('div');
// y.setAttribute('data-url','https://f8.edu.vn')
// console.log(y)

// var x = document.querySelector('a');
// console.log(x)
// var y = x.setAttribute('class','blue-color')

//inner outer
// var a = document.querySelector('div:first-child');
// a.innerHTML = '<li> Chiến </li> <li> Đẹp </li> <li> Trai </li>'
// var b = document.querySelector('div:nth-child(2)>ul');
// b.outerHTML = '<h1> Nhất quả đất </h1>'

//--------------------------------------------------------------------//
// var h1Element = document.querySelector('h1')
// var h1TagName = h1Element.tagName;
// console.log([h1Element])
// var h1NextElementSibling = h1Element.nextElementSibling;
// console.log(h1NextElementSibling)

// var h1 = document.querySelector('div')
// console.log([h1])
// var x = h1.childNodes[2]
// console.log(x)


// var boxElement = document.querySelector('#box')
// console.log(boxElement)
// Object.assign(boxElement.style,{
//      backgroundColor: '#F05123',
//      fontSize: '2rem'
// })


// DOM events example
  //lấy dữ liệu nhập vào
// var inputValue
// var inputElement = document.querySelector('input[type = text]')
// inputElement.oninput = function(e){
     // console.log(e.target.value)
     //inputValue = e.target.value;
     //muốn gõ đến đâu lấy đó thì thay on change thành oninput
//}
     //lấy dữ liệu từ checkbox
// var checkBox = document.querySelector('input[type = checkbox]')
// checkBox.onchange = function(e){
//      console.log(e.target.checked)
//}
     // lấy dữ liệu từ select
// var checkBox = document.querySelector('select')
// checkBox.onchange = function(e){
//      console.log(e.target.value)
//      }
  // key up / down / press
// document.onkeypress = function(e){
//      console.log(e.which)
//      switch(e.which){
//           case 13:
//                console.log('Chắc chưa em??')
//                break
//           case 27:
//                console.log('Em muốn thoát hả??')
//                break
//           case 32: 
//                console.log('Cách nè!!')
//                break

//      }
// }


// Promise
// function sleep(ms){
//      return new Promise (function(resolve){
//           setTimeout(resolve, ms)
//      })
// }
// sleep(1000)
//      .then(function(){
//           console.log('Chiến');
//           return sleep(1000);
//      })
//      .then(function(){
//           console.log('Đẹp');
//           return sleep(1000);
//      })
//      .then(function(){
//           console.log('Trai');
//           return sleep(1000);
//      })
//      .then(function(){
//           console.log('Quá ');
//           return new Promise(function(resolve, reject){
//                reject()
//           })
//      })
//      .then(function(){
//           console.log('Trời');
//           return sleep(1000);
//      })
//      .catch(function(){
//           console.log('Rất tiếc, mày không đẹp trai')
//           return sleep(1000);
//      })

// promise.resolve, promise.reject
// var promise = Promise.resolve('Beauty')
// promise
//      .then(function(KQ){
//           console.log('result: ' + KQ)
//      })
//--------------------------------------------------------------------------
//Promise example

// var users = [
//      {
//           id: 1,
//           name: 'Chien Pham',
//      },
//      {
//           id: 2,
//           name: 'Bach Pham',
//      },
//      {
//           id: 3,
//           name: 'Quynh Pham',
//      }
// ];
//  var comments = [
//       {
//            id: 1,
//            user_id: 1,
//            content: 'hihi',
//       },
//       {
//           id: 2,
//           user_id: 2,
//           content: 'haha',
//      }
//  ];

 //1. Lấy comments
 //2. Từ comments lấy ra user_id
 //3. từ user_id lấy ra user tương ứng

 // fake API

//  function getComments(){
//       return new Promise(function(resolve){
//           setTimeout(function(){
//                resolve(comments);
//           }, 1000);
//       });
//  }
//  function getUsersByIds(userIds){
//      return new Promise(function(resolve){
//           var result = users.filter(function(user){ // tìm tất cả các phần từ
//                return userIds.includes(user.id) // trả về các phần tử có user. id
//           })
//           setTimeout(function(){
//                resolve(result);
//           }, 1000)
//      })
//  }
//  getComments()
//  .then(function(comments){
//      var userIds = comments.map(function(comment){
//           return comment.user_id
//      });
//      return getUsersByIds(userIds)
//      .then(function(users){
//          return {
//               users: users,
//               comments: comments
//          }
//      })
//  })
//  .then(function(data){
//      //  console.log(data)
//      var commentBlock = document.getElementById('comment-block');
//      var html = '';
//      data.comments.forEach(function(comment){
//           var user = data.users.find(function(user){
//                return user.id === comment.user_id;
//           })
//           html += `<li>${user.name}: ${comment.content}</li>`
//      })
//      commentBlock.innerHTML = html;

// })

//------------------------------------------------------------------------------------
//Fetch
// var postApi = 'https://jsonplaceholder.typicode.com/posts';
// //stream - luồng dữ liệu trả về
// fetch(postApi)
//      .then(function(response){
//           return response.json()
//           // json.parse: Json -> Javascript type
//      })
//      .then(function(posts){
//           var htmls = posts.map(function(post){
//                return `<li>
//                     <h2>${post.title}</h2>
//                     <p>${post.body}</p>
//                </li>`
//           })
//           var html = htmls.join('');
//           document.getElementById('post-block').innerHTML= html;
//      })
//      .catch(function(err){
//           console.log('Failed')
//      })
//--------------------------------------------------------------------------------------
//Json server

// var courserAPI = "http://localhost:3000/courses";
// fetch(courserAPI)
//      .then(function(response){
//           return response.json()
//      })
//      .then(function(course){
//           console.log(course)
//      })   

//--------------------------------------------------------------------------------------
// LIST
// var coursesApi = "http://localhost:3000/courses";
// function start(){
//      getCourses(renderCourses);
//      handleCreateForm();
// }
// start()

// // functions
// function getCourses(callback){
//      fetch(coursesApi)
//           .then(function(response){
//                // console.log(response.json)
//                return response.json()
//           })
//           .then(callback)
// }
// function renderCourses(courses){
//      var listCourseBlock = document.querySelector("#list-course");
//      var htmls = courses.map(function(course){
//           return `
//                <li>
//                     <h4>${course.name}</h4>
//                     <p>${course.description}</p>
//                     <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
//                     <button onclick="handleRepairCourse(${course.id})">Sửa</button>
//                </li>
//           `;
//      });
//      listCourseBlock.innerHTML = htmls.join('');
// }

// function createCourse(data, callback){
//      var options = {
//           method: 'POST',
//           headers: {
//                'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//      }
//      fetch(coursesApi, options)
//      .then(function(reponse){
//           reponse.json();
//      })
//      .then(callback)
// }
// function handleCreateForm(){
//      var createBtn = document.querySelector('#create');
//      createBtn.onclick = function(){
//           var name = document.querySelector('input[name="name"]').value;
//           var description = document.querySelector('input[name="description"]').value;
//           var formData = {
//                name: name,
//                description: description
//           };
//           createCourse(formData, function(){
//                getCourses(renderCourses)
//           });
//      }
// }
// function handleDeleteCourse(id){
//      var options = {
//           method: 'DELETE',
//           headers: {
//                'Content-Type': 'application/json'
//           },
//      }
//      fetch(coursesApi + "/" + id, options)
//      .then(function(reponse){
//           reponse.json();
//      })
//      .then(function(){
//           getCourses(renderCourses)
//      })
// }
//----------------------------------------------------------------------
// list-TH

var coursesAPI = "http://localhost:3000/courses";
var listCourseBlock = document.querySelector("#list-course");
function start(){
     getCourses(function(course){
          renderCourses(course)
     });
     handleCreateForm();
}
start();// hàm chạy
function getCourses(callback){ // hàm lấy course
     fetch(coursesAPI)
          .then(function(response){
               return response.json();
          })
          .then(callback)
}
function renderCourses(courses){
     var htmls = courses.map(function(course){// trả về danh sách học theo danh sách ra màn hình
          return `
               <li class= "course-list-${course.id}">
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick = "handleDeleteCourse(${course.id})">Xóa</button>
                    <button onclick = "handleEditCourse(${course.id})">Sửa</button>
               </li>
          `;
     })
     listCourseBlock.innerHTML = htmls.join('');
}
function createCourse(data, callback){
     var options = {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
     }
     fetch(coursesAPI, options)
          .then(function(response){
               return response.json();
          })
          .then(callback)
}
function handleCreateForm(){
     var createBtn = document.querySelector("#create");
     createBtn.onclick = function(){
          var nameValue = document.querySelector('input[name="name"]').value;
          var descriptionValue = document.querySelector('input[name="description"]').value;
          var formData = {
               name: nameValue,
               description: descriptionValue
          }
          createCourse(formData, function(){
               getCourses(renderCourses);
          })
     }
}
function handleDeleteCourse(id){
     var options = {
          method: 'DELETE',
          headers: {
               'Content-Type': 'application/json'
          }
     }
     fetch(coursesAPI + "/" + id, options)
          .then(function(response){
               return response.json();
          })
          .then(function(){
               getCourses(renderCourses)
          })
}
function putCourse(id, data, callback){
     var options = {
          method: 'PUT',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
     }
     fetch(coursesAPI + "/" + id, options)
          .then(function(response){
               return response.json();
          })
          .then(callback)
}
function handleEditCourse(id){
     var takeNameValue = document.querySelector('.course-list-' + id + ' h4');
     var takeDescriptionValue = document.querySelector('.course-list-' + id + ' p');
     document.querySelector('input[name="name"]').value = takeNameValue.innerText;
     document.querySelector('input[name="description"]').value = takeDescriptionValue.innerText;
     document.querySelector('#create').setAttribute('id', 'edit');
     document.querySelector("#edit").innerHTML = "Save";
     var takeCreate = document.querySelector('#edit');
     takeCreate.onclick = function(){
               var nameValue = document.querySelector('input[name="name"]').value;
               var descriptionValue = document.querySelector('input[name="description"]').value;     
               var formData2 = {
                    name: nameValue,
                    description: descriptionValue
               }
               putCourse(id, formData2, function(){
                    getCourses(renderCourses);
               })
     }
}
// var API = "http://localhost:3000/courses";
// var listCourse = document.querySelector("#list-course");
// function start(){
//      valueAPI(displayCourses);
//      createCourse();
// }
// start();
// function valueAPI(callback){
//      fetch(API)
//      .then(function(response){
//           return response.json();
//      })
//      .then(function(course){
//           callback(course);
//      })
// }
// function displayCourses(courses){
//      var htmls = courses.map(function(course){
//           //console.log(course)
//           return `
//                <li>
//                <h2>${course.name}</h2>
//                <p>${course.description}</p>
//                </li>    `
//      })
//      listCourse.innerHTML = htmls;
// }
// function postAPI (data, callback){
//      var options = {
//           method: "POST",
//           headers: {
//                'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//      }
//      fetch(API, options)
//           .then(function(response){
//                return response.json()
//           })
//           .then(callback)
// }
// function createCourse(){
//      var createBtn = document.querySelector("#create");
//      createBtn.onclick = function(){
//           var valueName = document.querySelector('input[name="name"]').value;
//           var valueDescription = document.querySelector('input[name="description"]').value;
//           var formData = {
//                name: valueName,
//                description: valueDescription
//           }
//           postAPI(formData, function(){
//                valueAPI(displayCourses)
//           })
//      }
// }

//----------------------------------------------------------------------------------------------------

// ECMAScript 6+

//8. Destructuring
// var array = ['JS', 'PHP', 'Ruby'];
// var [a, b, c] = array;
// var [a, , c] = array;
// var [a,b, ...rest] = array //...rest: lấy giá trị còn lại trong mảng
// console.log(a,c)
// console.log(rest)
//  function logger(a, ...params){
//      //  console.log(params)
//  }
//  logger(1,2,3,4,5,6)
// logger({

// })
// 9. Spread, Spread

// var ar1 = ['1','2','3'];
// var ar2 = ['a','b','c'];
// var ar3 = [...ar1, ...ar2];
// console.log(ar3)
// tương tự với object

// var array = ['JS', 'PHP', 'Ruby','ReactJS'];
// function logger (a,b, ...rest){
//      for (var i = 0; i<rest.length; i++){
//           console.log(rest[i])
//      }
// }
// logger(array)

// 11. Tagged template literals

