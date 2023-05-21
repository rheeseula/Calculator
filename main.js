var Input = '';

function addInput(toInput) {
    Input += toInput;
    document.getElementById('Input').textContent = Input;
}

function Calc() {
    try {
        alert(eval(document.getElementById('Input').textContent));
        document.getElementById('Input').textContent = '';
        Input = '';
    }
    catch (error) {
        alert("오, 공중제비를 멈추게 하십시오 !");
        document.getElementById('Input').textContent = '';
        Input = '';
    }
}
