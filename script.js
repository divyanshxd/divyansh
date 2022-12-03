var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    setupEventListeners: function() {
        var self = this;
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();

const checkbox = document.querySelector(".checkbox");

    checkbox.addEventListener('change', (e) => {
      const github =  document.querySelector(".github")
      const twitter = document.querySelector(".twitter")
      const snapchat = document.querySelector(".snapchat")
      const instagram = document.querySelector(".instagram")

      const title = document.querySelector('.title');
      const body = document.body;

      // THEME SLIDER
      const ball = document.querySelector('.ball')
      const checkboxLabel = document.querySelector('.checkbox-label');
      const sun = document.querySelector('.sun');
      const moon = document.querySelector('.moon');

      const cursorDot = document.querySelector('.cursor-dot')
      const cursorDotOutline = document.querySelector('.cursor-dot-outline')

      if(e.target.checked) {
        body.classList.add("white");
        body.classList.remove("black")

        title.style.color = "black";

        cursorDot.classList.add('cursor-dot-black')
        cursorDotOutline.classList.add('cursor-dot-outline-black')
        
        // instagram.classList.add("reverse")
        // instagram.classList.add("hover-reverse");

        // github.classList.add("reverse")
        // github.classList.add("hover-reverse")

        // twitter.classList.add("reverse")
        // twitter.classList.add("hover-reverse")

        // snapchat.classList.add("reverse")
        // snapchat.classList.add("hover-reverse")

        instagram.classList.add("instagram-reverse")

        github.classList.add("github-reverse")
        
        twitter.classList.add("twitter-reverse")

        snapchat.classList.add("snapchat-reverse")

        // SLIDER 
        ball.style.backgroundColor = "black"
        sun.style.color = "black"
        moon.style.color = "black"
        checkboxLabel.style.border = "2px solid black"

      } else {
        body.classList.remove("white");
        body.classList.add("black")

        title.style.color = "white"


        cursorDot.classList.remove('cursor-dot-black')
        cursorDotOutline.classList.remove('cursor-dot-outline-black')

        cursorDot.classList.add('cursor-dot')
        cursorDotOutline.classList.add('cursor-dot-outline')
                
        // instagram.classList.remove("reverse")
        // instagram.classList.remove("hover-reverse")

        // github.classList.remove("reverse")
        // github.classList.remove("hover-reverse")

        // twitter.classList.remove("reverse")
        // twitter.classList.remove("hover-reverse")

        // snapchat.classList.remove("reverse")
        // snapchat.classList.remove("hover-reverse")

        instagram.classList.remove("instagram-reverse")

        github.classList.remove("github-reverse")
        
        twitter.classList.remove("twitter-reverse")

        snapchat.classList.remove("snapchat-reverse")

        // SLIDER
        ball.style.backgroundColor = "white"
        sun.style.color = "white" 
        moon.style.color = "white"
        checkboxLabel.style.border = "2px solid white"
      }
    })