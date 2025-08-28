1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:
getElementById:এটি একটি নির্দিষ্ট Element নিয়ে কাজ করতে ব্যবহার করা হয়।

getElementsByClassName: অনেক গুল Element নিয়ে কাজ করার সময় সব Element এক বারে ধরে কাজ করার জন্য একই Class Name দিয়ে কাজ করা হয়।

querySelector: যা সমস্ত ম্যাচিং উপাদান খুঁজে বের করে এবং তা ফিরিয়ে দেয়।

querySelectorAll: একই সাথে সব ম্যাচিং এলিমেন্ট খুঁজে বের করে। 


2.How do you **create and insert a new element into the DOM**?
ANS:
    const newElement = document.getElementById("ID").innerText
এটি দ্বারা নতুন element create করে তা 
document.getElementById("ID").innerText=newElement 
DOM এর ভিতরে প্রবেশ করাবো ।


3. What is **Event Bubbling** and how does it work?
ANS:
একটি child element-এ event ঘটলে সেই event parent element-এর দিকে ধাপে ধাপে propagate যায় ।
যেমনঃ child → parent → document → window

5. What is the difference between **preventDefault() and stopPropagation()** methods?

ANS:
preventDefault() যা কোন বাটন ক্লিক ইভেন এ ক্লিক করলে পেজ অটো রিলোড কে থামায়।