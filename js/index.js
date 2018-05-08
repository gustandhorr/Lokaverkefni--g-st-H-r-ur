$.ajax({
  url: "https://apis.is/rides/samferda-drivers/",
  type: "GET",
  dataType: "json",
  success: function(response) {
    $("table").append(" <tr>" +
      "<th>Dagsetning</th>" +
      "<th>Tími</th>" +
      "<th>Brottfararstaður</th>" +
      "<th></th>" +
      "<th>Áfangastaður</th>" +
      "<th>Frekari upplýsingar</th>" +
    "</tr>");
    for (var i = 0; i < response.results.length; i++) {
      var current = response.results[i];  
      $("table").append(
        "<tr><td>"+current.date+"</td>" +
        "<td><i class=\"fa fa-clock\"/> "+current.time+"</td>" + 
        "<td>"+current.from+"</td>" +
        "<td> -> <i class=\"fa fa-car\"> -></i></td>" +
        "<td>"+current.to+"</td>" +
        "<td><a href=\"" + current.link +"\"          target=\"_blank\">"+current.link+"</td></tr>"
      );
    }
  },
  error: function(response) {
    $("#Error").text("Ekki náðist samband við vefþjónustu");
  }
});