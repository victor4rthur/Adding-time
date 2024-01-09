// Select all elements with the 'data-time' attribute and convert it to an array
const timeNode = Array.from(document.querySelectorAll('[data-time]'));

// Extract time data from each timeNode, convert it to seconds, and calculate the total
const seconds = timeNode
    .map(node => node.dataset.time) // Extract time data from data-time attribute
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat); // Split time code into minutes and seconds
        return (mins * 60) + secs; // Convert minutes and seconds to total seconds
    })
    .reduce(function(total, vidSeconds) {
        // Accumulating the total seconds using reduce
        return total + vidSeconds;
    }, 0);

// Calculate hours, minutes, and seconds from the total seconds
let secondsLeft = seconds; // Initialize secondsLeft with the total seconds
const hours = Math.floor(secondsLeft / 3600); // Calculate hours
secondsLeft = secondsLeft % 3600; // Update secondsLeft by removing the accounted hours

const mins = Math.floor(secondsLeft / 60); // Calculate remaining minutes
secondsLeft = secondsLeft % 60; // Update secondsLeft by removing the accounted minutes

// Display the result in the console in the format HH:MM:SS
console.log('This playlist duration is '+hours + ':' + mins + ':' + secondsLeft + '.');
