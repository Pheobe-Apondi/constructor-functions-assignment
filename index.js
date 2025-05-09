//You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: 
// featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, 
// and simulate access attempts using if-else and switch statements for different roles.



function FeatureToggle (featureName,isEnabled,userGroupAccess){
     this.featureName = featureName
     this.isEnabled = isEnabled
     this.userGroupAccess = userGroupAccess
}

FeatureToggle.prototype.canAccess = function(userRole){
   return this.userGroupAccess.includes(userRole)
};

FeatureToggle.prototype.toggleFeature = function(flag){
            return this.isEnabled = flag

}

FeatureToggle.prototype.simulation = function (userRole){

    if(!this.userGroupAccess.includes(userRole)){
        return `${userRole} does not have  access to  ${this.featureName} feature.`
    }else{
        switch (userRole){
            case "admins":
                 return `${userRole} should have access to the ${this.featureName} feature, once it is enabled.`;
                 break;
            case "product manager":
                 return `${userRole} owns  ${this.featureName} feature.`;
                 break;
            case "betaTesters":
                 return `${userRole} have access to test ${this.featureName} feature.`;
                 break;
            default:
                return `${userRole} has access to ${this.featureName} feature` 

        }

    }
}



const feature1 = new FeatureToggle ("Subscriptions",true,["betaTesters","admins","product manager","scrum master"])
console.log(feature1.canAccess("admins"))
console.log(feature1.toggleFeature(false))
console.log(feature1.simulation("betaTesters"))





// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: 
// freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, 
// hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, 
// and determine if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName
    this.projectDetails = projectDetails
    this.logs = logs
}



TimeLog.prototype.totalEarnings = function () {
    const totalHoursWorked = this.logs.reduce((sum, hours) => sum + hours.hoursWorked, 0)
    console.log(totalHoursWorked)

    const earnings = this.projectDetails.rate * totalHoursWorked
    console.log(earnings)



}


TimeLog.prototype.filteredlogs = function (startDate, endDate) {
    return this.logs.filter(entry => {
        const logDate = new Date(entry.date);
        return logDate >= new Date(startDate) && logDate <= new Date(endDate);
    });

}

TimeLog.prototype.exceededWeeklyHours = function () {
    
        
         const weeklyHours = this.logs.reduce((sum,log) => sum + log.hoursWorked,0);
         if (weeklyHours>40){
            return `${this.freelancerName}:Worked more than 40 hours this week`
         }else{
            return `${this.freelancerName}:Worked less than 40 hours this week`

         } 
}




const freelancer1 = new TimeLog("Alice Johnson", { name: "Alice Johnson", rate: 1000 },
    [
        { date: "2025-02-15", hoursWorked: 4 },
        { date: "2025-02-16", hoursWorked: 7 },
        { date: "2025-03-15", hoursWorked: 6 },
        { date: "2025-03-16", hoursWorked: 10 },
        { date: "2025-03-17", hoursWorked: 8 },
        { date: "2025-03-18", hoursWorked: 7 },
        { date: "2025-03-19", hoursWorked: 9 },
        { date: "2025-03-20", hoursWorked: 6 },

    ]
)

freelancer1.totalEarnings()
console.log(freelancer1.filteredlogs("2025-03-15", "2025-03-17"))
console.log(freelancer1.exceededWeeklyHours())

// You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), 
// items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost,
//  update order status based on payment, and categorize order urgency using switch and conditional statements.


function Order(customer, items, status) {
    this.customer = customer
    this.items = items
    this.status = status
}

Order.prototype.totalCost = function () {
    const total = this.items.reduce((sum, item) => sum + item.unitPrice, 0)
    return total
}

Order.prototype.updateStatus = function (paymentReceived) {
    if (paymentReceived == "yes") {
        this.status = "Paid"
    } else {
        this.status = "Pending"
    }

    return this.status

}

Order.prototype.orderUrgency = function () {
    switch (this.status) {
        case "Paid":
            return "urgency:High";
            break;
        case "pending payment":
            return "urgency:Low"
        default:
            return "Urgency to be determined"
    }


}
const order1 = new Order({ name: "Kevine Silivia", email: "kevine@example.com" },
    [
        { productName: "Detol Soap", quantity: 15, unitPrice: 600 },
        { productName: "Sunflower oil", quantity: 20, unitPrice: 2000 },
        { productName: "Sugar", quantity: 10, unitPrice: 200 },
        { productName: "tea leaves", quantity: 150, unitPrice: 100 },
        { productName: "Milk", quantity: 30, unitPrice: 50 }
    ],
    ""
)

console.log(order1.totalCost())
console.log(order1.updateStatus("yes"))
console.log(order1)
console.log(order1.orderUrgency())


//In a startup’s employee review tool, design an Employee class with properties:
//  id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), 
// and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, 
// and add new feedback based on conditions.

class Employee {
    constructor(id,name,performanceMetrics,feedback){
    this.id = id
    this.name
    this.performanceMetrics = performanceMetrics
    this.feedback = feedback
    }
}

Employee.prototype.averageScore = function (){

    const average = Object.values(this.performanceMetrics)
    return   average.reduce((a,b) => a+b,0)/average.length

}

Employee.prototype.performanceLevel = function (){
    const average = this.averageScore()
    if(average>=7){
        return "excellent performance"
    }else if (average >=5  && average <7){
        return "good performance"
    }else{
        return "average perfomance"
    }
}

Employee.prototype.newFeedback = function() {
    const average = this.averageScore()
    if(average>=7){
        this.feedback = ["excellent performance","Good improvement","Your communication skills have greatly improved"]


     }else if (average >=5  && average <7){
        this.feedback = ["good performance","You've greatly improved on your efficiency","you need to put more work on being a better communicatior"]

    }else{
        this.feedback = ["average performance","you have improved on your communication","you need to put in more effort"]

    }

     return this.feedback
}



const employee1 = new Employee (
    1, "Arsema GebreMichael",
    {communication:6,effiecincy:7,reliabity:8},
   []
)

console.log(employee1.averageScore())
console.log(employee1.performanceLevel())
console.log(employee1.newFeedback())
console.log(employee1)

// Build a simple e-learning system where a Course class has properties: 
// title (string), instructor (object with name and expertise), and students (array of objects with name and completionStatus), 
// then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, 
// and use control flow to output different messages for instructors with more or less than 5 students.

class Course{
    constructor(title,instructor,students){
           this.title = title
           this.instructor = instructor
           this.students = students
    }
}


Course.prototype.completedCourse = function (){
           return this.students.filter(student=> student.status === true).map(student => student.name);

}

Course.prototype.enrolledByExpertise = function (courseName){
    return this.students.filter(student => student.expertise ===courseName).length

}

Course.prototype.messageForInstructor = function (){
       if(this.students.length >5){
          return `Instructor ${this.instructor.name}: You are in charge of more than 5 students`
       }else{
        return `${this.instructor.name}: You are in charge of less than 5 students`
       }
}


const course1 = new Course(
    "Product Management",
    {name:"Judy Gikuni",expertise:"Product Manager"},
    [
       {name:"Pheobe Apondi",expertise:"Software engineering",status:true},
       {name:"Joan Moraa",expertise:"Computer Science",status:true},
       {name:"Alice Moraa",expertise:"Software engineering",status:false},
       {name:"John Kembo",expertise:"Computer Science",status:true},
       {name:"Alice Kemboi",expertise:"UI Design",status:true},
       {name:"JJ Candice",expertise:"Software engineering",status:false}
    ]
)


console.log(course1.completedCourse())
console.log(course1.enrolledByExpertise("Software engineering"))
console.log(course1.messageForInstructor("Software engineering"))

