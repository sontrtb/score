//convert
function convert(score_10) {
    let score_4;
    let score_text;
    if(score_10 < 4){
        score_4 = '0.0';
        score_text = 'F';
    }
    else if(score_10 < 5){
        score_4 = '1.0';
        score_text = 'D';
    }
    else if(score_10 <= 5.4){
        score_4 = '1.5';
        score_text = 'D+';
    }
    else if(score_10 <= 6.4){
        score_4 = '2.0';
        score_text = 'C';
    }
    else if(score_10 <= 6.9){
        score_4 = '2.5';
        score_text = 'C+';
    }
    else if(score_10 <= 7.9){
        score_4 = '3.0';
        score_text = 'B';
    }
    else if(score_10 <= 8.4){
        score_4 = '3.5';
        score_text = 'B+';
    }
    else if(score_10 <= 8.9){
        score_4 = '3.7';
        score_text = 'A';
    }
    else if (score_10 <= 10){
        score_4 = '4.0';
        score_text = 'A+';
    }
    else {
        score_4 = 'ERROR';
        score_text = 'ERROR';
    }
    return [score_4, score_text];
}


//Điểm thành phần
const score = document.getElementsByClassName('score');
const percent = document.getElementsByClassName('percent');
const btn_score = document.getElementById('btn-score');

let total_score = 0;
let total_percent = 0;

btn_score.onclick = () => {
    for(let i = 0; i< percent.length; i++) {
        if(score[i].value) {
            total_score += parseInt(percent[i].value) * parseInt(score[i].value);
            total_percent += parseInt(percent[i].value);
        }
    }
    total_score += score[4].value * (100 - total_percent);
    total_score /= 100;
    total_score = total_score.toFixed(1);
    //
    document.getElementById('total-score-10').innerHTML = total_score;
    document.getElementById('total-score-4').innerHTML = convert(total_score)[0];
    document.getElementById('total-score-text').innerHTML = convert(total_score)[1];
    // reset
    total_score = 0;
    total_percent = 0;
}


//Đổi hệ 10 sang 4
const score_10 = document.getElementById('score-10');
const btn_convert = document.getElementById('btn-convert');
btn_convert.onclick = () => {
    document.getElementById('convert-score-4').innerHTML = convert(score_10.value)[0];
    document.getElementById('convert-score-text').innerHTML = convert(score_10.value)[1];
}


//Trung bình học kì
const btn_subject = document.getElementById('btn-subject');
const list_table = document.getElementById('list-table');

let total_score_4 = 0;
let total_so_tc = 0;
let average_score_4;

let list_subject = [];

btn_subject.onclick = () => {
    const subject = document.getElementById('subject');
    const score_4 = document.getElementById('input-score-4');
    const so_tc= document.getElementById('so-tc');

    total_score_4 += score_4.value * parseInt(so_tc.value);
    total_so_tc += parseInt(so_tc.value);
    average_score_4 = total_score_4 / total_so_tc;

    document.getElementById('average-score-4').innerHTML = average_score_4.toFixed(2);
    list_table.insertAdjacentHTML('beforeend', `<tr>
        <td>${subject.value}</td>
        <td>${score_4.value}</td>
        <td>${so_tc.value}</td>
    </tr>`);
}
