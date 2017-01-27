//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      'to simplify and clarify object inheritance, avoiding misrepresentation of objects through naming repetition'

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      '1. Explicit' 
      '2. Implicit' 
      '3. Default' 
      '4. new Keyword' 


  // 3) What is the difference between call and apply?

      //Answer
      'call takes in parameters'
      'apply takes in an array'

  // 4) What does .bind do?

      //Answer
      'binds the function to a specific object, it does not call the function'


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

    var user = {
      username: 'btagge',
      email: 'btagge@gmail.com',
      getUsername: function() {
        return this.username;
        
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(brand, make, year) {
    this.brand = brand;
    this.make = make;
    this.year = year;
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.move = 0;
mustang.move = 0;

Car.prototype.moveCar = function() {
  return this.move += 10;
}

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here

  getYear.call(prius);
  getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here
  undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  'The Window, or the global scope of javascript'

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
