
            var marginY = 0;
            var destination = 0;
            var speed = 5;
            var scroller = null;

            function initScroll(elementId) {
                destination = document.getElementById(elementId).offsetTop;

                scroller = setTimeout(function() {
                    initScroll(elementId);
                }, 1)

                marginY = marginY + speed;

                if (marginY >= destination) {
                    clearTimeout(scroller);
                }
                window.scroll(0, marginY);
            }

            function homeTop() {
                scroller = setTimeout(function() {
                    homeTop();
                }, 1)

                marginY = marginY - speed;

                if (marginY <= 0) {
                    clearTimeout(scroller);
                } 
                window.scroll(0, marginY);
            }