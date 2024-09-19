const display = document.getElementById("display");

        function append(data) {
            display.innerText += data;
        }

        function clearDisplay() {
            display.innerText = '';
        }

        function calculate() {
            try {
                let input = display.innerText;
                 display.innerText = eval(input);
            } catch (e) {
                display.innerText = 'Error';
            }
        }