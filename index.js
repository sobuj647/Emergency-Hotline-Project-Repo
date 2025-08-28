// Heart Icon Function:
document.getElementById("heart-icon-btn").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})
document.getElementById("heart-icon-btn2").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})
document.getElementById("heart-icon-btn3").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})
document.getElementById("heart-icon-btn4").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})
document.getElementById("heart-icon-btn5").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})
document.getElementById("heart-icon-btn6").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})
document.getElementById("heart-icon-btn7").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})
document.getElementById("heart-icon-btn8").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})
document.getElementById("heart-icon-btn9").addEventListener('click',function(e){ 
    e.preventDefault()
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)
    
    const newAvailableHeart=  1+ availableHeart;
    document.getElementById("available-heart").innerText=newAvailableHeart
    
})






// Call Button Function :
let callHistoryData = [];

// card- 1:

document.getElementById("call-btn").addEventListener('click',function(e){ 
    
    alert('কল করুন জাতীয় জরুরি সেবা.....999')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'জাতীয় জরুরি সেবা',
        number:'999',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})

// card-2:

document.getElementById("cal-btn2").addEventListener('click',function(e){ 
    
    alert('কল করুন বাংলাদেশ পুলিশ.....999')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'পুলিশ',
        number:'999',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})

// card-3:

document.getElementById("cal-btn3").addEventListener('click',function(e){ 
    
    alert('কল করুন ফায়ার সার্ভিস.....999')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'ফায়ার সার্ভিস',
        number:'999',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})

// card-4:

document.getElementById("call-btn4").addEventListener('click',function(e){ 
    
    alert('কল করুন জরুরি সেবা অ্যাম্বুলেন্স.....01994-999999')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'অ্যাম্বুলেন্স',
        number:'01994-999999',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})

// card-5:
document.getElementById("call-btn5").addEventListener('click',function(e){ 
    
    alert('কল করুন নারী ও শিশু সহায়তা.....109')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'নারী ও শিশু সহায়তা',
        number:'109',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})

// card-6:
document.getElementById("call-btn6").addEventListener('click',function(e){ 
    
    alert('কল করুন দুর্নীতি দমন কমিশন.....106')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'দুদক',
        number:'106',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})

// card-7:
document.getElementById("call-btn7").addEventListener('click',function(e){ 
    
    alert('কল করুন জরুরি বিদ্যুৎ সরবরাহ.....16216')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'বিদ্যুৎ বিভ্রাট',
        number:'16216',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})



// card-8:
document.getElementById("call-btn8").addEventListener('click',function(e){ 
    
    alert('কল করুন ব্র্যাক.....16445')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'ব্র্যাক',
        number:'16445',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})


// card-9:
document.getElementById("call-btn9").addEventListener('click',function(e){ 
    
    alert('কল করুন বাংলাদেশ রেলওয়ে.....163')

    const availableCoin = parseInt(document.getElementById("available-coin").innerText)
    console.log(availableCoin)

    // Condition Feild in card:
    if(availableCoin<20 || availableCoin===0){
        alert('পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কইয়েন লাগবে...')
        return;
    }
    const newAvailableCoin = availableCoin-20;
    document.getElementById("available-coin").innerText=newAvailableCoin

    // Call history :

    const data={
        name:'বাংলাদেশ রেলওয়ে',
        number:'163',
        time:new Date().toLocaleTimeString()
    }
    callHistoryData.push(data)

    // Call History Function :
const callHistoryContainer = document.getElementById("call-history-container")
callHistoryContainer.innerHTML="";
for(const data of callHistoryData){
    console.log(data)
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="mt-[50px] rounded-lg shadow-xl p-3 bg-[#f6f6f6]">
                <div class="bg-white flex justify-between items-center p-1 rounded-xl">
                    <div>
                        <h1 class="text-[20px] text-[#111111] font-bold">
                            ${data.name}
                        </h1>
                        <p class="ml-2 font-semibold">${data.number}</p>
                    </div>
                    <p>${data.time}</p>
                </div>
            </div>
        
    `
    callHistoryContainer.appendChild(div)
}
})


// Clear Button Function:

document.getElementById("clear-btn").addEventListener('click',function(e){
    e.preventDefault()
    console.log('clear')
    callHistoryData= [];
    const callHistoryContainer = document.getElementById("call-history-container")
    callHistoryContainer.innerHTML="";
})



// Text Copy function:

// card-1:
document.getElementById("copy-btn1").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text1").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("999 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})
// card-2:
document.getElementById("copy-btn2").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text2").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("999 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})
// card-3:
document.getElementById("copy-btn3").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text3").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("999 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})
// card-4:
document.getElementById("copy-btn4").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text4").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("01994-999999 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})
// card-5:
document.getElementById("copy-btn5").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text5").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("109 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})
// card-6:
document.getElementById("copy-btn6").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text6").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("106 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})
// card-7:
document.getElementById("copy-btn7").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text7").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("16216 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})
// card-8:
document.getElementById("copy-btn8").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text8").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("16445 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})
// card-9:
document.getElementById("copy-btn9").addEventListener('click', function(e){
    const copyText = document.getElementById("copy-text9").innerText
    navigator.clipboard.writeText(copyText).then(() => { 
        alert("163 কপি হয়েছে ✅");
    })

    const copyCount = parseInt(document.getElementById("copy-number").innerText)
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText=newCopyCount;
})


