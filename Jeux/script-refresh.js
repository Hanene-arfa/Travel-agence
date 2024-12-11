window.onload = function()
{
    var widthCanv=900;
    var heightCanv=600;
    var blocksize = 30;
    var ctx;
    var delay = 100; 
    var snakee;
    
    init();
    
    function init()
    {
        var canvas =
        document.createElement('canvas');
        canvas.width = widthCanv;
        canvas.height = heightCanv;
        canvas.style.border ="1px solid";
        
        document.body.appendChild(canvas);
        
        ctx = canvas.getContext('2d');
        snakee= new Snake([[6,4],[5,4],[4,4]], "right");
        refreshCanvas();
    }
    
    function refreshCanvas()
    {
        ctx.clearRect(0,0,widthCanv, heightCanv);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas,delay);
    }
    
    function drawBlock(ctx, position)
    {
        var x= position[0] * blocksize;
        var y= position[1] * blocksize;
        ctx.fillRect(x, y, blocksize, blocksize);
    }
    
    function Snake(body)
    {
        this.body = body;
        this.direction = direction;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(var i=0; i < this.body.length; i++)
            {
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        };
        
        this.advance = function()
        {
            var nextPosition = this.body[0].slice();
            switch(this.direction)
                {
                    case "left":
                        nextPosition[0] -= 1;
                        break;
                    case "right":
                        nextPosition[0] += 1;
                        break;
                    case "down":
                        nextPosition[1] += 1;
                        break;
                    case "up":
                        nextPosition[1] -= 1;
                        break;
                    default:
                        throw("Invalid Direction");
                }
            this.body.unshift(nextPosition);
            this.body.pop();
        };
            // méthode direction
        this.setDirection= function(newDirection)
        {
            var allowedDirection;
            switch(this.direction)
            {
                    case "left":
                    case "right":
                        allowedDirection =["up","down"];
                        break;
                    case "down":
                    case "up":
                        allowedDirection =["left","right"];
                        break; 
                    default:
                        throw("Invalid Direction");
            }
            if(allowedDirection.indexOf(newDirection) > -1)
            {
                    this.direction = newDirection;    
            }
        };
    }
    document.onkeydown= function handlekeyDown(e)
    {
        var key = e.keyCode;
        var newDirection;
        switch(key)
        {
                    case 37:
                        newDirection = "left";
                        break;
                    case 39:
                        newDirection = "up";
                        break;
                    case 39:
                        newDirection = "right";
                        break;
                    case 40:
                        newDirection = "down";
                        break;
                    default:
                        return;
        }
        snakee.setDirection(newDirection);
    }
    
}