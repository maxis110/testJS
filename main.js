/**
 * Created by maksim.mikhailenko on 2/24/2016.
 */
function generateArray(min, max) {
    var data =[],
        minv = 0,
        maxv = 9;

    for(var i=0; i<min; i++){
        var array = [];
        for(var j=0; j<max; j++){
            array.push(Math.floor(Math.random() * (maxv-minv)));
        }
        data.push(array);
    }
    return data;
}

function neighbor(arr, i, j) {
    var x,
        y,
        rowLim = arr.length-1,
        colLim = arr[0].length-1,
        result = [];

    for(x = Math.max(0, i-1); x <= Math.min(i+1, rowLim); x++) {
        for(y = Math.max(0, j-1); y <= Math.min(j+1, colLim); y++) {
            if(x !== i || y !== j) {
                if(arr[i][j] === arr[x][y]) {
                    console.log(arr[x][y]+' Соседний элемент');
                    result.push([x,y]);
                }
            }
        }
    }
    return result;
}

function checkNeighbor(value, array) {
    var j = 0;
    if (value.length !== 0) {
        for (var i=0; i<value.length-1; i++){
            neighbor(array, value[i][j], value[i][j+1]);
        }
    }
}

array = generateArray(3,3);
checkNeighbor(neighbor(array, 0,2),array);










