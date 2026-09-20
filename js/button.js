const buttons = document.querySelectorAll('.butcarzin');

        buttons.forEach(button => {
            button.onmousedown = function() {
                this.style.transform = 'scale(0.95)';
            }

            button.onmouseup = function() {
                this.style.transform = 'scale(1)';
            }
        });
        const buttons2 = document.querySelectorAll('.butctaloge');

        buttons2.forEach(button => {
            button.onmousedown = function() {
                this.style.transform = 'scale(0.95)';
            }

            button.onmouseup = function() {
                this.style.transform = 'scale(1)';
            }
        });
        const buttons3 = document.querySelectorAll('.otpForm');

        buttons3.forEach(button => {
            button.onmousedown = function() {
                this.style.transform = 'scale(0.95)';
            }

            button.onmouseup = function() {
                this.style.transform = 'scale(1)';
            }
        });
        const buttons4 = document.querySelectorAll('#decrement');

        buttons4.forEach(button => {
            button.onmousedown = function() {
                this.style.transform = 'scale(0.95)';
            }

            button.onmouseup = function() {
                this.style.transform = 'scale(1)';
            }
        });
        const buttons5 = document.querySelectorAll('#increment');

        buttons5.forEach(button => {
            button.onmousedown = function() {
                this.style.transform = 'scale(0.95)';
            }

            button.onmouseup = function() {
                this.style.transform = 'scale(1)';
            }
        });