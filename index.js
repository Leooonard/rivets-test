window.onload = function () {
    function getRichText () {
        return '"><script>alert(\'xss\');</script>';
    }

    let data1 = {
        show: false,
        checked: false,
        now: Date.now(),
        text2: '213',
        text3: '321312'
    };
    let data2 = {
        show: true,
        text: 3
    };
    let data3 = {
        show: false,
        richText: getRichText()
    };

    let data4 = {
        now: Date.now()
    }

    let tab1 = document.querySelector("#tab1");
    let tab2 = document.querySelector("#tab2");
    let tab3 = document.querySelector("#tab3");
    let tab4 = document.querySelector("#tab4");
    let tab4Child = document.querySelector("#tab4Child");

    rivets.bind(tab1, {
        item: data1
    });
    rivets.bind(tab2, {
        item: data2
    });
    rivets.bind(tab3, {
        item: data3
    });
    rivets.bind(tab4, {
        item: data1
    });
    rivets.bind(tab4Child, {
        item: data4
    });

    let showTab1 = document.querySelector("#showTab1");
    let showTab2 = document.querySelector("#showTab2");
    let showTab3 = document.querySelector("#showTab3");

    showTab1.addEventListener("click", () => {
        data1.show = true;
        data2.show = false;
        data3.show = false;
    });

    showTab2.addEventListener("click", () => {
        data1.show = false;
        data2.show = true;
        data3.show = false;
    });

    showTab3.addEventListener("click", () => {
        data1.show = false;
        data2.show = false;
        data3.show = true;
    });

    let checkbox = document.querySelector("#checkbox");
    checkbox.addEventListener("change", (e) => {
        let checked = e.target.checked;
        data1.checked = checked;
    });

    let addButton = document.querySelector("#addButton");
    let minusButton = document.querySelector("#minusButton");

    addButton.addEventListener("click", () => {
        data2.text++;
        data3.richText = getRichText();
    });

    minusButton.addEventListener("click", () => {
        data2.text--;
        data3.richText = getRichText();
    });

    let temp1 = {
        text: "i am temp"
    };

    setTimeout(() => {
        data1.show = true;
        data2.show = false;
        data3.show = false;

        data1.checked = false;
        data1.text2 = 'woqu';
        data1.text3 = 'a';

        $(tab1).append('<span id = "temp1" rv-text = "item.text"></span>');
        rivets.bind(document.querySelector("#temp1"), {
            item: temp1
        });

        setTimeout(() => {
            temp1.text = "i am not temp now";
            data1.text = "father's text";
        }, 1000);
    }, 1000 * 3);
}
