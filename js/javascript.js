const zmena = document.getElementById('obrazek');

function getValue() {
    let x = document.getElementById('choice').value;

    if (x == "circle") {
        document.getElementById('input').innerHTML =
                                                    `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Radius</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in meters">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">π</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="3.14159265359" disabled>
                                                            </div>
                                                        </div>
                                                    </div>`;

        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img class="fifth" src="img/calc/circle.gif" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Circumference: </h2>
                                                            <h2>Area: </h2>
                                                        </div>
                                                    </div>`;
                                                    document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: circleF();" );
    } else if (x == "sphere") {
        document.getElementById('input').innerHTML =
                                                    `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Radius</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in meters">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">π</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="3.14159265359" disabled>
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `
                                                    <div id="obrazek">
                                                        <div><img class="fifth" src="img/calc/sphere.gif" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Volume: </h2>
                                                            <h2>Surface Area: </h2>
                                                        </div>
                                                    </div>
                                                    `;
                                                    document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: sphereF();" );
    } else if (x == "square") {
        document.getElementById('input').innerHTML = `
                                                    <div id="input">
                                                    <div class="row">
                                                        <div class="form-group bg-dark text-white">
                                                            <label for="value1">Lenght side a</label>
                                                            <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in meters">
                                                        </div>
                                                    </div>
                                                    </div>
                                                    `;
        document.getElementById('obrazek').innerHTML =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/square.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: </h2>
                                                        <h2>Perimeter: </h2>
                                                    </div>
                                                    </div>
                                                    `;
                                                    document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: squareF();" );
    } else if (x == "cube") {
        document.getElementById('input').innerHTML = 
                                                    `<div id="input">
                                                    <div class="row">
                                                        <div class="form-group bg-dark text-white">
                                                            <label for="value1">Lenght side a</label>
                                                            <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in meters">
                                                        </div>
                                                    </div>
                                                    </div>
                                                    `;
        document.getElementById('obrazek').innerHTML =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/cube.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Volume: </h2>
                                                        <h2>Area: </h2>
                                                    </div>
                                                    </div>
                                                    `;
                                                    document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: cubeF();" );
    } else if (x == "rectangle") {
        document.getElementById('input').innerHTML =
                                                    `<div id="input">
                                                    <div class="row">
                                                        <div class="form-group bg-dark text-white">
                                                            <label for="value1">Lenght side a</label>
                                                            <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in meters">
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group bg-dark text-white">
                                                            <label for="value2">Lenght side b</label>
                                                            <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in meters">
                                                        </div>
                                                    </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/rectangle.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: </h2>
                                                        <h2>Perimeter: </h2>
                                                    </div>
                                                    </div>
                                                    `;
                                                    document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: rectangleF();" );
    } else if (x == "rectanglePrism") {
        document.getElementById('input').innerHTML = 
                                                    `<div id="input">
                                                    <div class="row">
                                                        <div class="form-group bg-dark text-white">
                                                            <label for="value1">Lenght</label>
                                                            <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in meters">
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group bg-dark text-white">
                                                            <label for="value2">Width</label>
                                                            <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in meters">
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                    <div class="form-group bg-dark text-white">
                                                        <label for="value3">Height</label>
                                                        <input type="text" name="value3" id="value3" class="form-control" placeholder="Please enter a number in meters">
                                                    </div>
                                                    </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/rectangularPrism.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Volume: </h2>
                                                        <h2>Area: </h2>
                                                    </div>
                                                    </div>
                                                    `;
                                                    document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: rectangularPrismF();" );
    } else if (x == "triangle") {
        document.getElementById('input').innerHTML = 
                                                    `<div id="input">
                                                    <div class="row">
                                                        <div class="form-group bg-dark text-white">
                                                            <label for="value1">Lenght side a</label>
                                                            <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in meters">
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group bg-dark text-white">
                                                            <label for="value2">Height</label>
                                                            <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in meters">
                                                        </div>
                                                    </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/triangle.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: </h2>
                                                        <h2>Perimeter: </h2>
                                                    </div>
                                                    </div>
                                                    `;
                                                    document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: triangleF();" );
    } else if (x == "trianglePrism") {
        document.getElementById('input').innerHTML = 
                                                    `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Height</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in meters">
                                                            </div>  
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Lenght side a</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in meters">
                                                            </div>  
                                                        </div>  
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value3">Lenght side b</label>
                                                                <input type="text" name="value3" id="value3" class="form-control" placeholder="Please enter a number in meters">
                                                            </div>  
                                                        </div>  
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value4">Lenght side c</label>
                                                                <input type="text" name="value4" id="value4" class="form-control" placeholder="Please enter a number in meters">
                                                            </div>  
                                                        </div>                                   
                                                    </div>`;

        document.getElementById('obrazek').innerHTML =
                                                        `
                                                        <div id="obrazek">
                                                        <div><img class="fifth" src="img/calc/triangularPrism.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Volume: </h2>
                                                            <h2>Area: </h2>
                                                        </div>
                                                        </div>
                                                        `;
                                                        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: triangularPrismF();" );
    }
};


function circleCircumference(value1) {
    circumference = 2 * Math.PI * value1;
    return circumference;
};

function circleArea(value1) {
    area = Math.PI * value1 * value1;
    return area;
};

function sphereVolume(value1) {
    volume = (4 / 3) * Math.PI * value1 * value1 * value1;
    return volume;
};

function sphereSurfaceArea(value1) {
    area = 4 * Math.PI * value1 * value1;
    return area;
};

function squareArea(value1) {
    area = value1 * value1;
    return area;
};

function squarePerimeter(value1) {
    perimeter = 4 * value1;
    return perimeter;
};

function cubeVolume(value1) {
    volume = value1 * value1 * value1;
    return volume;
};

function cubeSurfaceArea(value1) {
    area = 6 * value1 * value1;
    return area;
};

function rectangleArea(value1, value2) {
    area = value1 * value2;
    return area;
};

function rectanglePerimeter(value1, value2) {
    perimeter = 2 * (value1 + value2)
    return perimeter;
};

function rectangularPrismVolume(value1, value2, value3) {
    volume = value1 * value2 * value3;
    return volume;
};

function rectangularPrismSurfaceArea(value1, value2, value3) {
    area = 2 * (value1 * value2 + value1 * value3 + value2 * value3);
    return area;
};

function triangleArea(value1, value2) {
    area = (value1 * value2) / 2
    return area;
};

function trianglePerimeter(value1) {
    perimeter = 3 * value1;
    return perimeter;
};

function trianglePrismVolume(value1, value2, value3, value4) {
    volume = (1 / 4) * value1 * Math.sqrt((value2 + value3 + value4) * (value3 + value4 - value2) * (value4 + value2 - value3) * (value2 + value3 - value4));
    return volume;
};

function trianglePrismArea(value1, value2, value3, value4) {
    top = (1 / 4) * Math.sqrt((value2 + value3 + value4) * (value3 + value4 - value2) * (value4 + value2 - value3) * (value2 + value3 - value4));
    lateral = value1 * (value2 + value3 + value4);
    area = (top * 2) + lateral;
    return area;
};

function circleF() {
    var value1 = document.getElementById('value1').value;

    let circumference = circleCircumference(value1).toFixed(2);
    let area = circleArea(value1).toFixed(2);
    let x =
                                                    `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/circle.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Circumference: ${circumference} m</h2>
                                                        <h2>Area: ${area} m&sup2; </h2>
                                                    </div>
                                                    </div>
                                                    `;
    zmena.innerHTML = x;
};



function sphereF() {
    var value1 = document.getElementById('value1').value;

    let volume = sphereVolume(value1).toFixed(2);
    let area = sphereSurfaceArea(value1).toFixed(2);
    let x =
                                                    `
                                                    <div id="obrazek">
                                                        <div><img class="fifth" src="img/calc/sphere.gif" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Volume: ${volume} m&sup3;</h2>
                                                            <h2>Surface Area: ${area} m&sup2;</h2>
                                                        </div>
                                                    </div>
                                                    `;
    zmena.innerHTML = x;
};

function squareF() {
    var value1 = document.getElementById('value1').value;

    let area = squareArea(value1).toFixed(2);
    let perimeter = squarePerimeter(value1).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/square.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                        <h2>Perimeter: ${perimeter} m</h2>
                                                    </div>
                                                    </div>
                                                    `;
    zmena.innerHTML = x;                                                
};

function cubeF() {
    var value1 = document.getElementById('value1').value;

    let volume = cubeVolume(value1).toFixed(2);
    let area = cubeSurfaceArea(value1).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/cube.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Volume: ${volume} m&sup3;</h2>
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function rectangleF() {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;

    let area = rectangleArea(value1, value2).toFixed(2);
    let perimeter = rectanglePerimeter(value1, value2).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/rectangle.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                        <h2>Perimeter: ${perimeter} m</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function rectangularPrismF() {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    var value3 = document.getElementById('value3').value;

    let volume = rectangularPrismVolume(value1, value2, value3).toFixed(2);
    let area = rectangularPrismSurfaceArea(value1, value2, value3).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/rectangularPrism.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Volume: ${volume} m&sup3;</h2>
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function triangleF() {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;

    let area = triangleArea(value1, value2).toFixed(2);
    let perimeter = trianglePerimeter(value1).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/triangle.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                        <h2>Perimeter: ${perimeter} m</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
}



function triangularPrismF() {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    var value3 = document.getElementById('value3').value;
    var value4 = document.getElementById('value4').value;

    let volume = trianglePrismVolume(value1, value2, value3, value4).toFixed(2);
    let area = trianglePrismArea(value1, value2, value3, value4).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img class="fifth" src="img/calc/triangularPrism.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Volume: ${volume} m&sup3;</h2>
                                                        <h2>Area: ${volume} m&sup2;</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    

};

console.log(trianglePrismArea(5,6,2,3));