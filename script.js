$(document).ready(function(){

    $("#search").click(function(){
        var musician= $("#musician").val();


         $.ajax({
            url:"http://itunes.apple.com/search?term=" + musician,
            dataType: "jsonp",
            success: callBack,
        })
    });




    function callBack(response) {
        $("#list").empty();
        console.log(response);

        var table = "<table id='table'>";
        var find = $("#number").val();

        for (var i = 0; i < find; i++) {
            var sound = "<audio controls= 'true' src=" + response.results[i].previewUrl + "></audio>";
            var pic = "<img src=" + response.results[i].artworkUrl100 + ">";
            var song = response.results[i].trackName;
            var album = response.results[i].collectionName;
            var rank = response.results[i].trackNumber;




            table += "<tr>";
            table += "<td>" + sound + "</td>";
            table += "<td>" + pic + "</td>";
            table += "<td>" + "Song Title: " +song + "</td>";
            table += "<td>" + "Album: " +album + "</td>";
            table += "<td>" + "Rank: "+ rank + "</td>";
            table += "</tr>";
            }
            table += "</table>";

            $("#list").append(table);

    }

});