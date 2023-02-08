$(document).ready(function() {
    $.get("http://universities.hipolabs.com/search?country=Canada", function(data, staus) {
        if (staus == "success" && data != null && data != undefined) {
            for (let index = 0; index < data.length; index++) {
                $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);
            }
        } else {
            $("universityList").append("I sent out")
        }
    });
});

function getCountries() {
    var urlSearchLink = "http://universities.hipolabs.com/search";
    $.get(urlSearchLink, function(data, status) {
        if (status == "success" && data != null && data != undefined) {
            $("#target").html('');
            for (let index = 0; index < data.length; index++) {
                $("#target").append(`<option value="${data[index].country}">${data[index].country}</option>`);

            }
        } else {
            $("#target").append("Can't load the list from url.");
        }
    });
}