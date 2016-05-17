// I am creating this objetc using object literal.
var my_College = {
	name: "Baruch",
	type: "Public",
	located: "23rd street,Lexington"
}
var jamesmyCollege = new myCollege("city college", "public", "somewhere in manhattan");

// i am building this object using constructor function.
function myCollege(name, type, located){
	this.name = name;
	this.type = type;
	this.located = located;
}

var jamesmyCollege = new myCollege("city college", "public", "somewhere in manhattan");
var jim_myCollege = new myCollege("Lehman", "public", "Bronx");


// now i can use dot notation method to access the attributes of the object: 
// jim_myCollege.name should return Lehman.



// i have added a function inside myCollege object.Now i can access it by calling the object first follwed by a dot(.) and the function name, which is admission.
var my_College = {
	name: "Baruch",
	type: "Public",
	located: "23rd street,Lexington",
	admission: function(){
		return "Admission for the fall semester at " + this.name + " is going on."
	}
}

// I am adding an additional feature into my objetc myCollege through prototype:
myCollege.prototype.semester = "3 per year";

// Loop // Loop // Loop // Loop // Loop // Loop // Loop // Loop // Loop // Loop // Loop 
var a = "";
var myCollege = {name:"Baruch", type:"public", located:"23rd street,Lexington"}; 
var x;
for (x in myCollege) {
    a += myCollege[x] + " ";
}

// create an object called Multiplier:// create an object called Multiplier:

function Multiplier() {
    var lastAnswer = 1;
    

    this.multiply = function(a) {
        var b = a * lastAnswer;
        lastAnswer = b;
        return lastAnswer;
    }
    this.getCurrentValue = function() {
        return lastAnswer;
    }
}


// Answer to the question number 4:

function Photo(name,place){
	this.name = name;
	this.place = place;
}

function Album(){
	this.pictures = []
	this.addPic = function(input){
		this.pictures.push(input)
	}
}
var myPhoto1 = new Photo("king-kong", "Flushing")
var myPhoto2 = new Photo("Batman", "LA")

var myAlbum = new Album()

/// ////////Answer to the question number 5:////////////////////////
var Person = function(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age
}

function Student(){
	this.backpack =true;
	this.books = true;
	Person.apply(this,arguments);
	
}
Student.prototype =new Person();

function Teacher(){
	this.PhD =true;
	this.teaches = true;
	Person.apply(this,arguments);
	
}

Student.prototype = new Person();

Teacher.prototype = new Person();


var teacher = new Teacher("John", "Paul", 50);
var student = new Student("James", "Pak",20);

Person.prototype.nationality = "American";

Person.prototype.name = function(){
	 return this.firstName + " " + this.lastName;
}

Person.prototype.state = "New York";


function School(){
	this.save = []
	this.addFolks = function(input){
		this.save.push(input)
	} 
	
}
var newSchool = new School()
