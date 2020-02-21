const fs = require('fs');
const input_file_path = "input/a_example.txt";
const input_file_read = fs.readFileSync(input_file_path, {encoding: "utf-8", flag: 'r'});
let data_split = input_file_read.trim();
let tmp = 0;
let tmp_arr = [];
let day = 0;

for (let i = 2;i < data_split.split(' ')[1] * 2 + 3 - 1; i++) {
    if (tmp < 2) {
        tmp_arr.push(data_split.split('\n')[i]);
        tmp = 0;
        tmp++;
    } else {
        tmp = 0;
    }
    // day += ;
    /*console.log(data_split.split('\n')[i].split(' ')[1])*/
    console.log(data_split[i + 3])
}
// console.log(tmp_arr)

// let tmp_scan_lib = Math.ceil(data_split[2][0] / data_split[2][2]);
// let lib_nbr = input_file_read.split(/\n| /)[1] * 2 + 3;
// let tmp_sign_up;

// for (let i = 2;i < lib_nbr - 1; i += 2) {
//     // tmp_sign_up = input_file_read.split(/\n/)[i].split(' ')[1];
//     console.log(data_split[i].split(/\n| |/)[1]);
// }

// console.log(second_line);



 // tmp_sign_up = input_file_read.split(/\n/)[i].split(' ')[1];