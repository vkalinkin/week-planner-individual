var data = {
  // entries: [],
  mon: [],
  tue: [],
  wed: [],
  thu: [],
  fri: [],
  sat: [],
  sun: [],
  editing: null,
  nextEntryId: 1
};

var previousEntries = localStorage.getItem('javascript-local-storage-days');

if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}

window.addEventListener('beforeunload', function (event) {
  var dataJson = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage-days', dataJson);
});

var $addEntry = document.querySelector('.addEntry');
var $modal = document.querySelector('.modal');

$addEntry.addEventListener('click', function (event) {
  if (event.target.matches('.addEntry')) {
    $modal.className = 'modal';
  }
});

var $form = document.querySelector('form');
var $daySelect = document.querySelector('#day-select');
var $timeSelect = document.querySelector('#time-select');
var $description = document.querySelector('#description');

// var $row7days = document.querySelector('.sevenDays');
// var $saturdayButton = document.querySelector('.saturdayBut');
// var $sundayButton = document.querySelector('.sundayBut');
// var $mondayButton = document.querySelector('.mondayBut');
// var $tuesdayButton = document.querySelector('tuesdayBut');
// var $wednesdayButton = document.querySelector('wednesdayBut');
// var $thursdayButton = document.querySelector('thursdayBut');
// var $fridayButton = document.querySelector('firdayBut');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  $modal.className = 'modal hidden';
  var newEntry = {};

  newEntry.time = $timeSelect.value;
  newEntry.description = $description.value;
  newEntry.eventId = data.nextEntryId;

  data.nextEntryId++;

  if ($daySelect.value === 'M') {
    data.mon.unshift(newEntry);
  } else if ($daySelect.value === 'Tu') {
    data.tue.unshift(newEntry);
  } else if ($daySelect.value === 'W') {
    data.wed.unshift(newEntry);
  } else if ($daySelect.value === 'Th') {
    data.thu.unshift(newEntry);
  } else if ($daySelect.value === 'F') {
    data.fri.unshift(newEntry);
  } else if ($daySelect.value === 'Sa') {
    data.sat.unshift(newEntry);
  } else if ($daySelect.value === 'Su') {
    data.sun.unshift(newEntry);
  }

  // data.entries.unshift(newEntry);
});

// function sortDay(entryObj) {
//   var sorted = entryObj;
//   entryObj.sort(function (a, b) {
//     return a.time - b.time;
//   });

//   return sorted;
// }

// function convertTime(entryObj) {
//   var currentTime = parseInt(entryObj.time);
//   var outputTime = '';
//   if (currentTime > 12) {
//     currentTime -= 12;
//     outputTime += String(currentTime) + ':00 PM';
//   } else {
//     outputTime += String(currentTime) + ':00 AM';
//   }
//   return outputTime;
// }

// var testTime = convertTime(data.sat[0]);
// console.log('first saturday time:', testTime);

// var tableBody = document.querySelector('tbody');

// function renderTable(entryObj) {
//   var tableRow = document.createElement('tr');
//   var timeData = document.createElement('td');
//   var fixedTime = convertTime(entryObj);
//   timeData.textContent = fixedTime;
//   tableRow.appendChild(timeData);

//   var descriptionData = document.createElement('td');
//   descriptionData.textContent = entryObj.description;
//   tableRow.appendChild(descriptionData);

//   tableBody.appendChild(tableRow);
// }

// $row7days.addEventListener('click', function (event) {
//   tableBody.replaceChildren();
//   if (event.target === $saturdayButton) {
//     sortDay(data.sat);
//     for (var i = 0; i < data.sat.length; i++) {
//       renderTable(data.sat[i]);
//     }
//   } else if {
//     (event.target === $sundayButton) {
//       sortDay(data.sun);
//       for (var i = 0; i < data.sun.length; i++) {
//         renderTable(data.sun[i]);
//       }
//     }
//   }
// });
