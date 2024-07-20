let up = document.getElementById('Intro_Up');
        up.innerHTML =
            'Click on the button for more information';
        let down_1 = document.getElementById('Intro_DOWN_1');
        let down_2 = document.getElementById('Intro_DOWN_2');
        let down_3 = document.getElementById('Intro_DOWN_3');

        function Intro() {
            Intro_1();
            Intro_2();
            Intro_3();
        }
 
 
        function Intro_1() {
            down_1.innerHTML = 'Computer Science';
        }
 
        function Intro_2() {
            down_2.innerHTML = 'lawmeh@uat.edu';
        }

        function Intro_3() {
            down_3.innerHTML = 'May 2024';
        }