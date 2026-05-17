//1.Student Attendance System
function studentAttendance(present,absent){
   totalAttendance=[...present,...absent] ;
   totalAttendance.push("Prem");
   console.log(totalAttendance);
}
studentAttendance(["Ravi","Rahul"],["Rohit","Rakesh"]);

// 2. E-Commerce Cart
function eCommerceCart(mobile,charger){
    let totalDetails={...mobile,...charger,deliveryDate: "07-07-2026"}
    console.log(totalDetails);
}
let mobile={
    mobileModel: "Oppo A79 5g",
    mobilePrice: 25000    
};
let charger={
    chargerModel: "Oppo 33w charger",  
    chargerPrice: 2000
};
eCommerceCart(mobile,charger);

// 3. Food Delivery App
function orderFood(...foodItems){
    console.log("Total items ordered: "+foodItems);
    console.log("First item: "+foodItems[0]);
    console.log("Last item: "+foodItems[foodItems.length - 1]);
}
orderFood("Pizza", "Burger", "Pasta", "Salad");

// 4. Employee Salary Filter
let employeeDetials = [
    {empName : "arun" , salary : 10000},
    {empName : "balaji" , salary : 20000},
    {empName : "john" , salary : 30000},
    {empName : "david" , salary : 40000},
    {empName : "joseph", salary : 50000},
    {empName : "fazil" , salary : 60000}
]
let salaryDate = employeeDetials.filter((c,i,t)=>{
    return c.salary > 50000
})
console.log(salaryDate);

//5.Online Game Score Board
let GameScoreBoard = [
    {empName : "arun" , score : 100},
    {empName : "balaji" , score : 200},
    {empName : "john" , score : 300},
    {empName : "david" , score : 400},
    {empName : "joseph", score : 500},
    {empName : "fazil" , score : 600}
]
let totalScore = GameScoreBoard.reduce((acc,c,i,t)=>{
    return acc + c.score
},0)
console.log(totalScore);


