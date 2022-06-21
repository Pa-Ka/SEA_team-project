function getTitle(){
    const title = document.getElementById('text_title').value;
    return title
}

function getColor(){
    const color = document.getElementById('prim_color').value;
    return color
}

function starts_at(){
    const starts_at = document.getElementById('starts_at').value.toString();
    const trans_starts_at = starts_at.split(" ").reverse().join("-")
    const starts_hour = document.getElementById('temp').childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[1].value;
    const starts_minute = document.getElementById('temp').childNodes[0].childNodes[1].childNodes[3].childNodes[5].childNodes[1].value;
    const starts_am_pm = document.getElementById('temp').childNodes[0].childNodes[1].childNodes[3].childNodes[11].childNodes[0].innerHTML;
    const starts_second = document.getElementById('temp').childNodes[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].value;

    return (trans_month(trans_starts_at)+" "+starts_hour+":"+starts_minute+starts_am_pm)
}

function ends_at(){
    const ends_at = document.getElementById('ends_at').value;
    const trans_ends_at = ends_at.split(" ").reverse().join("-")
    const ends_hour = document.getElementById('temp1').childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[1].value;
    const ends_minute = document.getElementById('temp1').childNodes[0].childNodes[1].childNodes[3].childNodes[5].childNodes[1].value;
    const ends_am_pm = document.getElementById('temp1').childNodes[0].childNodes[1].childNodes[3].childNodes[11].childNodes[0].innerHTML;
    const ends_second = document.getElementById('temp1').childNodes[0].childNodes[1].childNodes[3].childNodes[9].childNodes[1].value;

    return (trans_month(trans_ends_at)+" "+ ends_hour+":"+ends_minute+ends_am_pm)
}

function alert_data(){
    alert("Successfully Saved!\n"+"Title :" + getTitle() + "\n" + "Color : " + getColor() + "\n" + "Starts at :" + starts_at() + "\n" + "Ends at :" + ends_at())
}

function trans_month(month){
    const month_str = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month_int = ['01','02','03','04','05','06','07','08','09','10','11','12']
    for(let i =0; i<12; i++){
        if(month.includes(month_str[i])==true){
            const res = month.replace(month_str[i], month_int[i])
            return res
        }
    }
}
