var firebaseConfig = {
    apiKey: "AIzaSyB8PVy2JP4t_-amlokUfoAXAEs7-XYMu2s",
    authDomain: "bootcamp1-c95f6.firebaseapp.com",
    databaseURL: "https://bootcamp1-c95f6.firebaseio.com",
    projectId: "bootcamp1-c95f6",
    storageBucket: "",
    messagingSenderId: "526840054506",
    appId: "1:526840054506:web:bad79b3dd3abc7ae780d93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var dataRef = firebase.database();

  //button for adding train
  $("#add-train-btn").on('click', function(event){

    event.preventDefault();

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var startTime = moment($("#startTime").val().trim(), "hours minutes").format("X");
    var frequency = $("#frequency").val().trim();

    // new variable to hold new train data
    var newTrain = {

        trainName : trainName,
        destination : destination,
        startTime : startTime,
        frequency: frequency,
    };
    
    dataRef.ref().push(newTrain);

    console.log(newTrain.trainName);
    console.log(newTrain.destination);
    console.log(newTrain.startTime);
    console.log(newTrain.frequency);



});



// create Firebase event

dataRef.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var startTime = childSnapshot.val().startTime;
    var frequency = childSnapshot.val().frequency;



    console.log(trainName);
    console.log(destination);
    console.log(startTime);
    console.log(frequency);

    var startTimePretty= moment.unix(startTime).format("hours minutes");

    var nextArrival = moment()

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        //$("<td>").text(nextArrival),
       // $("<td>").text(minutesAway),
      );

      $("#train-table > tbody").append(newRow);





  
});