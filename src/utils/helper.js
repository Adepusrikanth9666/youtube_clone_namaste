const nameList = [
  "Aarav Kumar",
  "Aditi Sharma",
  "Arjun Patel",
  "Diya Singh",
  "Hrithik Gupta",
  "Ishika Chopra",
  "Neha Kumar",
  "Rohan Sharma",
  "Ananya Singh",
  "Vivek Patel",
  "Sanya Gupta",
  "Raj Kumar",
  "Priya Chopra",
  "Aryan Singh",
  "Anika Sharma",
  "Kabir Patel",
  "Pooja Kumar",
  "Yash Chopra",
  "Aanya Singh",
  "Rohit Sharma",
  "Tanvi Gupta",
  "Vikram Kumar",
  "Trisha Patel",
  "Dev Singh",
  "Sara Chopra",
  "Ravi Sharma",
  "Isha Patel",
  "Kunal Kumar",
  "Nisha Gupta",
  "Amit Singh",
  "Meera Chopra",
  "Karan Kumar",
  "Akanksha Patel",
  "Harsh Singh",
  "Juhi Sharma",
  "Rajat Gupta",
  "Shreya Chopra",
  "Suresh Patel",
  "Riya Kumar",
  "Prakash Singh",
  "Anjali Sharma",
  "Vishal Chopra",
  "Nidhi Patel",
  "Vijay Kumar",
  "Kirti Singh",
  "Ritu Sharma",
  "Vikas Gupta",
  "Shubham Patel",
  "Meenakshi Chopra",
  "Alok Kumar",
  "Swati Singh",
  "Rahul Sharma",
  "Geeta Patel",
  "Vinod Gupta",
  "Sneha Chopra",
  "Rohini Kumar",
  "Abhishek Singh",
  "Mala Sharma",
  "Rajesh Patel",
  "Suman Gupta",
  "Manoj Kumar",
  "Preeti Chopra",
  "Gaurav Sharma",
  "Anushka Singh",
  "Neeraj Patel",
  "Sheetal Gupta",
  "Mohan Kumar",
  "Jyoti Sharma",
  "Aditya Chopra",
  "Kavita Patel",
  "Sanjay Gupta",
  "Prerna Singh",
  "Sakshi Sharma",
  "Rahul Patel",
  "Asha Chopra",
  "Satish Kumar",
  "Naina Gupta",
  "Dinesh Singh",
  "Arti Sharma",
  "Rajendra Patel",
  "Anand Kumar",
  "Sunita Chopra",
  "Rajeev Singh",
  "Nandini Gupta",
  "Ajay Sharma",
  "Mukesh Patel",
  "Madhuri Chopra",
  "Rakesh Singh",
  "Manisha Kumar",
  "Suresh Gupta",
  "Neha Chopra",
  "Anurag Patel",
  "Komal Sharma",
  "Amita Singh",
  "Varun Kumar",
  "Komal Chopra",
  "Alok Singh",
  "Jaya Patel",
  "Yogesh Gupta",
  "Sonali Sharma",
  "Shiv Kumar",
  "Rajni Chopra",
  "Ashok Singh",
  "Simran Patel",
  "Vijay Sharma",
  "Divya Gupta",
  "Sudhir Kumar",
  "Nisha Chopra",
  "Sanjeev Patel",
  "Maya Sharma",
  "Deepak Singh",
  "Shweta Gupta",
  "Arun Kumar",
  "Lata Chopra",
  "Sushil Singh",
  "Sonia Patel",
  "Sunil Gupta",
  "Vandana Sharma",
  "Rishi Chopra",
  "Manju Singh",
  "Umesh Patel",
  "Kusum Gupta",
  "Asha Singh",
  "Ramesh Kumar",
  "Deepika Chopra",
  "Anil Singh",
  "Renu Patel",
  "Rajni Gupta",
  "Rahul Sharma",
  "Sarika Chopra",
  "Rajeev Singh",
  "Sangeeta Patel",
  "Vikas Kumar",
  "Nandita Sharma",
  "Santosh Chopra",
  "Rachna Singh",
  "Girish Patel",
  "Arpita Gupta",
  "Amit Chopra",
  "Ritu Singh",
  "Avinash Kumar",
  "Poonam Sharma",
  "Rajendra Chopra",
  "Sweta Patel",
  "Mukul Gupta",
  "Kavita Singh",
  "Akash Sharma",
  "Usha Patel",
  "Dinesh Gupta",
  "Rinku Kumar",
  "Harish Chopra",
  "Rohini Singh",
  "Mohan Patel",
  "Alka Sharma",
  "Rahul Gupta",
  "Aarti Chopra",
  "Ashutosh Singh",
  "Renuka Patel",
  "Ankit Sharma",
  "Komal Singh",
  "Amit Gupta",
  "Sunita Chopra",
  "Rajeev Singh",
  "Nandini Patel",
  "Manoj Kumar",
  "Prerna Gupta",
  "Suresh Chopra",
  "Anjali Singh",
  "Rajat Patel",
  "Asha Gupta",
  "Sachin Chopra",
  "Rekha Singh",
  "Sanjay Kumar",
  "Pooja Patel",
  "Ravi Chopra",
  "Priyanka Gupta",
  "Vivek Singh",
  "Anita Sharma",
  "Vikram Patel",
  "Meena Gupta",
  "Aryan Chopra",
  "Monika Singh",
  "Rajesh Kumar",
  "Shalini Patel",
  "Gaurav Gupta",
  "Shikha Chopra",
  "Manish Singh",
  "Divya Patel",
  "Deepika Gupta",
  "Alok Chopra",
  "Rashmi Singh",
  "Rajiv Kumar",
  "Anuradha Patel",
  "Vijay Gupta",
  "Lata Chopra",
  "Rahul Singh",
  "Anjali Patel",
  "Sanjeev Gupta",
  "Neha Chopra",
  "Vikas Singh",
  "Priya Sharma",
  "Ajay Patel",
  "Suman Gupta",
  "Rohit Chopra",
  "Kajal Singh",
  "Suresh Patel",
  "Nidhi Gupta",
  "Anand Sharma",
  "Shivani Patel",
  "Pradeep Singh",
  "Pooja Gupta",
  "Arjun Chopra",
  "Vijay Singh",
  "Swati Patel",
  "Rajat Sharma",
  "Akshay Gupta",
  "Anu Chopra",
  "Rohini Singh",
  "Sarvesh Kumar",
  "Anita Patel",
  "Rajeev Gupta",
  "Neeta Chopra",
  "Sushil Singh",
  "Kavita Patel",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function generateRandomUserAvatarURL(username) {
  return `https://robohash.org/${username}.png`;
}