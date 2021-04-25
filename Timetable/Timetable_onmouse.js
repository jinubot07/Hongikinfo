//마우스 올릴시 색 변함
function changeColor(){
    $('#Timetable tr').mouseover(function(){
        $(this).addClass('changeColor');
    }).mouseout(function() {
        $(this).removeClass('changeColor');
    });
}
//테스트
function clickTr(){
    $("#Timetable tr").click(function(){
        var text = $(this).text();
        alert(text);
    });
}
    
