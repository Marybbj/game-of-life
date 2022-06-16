function getValue() {
    let ele = document.getElementsByName('size');
    let mt = document.getElementById('matrix');
    mt.addEventListener("click", function () {
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                let size = ele[i].value.split('x');

                for (let j = 0; j < size.length; j++) {
                    var x = size[0];
                    var y = size[1]
                }
            }
        } console.log(x, y)
    })
}

getValue()