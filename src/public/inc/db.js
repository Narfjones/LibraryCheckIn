var modal = document.getElementById('modal')

var last_response = {};
var redraw = true;

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

$( window ).on('load', function() {
  const dataTable = $('#realtime').DataTable({
    ajax: { url: "inc/dataSet.json",
    },
    "rowCallback": function(row, data, index){
      if(data.checked_in == "FALSE"){
        $(row).hide()
      }
    },    
    serverside: true,
    searching: false, paging: false, info: false,
    columns: [
      { "data": "id"},
      { "data": "first_name"},
      { "data": "last_name" }
    ]
    })
    


    setInterval( function () {
      dataTable.ajax.reload(null, false);
      }, 500 );
  });
  
