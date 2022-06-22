function getTitle(current_select){
    const title = document.getElementById(current_select).childNodes[1].childNodes[1].value;
    return title
}

function getColor(current_select){
    let color = document.getElementById(current_select).childNodes[3].childNodes[1].value;
    return color
}

function starts_at(current_select){
    const starts_at = document.getElementById(current_select).childNodes[5].childNodes[1].childNodes[1].value;
    const trans_starts_at = starts_at.split(" ").reverse().join("-")
    let starts_hour = document.getElementById(current_select).childNodes[5].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[1].value
    const starts_minute = document.getElementById(current_select).childNodes[5].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[5].childNodes[1].value
    const starts_am_pm = document.getElementById(current_select).childNodes[5].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[11].childNodes[0].innerHTML
    if (starts_am_pm == "PM"){
        starts_hour = parseInt(starts_hour) +12;
    }
    else if (starts_am_pm == "AM" && starts_hour == 12){
        starts_hour = "00"
    }
    const starts_second = "00"

    return (trans_month(trans_starts_at)+" "+starts_hour+":"+starts_minute+":"+starts_second)
}

function ends_at(current_select){
    const ends_at = document.getElementById(current_select).childNodes[7].childNodes[1].childNodes[1].value
    const trans_ends_at = ends_at.split(" ").reverse().join("-")
    let ends_hour = document.getElementById(current_select).childNodes[7].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[1].value
    const ends_minute = document.getElementById(current_select).childNodes[7].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[5].childNodes[1].value
    const ends_am_pm = document.getElementById(current_select).childNodes[7].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[11].childNodes[0].innerHTML
    const ends_second = "00"
    console.log(ends_am_pm);
    if (ends_am_pm == "PM"){
        ends_hour = parseInt(ends_hour) +12;
    }
    else{
        ends_hour = parseInt(ends_hour) -12;
    }
    return (trans_month(trans_ends_at)+" "+ ends_hour+":"+ends_minute+":"+ends_second)
}

function alert_data(current_select){
    let count = 0
    $(".btn-save").on('click', function(e) {
        if (count == 0) {
            current_select = e.target.parentNode.parentNode.id
            alert("Successfully Saved!\n"+"Title :" + getTitle(current_select) + "\n" + "Color : " + getColor(current_select) + "\n" + "Starts at :" + starts_at(current_select) + "\n" + "Ends at :" + ends_at(current_select))
        }
        count = count + 1;
        });

}
const month_str = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const month_int = ['01','02','03','04','05','06','07','08','09','10','11','12']
function trans_month(month){

    for(let i =0; i<12; i++){
        if(month.substring(3, 5).includes(month_str[i])==true){
            const res = month.substring(3, 5).replace(month_str[i], month_int[i])
            return (month.substring(0,3)+" "+res+" "+month.substring(6, 10));
        }
    }
}
function reverse_month(temp){
    const [year, month, day] = temp.split('-');
    const result = [day, month, year].join(' ');
    for(let i =0; i<12; i++){
        if(result.substring(3, 5).includes(month_int[i])==true){
            const res = result.substring(3, 5).replace(month_int[i], month_str[i])
            return (result.substring(0,3)+" "+res+" "+result.substring(6, 10));
        }
    }
}
function select_pmam(time){
    if(parseInt(time) < 12){
        return 'AM';
    }
    else {
        return 'PM';
    }
}
function insert_data(id){
      let title = document.getElementById(id).childNodes[1].childNodes[1];
      title.value = data[id][0]
      let color = document.getElementById(id).childNodes[3].childNodes[1];
      color.value = data[id][1]
      let starts_at = document.getElementById(id).childNodes[5].childNodes[1].childNodes[1];
      starts_at.value = reverse_month(data[id][2].substring(0, 10));
      let ends_at = document.getElementById(id).childNodes[7].childNodes[1].childNodes[1];
      ends_at.value = reverse_month(data[id][3].substring(0, 10));
      let starts_hour = document.getElementById(id).childNodes[5].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[1];
      starts_hour.value = data[id][2].substring(11, 13);
      let starts_minute = document.getElementById(id).childNodes[5].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[5].childNodes[1];
      starts_minute.value = data[id][2].substring(14, 16);
      let ends_hour = document.getElementById(id).childNodes[7].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[1];
      ends_hour.value = data[id][3].substring(11, 13);
      let ends_minute = document.getElementById(id).childNodes[7].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[5].childNodes[1];
      ends_minute.value = data[id][3].substring(14, 16);
      let starts_am_pm = document.getElementById(id).childNodes[5].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[11].childNodes[0];
      starts_am_pm.innerHTMl = select_pmam(data[id][2].substring(11, 13));
      let ends_am_pm = document.getElementById(id).childNodes[7].childNodes[3].childNodes[0].childNodes[1].childNodes[3].childNodes[11].childNodes[0];
      ends_am_pm.innerHTML = select_pmam(data[id][3].substring(11, 13));
}

function create_calendarID(){
    let str ='';
    let res = str.concat(starts_at(current_select).slice(0,10).replaceAll('-','') , index_num)
    index_num = index_num +1;
    return res;
}

function deletedb(){

}

let totalcount = 4, index_num = 0, current_select = 0;
// 불러오기


//클릭 totalcount 횟수 만큼
for(let i=0; i<totalcount; i++){
        $(document).ready(function(){
      $('#add_btn').trigger("click");
    });
}
//각 selector 마다 id 할당

$(document).ready(function(){
      $('.index_temp').each(function(i, obj) {
    obj.id = i;
    insert_data(obj.id)
    console.log(obj.id);
    });
});


function addnewbtn(){
       $(document).ready(function(){
      $('.index_temp').each(function(i, obj) {
          if (i == totalcount){
           obj.id = i;
           totalcount = totalcount+1;
           $(".btn-save").on('click', function(e){
           current_select = e.target.parentNode.parentNode.id
        });
          }
    console.log(obj.id);
    });
});
}


$(document).ready(function(){
        $(".btn-save").on('click', function(e){
           current_select = e.target.parentNode.parentNode.id
        });
});

