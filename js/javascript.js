//MATHEMATICS

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
                                                        <div><img src="img/calc/circle.gif" alt=""></div>
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
                                                        <div><img src="img/calc/sphere.gif" alt=""></div>
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
                                                    <div><img src="img/calc/square.gif" alt=""></div>
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
                                                    <div><img src="img/calc/cube.gif" alt=""></div>
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
                                                    <div><img src="img/calc/rectangle.gif" alt=""></div>
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
                                                    <div><img src="img/calc/rectangularPrism.gif" alt=""></div>
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
                                                    <div><img src="img/calc/triangle.gif" alt=""></div>
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
                                                        <div><img src="img/calc/triangularPrism.png" alt=""></div>
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

 perimeter = value1+value2+value1+value2;
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
    volume = (1 / 4) * value1 * (Math.sqrt((value2 + value3 + value4) * (value3 + value4 - value2) * (value4 + value2 - value3) * (value2 + value3 - value4)));
    return volume;
};

function trianglePrismArea(value1, value2, value3, value4) {
    top1=((value2 + value3 + value4) * (value3 + value4 - value2) * (value4 + value2 - value3) * (value2 + value3 - value4));
    top2=(1/4)*(Math.sqrt(top1));
    lateral = value1 * (value2 + value3 + value4);
    area = (top2 * 2) + lateral;
    return area;
};

function circleF() {
    var value1 = parseFloat(document.getElementById('value1').value);

    let circumference = circleCircumference(value1).toFixed(2);
    let area = circleArea(value1).toFixed(2);
    let x =
                                                    `
                                                    <div id="obrazek">
                                                    <div><img src="img/calc/circle.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Circumference: ${circumference} m</h2>
                                                        <h2>Area: ${area} m&sup2; </h2>
                                                    </div>
                                                    </div>
                                                    `;
    zmena.innerHTML = x;
};



function sphereF() {
    var value1 = parseFloat(document.getElementById('value1').value);

    let volume = sphereVolume(value1).toFixed(2);
    let area = sphereSurfaceArea(value1).toFixed(2);
    let x =
                                                    `
                                                    <div id="obrazek">
                                                        <div><img src="img/calc/sphere.gif" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Volume: ${volume} m&sup3;</h2>
                                                            <h2>Surface Area: ${area} m&sup2;</h2>
                                                        </div>
                                                    </div>
                                                    `;
    zmena.innerHTML = x;
};

function squareF() {
    var value1 = parseFloat(document.getElementById('value1').value);

    let area = squareArea(value1).toFixed(2);
    let perimeter = squarePerimeter(value1).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/calc/square.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                        <h2>Perimeter: ${perimeter} m</h2>
                                                    </div>
                                                    </div>
                                                    `;
    zmena.innerHTML = x;                                                
};

function cubeF() {
    var value1 = parseFloat(document.getElementById('value1').value);

    let volume = cubeVolume(value1).toFixed(2);
    let area = cubeSurfaceArea(value1).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/calc/cube.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Volume: ${volume} m&sup3;</h2>
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function rectangleF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);

    let area = rectangleArea(value1, value2).toFixed(2);
    let perimeter = rectanglePerimeter(value1, value2).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/calc/rectangle.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                        <h2>Perimeter: ${perimeter} m</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function rectangularPrismF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);

    let volume = rectangularPrismVolume(value1, value2, value3).toFixed(2);
    let area = rectangularPrismSurfaceArea(value1, value2, value3).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/calc/rectangularPrism.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Volume: ${volume} m&sup3;</h2>
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function triangleF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);

    let area = triangleArea(value1, value2).toFixed(2);
    let perimeter = trianglePerimeter(value1).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/calc/triangle.gif" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                        <h2>Perimeter: ${perimeter} m</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
}



function triangularPrismF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);
    var value4 = parseFloat(document.getElementById('value4').value);

    let volume = trianglePrismVolume(value1, value2, value3, value4).toFixed(2);
    let area = trianglePrismArea(value1, value2, value3, value4).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/calc/triangularPrism.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Volume: ${volume} m&sup3;</h2>
                                                        <h2>Area: ${area} m&sup2;</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    

};


//PHYSICS

function getValue2() {
    let x = document.getElementById('choice2').value;

    if (x == "potential") {
        document.getElementById('input').innerHTML =                 
                                                        `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Mass</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in kg">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Height</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in meters">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value3">Gravitational acceleration</label>
                                                                <input type="text" name="value3" id="value3" class="form-control" placeholder="9,80665 m/s&sup2;" disabled>
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img src="img/phy/potential.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Potential Energy: </h2>
                                                        </div>
                                                    </div>`;
        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: PotentialEnergyF();" );
    }

    else if (x == "kinetic") {
        document.getElementById('input').innerHTML =                 
                                                        `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Mass</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in kg">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Velocity</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in m/s&sup2;">
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img src="img/phy/kinetic.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Kinetic Energy: </h2>
                                                        </div>
                                                    </div>`;
        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: KineticEnergyF();" );
    }

    else if (x == "work") {
        document.getElementById('input').innerHTML =                 
                                                        `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Force</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in newtons">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Displacement</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in meters">
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img src="img/phy/work.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Work: </h2>
                                                        </div>
                                                    </div>`;
        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: WorkF();" );
    }

    else if (x == "freefall") {
        document.getElementById('input').innerHTML =                 
                                                        `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Initial Velocity</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in m/s&sup2;">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Time</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in seconds">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value3">Gravitational acceleration</label>
                                                                <input type="text" name="value3" id="value3" class="form-control" placeholder="9,80665 m/s&sup2;" disabled>
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img src="img/phy/freefall.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Height: </h2>
                                                            <h2>Velocity: </h2>
                                                        </div>
                                                    </div>`;
        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: FreeFallF();" );
    }
    
    else if (x == "acceleration") {
        document.getElementById('input').innerHTML =                 
                                                        `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Initial Speed</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in m/s&sup2;">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Final speed</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in m/s&sup2;">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value3">Time</label>
                                                                <input type="text" name="value3" id="value3" class="form-control" placeholder="Please eneter a number in seconds">
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img src="img/phy/acceleration.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Acceleration: </h2>
                                                        </div>
                                                    </div>`;
        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: AccelerationF();" );
    }      
};


function kineticEnergy(value1, value2){
    energy = (1/2)*value1*value2*value2;
    return energy;
}

function potentialEnergy(value1, value2){
    value3 = 9.80665;
    energy = value1*value2*value3;
    return energy;
}

function work(value1,value2){
    workVsl = value1*value2;
    return workVsl;
}

function freeFallVelocity(value1, value2){
    value3 = 9.80665;
    velocity = value1+(value2*value3);
    return velocity;
}

function freeFallHeight(value2){
    value3 = 9.80665;
    height = (1/2)*(value3*value2*value2);
    return height;
}

function accelerationFunkce(value1, value2, value3){
    acceleration=(value2-value1)/value3;
    return acceleration;
}

function KineticEnergyF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);

    let energy = kineticEnergy(value1, value2).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/phy/kinetic.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Kinetic Energy: ${energy} J</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function PotentialEnergyF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);

    let energy = potentialEnergy(value1, value2).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/phy/potential.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Potential Energy: ${energy} J</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function WorkF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);

    let workV = work(value1, value2).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/phy/work.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Work: ${workV} J</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function FreeFallF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);

    let fallV = freeFallVelocity(value1, value2).toFixed(2);
    let fallH = freeFallHeight(value2).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/phy/freefall.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Height: ${fallH} meters</h2>
                                                        <h2>Velocity: ${fallV} m/s&sup2;</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function AccelerationF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);

    let accelerationVysledek = accelerationFunkce(value1, value2, value3).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/phy/acceleration.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Acceleration: ${accelerationVysledek} m/s&sup2;</h2>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

//FINANCE

function getValue3() {
    let x = document.getElementById('choice3').value;

    // if (x == "mortgage") {
    //     document.getElementById('input').innerHTML =                 
    //                                                     `<div id="input">
    //                                                     <div class="row">
    //                                                         <div class="form-group bg-dark text-white">
    //                                                             <label for="value1">Purchase Price</label>
    //                                                             <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in dollars">
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="row">
    //                                                         <div class="form-group bg-dark text-white">
    //                                                             <label for="value2">Down Payment</label>
    //                                                             <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in dollars">
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="row">
    //                                                         <div class="form-group bg-dark text-white">
    //                                                             <label for="value3">Interest rate %</label>
    //                                                             <input type="text" name="value3" id="value3" class="form-control" placeholder="Please enter a percentage number">
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="row">
    //                                                         <div class="form-group bg-dark text-white">
    //                                                             <label for="value4">Term of loan</label>
    //                                                             <input type="text" name="value4" id="value4" class="form-control" placeholder="Please enter a number in months">
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>`;
    //     document.getElementById('obrazek').innerHTML =
    //                                                 `<div id="obrazek">
    //                                                     <div><img src="img/fin/mortgage.png" alt=""></div>
    //                                                     <div class="spodek">
    //                                                         <h2>Payment: </h2>
    //                                                     </div>
    //                                                 </div>`;
    //     document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: MortgageF();" );
    // }
    if(x == "income"){
        document.getElementById('input').innerHTML =                 
                                                        `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Initial Investment</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in dollars">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Additional Yearly Deposits</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in dollars">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value3">Interest Rate %</label>
                                                                <input type="text" name="value3" id="value3" class="form-control" placeholder="Please enter a percentage number">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value4">Years Invested</label>
                                                                <input type="text" name="value4" id="value4" class="form-control" placeholder="Please enter a number in years">
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img src="img/fin/savings.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Savings: </h2>
                                                        </div>
                                                    </div>`;
        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: SavingsF();" );
    }
    else if(x == "expense"){
        document.getElementById('input').innerHTML =                 
                                                        `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Current Savings</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in dollars">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Yearly Withdrawals</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in dollars">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value3">Investment Return %</label>
                                                                <input type="text" name="value3" id="value3" class="form-control" placeholder="Please enter a percentage number">
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img src="img/fin/savingslast.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Years: </h2>
                                                        </div>
                                                    </div>`;
        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: ExpenseF();" );
    }
    else if(x == "gas"){
        document.getElementById('input').innerHTML =                 
                                                        `<div id="input">
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value1">Kilometers driven</label>
                                                                <input type="text" name="value1" id="value1" class="form-control" placeholder="Please enter a number in kilometers">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value2">Fuel Efficiency (litre / 100km)</label>
                                                                <input type="text" name="value2" id="value2" class="form-control" placeholder="Please enter a number in litres">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group bg-dark text-white">
                                                                <label for="value3">Cost of Gas (per litre)</label>
                                                                <input type="text" name="value3" id="value3" class="form-control" placeholder="Please enter a number in dollars">
                                                            </div>
                                                        </div>
                                                    </div>`;
        document.getElementById('obrazek').innerHTML =
                                                    `<div id="obrazek">
                                                        <div><img src="img/fin/gas.png" alt=""></div>
                                                        <div class="spodek">
                                                            <h2>Payment: </h2>
                                                        </div>
                                                    </div>`;
        document.getElementById( "buttonZmena" ).setAttribute( "onClick", "javascript: GasF();" );
    }
};


// function mortgage(value1, value2, value3, value4){
//     platbaBanka = value1;
//     platbaTvoje = value2;
//     interest = value3;
//     mesice = value4;
//     platba = platbaBanka - platbaTvoje;

//     interestZaMesic = (platba * (interest*.01))/mesice;
//     platbaZaMesic = ((platba/mesice) + interestZaMesic).toFixed(2);
//     return platbaZaMesic;
// };

//Z nejakeho duvodu to nefunguje

function gas(value1, value2, value3){
    km = value1;
    spotrebaAuta = value2;
    cenaBenzinu = value3;

    litry=(km/100)*spotrebaAuta;
    cenaBenzinuAll=litry*cenaBenzinu;
    return cenaBenzinuAll;
};

function savingsLast(value1, value2, value3){
    savingsZacatek = value1;
    withdrawal = value2;
    interest = value3;
    savings = savingsZacatek - withdrawal;
    i = 1;
    do {
        savingsA=(savings*(interest*.01));
        savings=savings+savingsA;
        savings=savings-withdrawal;
        i++;
        
    } while (savings>0);

    i = i-1;
    return i;
};

function savings(value1, value2, value3, value4){
    penizeZacatek = value1;
    addPenize = value2;
    interest = value3;
    years = value4;
    penize=penizeZacatek+(penizeZacatek*(interest*.01));
    i=1;

    do {
        penize=penize+addPenize;
        penize=penize+(penize*(interest*.01));
        i++;
    } while (i<years);

    return penize;
};

// function MortgageF() {
//     var value1 = parseFloat(document.getElementById('value1').value);
//     var value2 = parseFloat(document.getElementById('value2').value);
//     var value3 = parseFloat(document.getElementById('value3').value);
//     var value4 = parseFloat(document.getElementById('value4').value);

//     let paymentMortgage = mortgage(value1, value2, value3, value4).toFixed(2);
//     let x =
//                                                         `
//                                                     <div id="obrazek">
//                                                     <div><img src="img/fin/mortgage.png" alt=""></div>
//                                                     <div class="spodek">
//                                                         <h2>Payment: ${paymentMortgage}</h2>
//                                                     </div>
//                                                     </div>
//                                                     `;
// zmena.innerHTML = x;    
// };

function SavingsF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);
    var value4 = parseFloat(document.getElementById('value4').value);

    let savingsVysledek = savings(value1, value2, value3, value4).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/fin/savings.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Savings: $${savingsVysledek}</h2>
                                                        <p>At the end of <b>${value4}</b> years, your savings will have grown to $<b>${savingsVysledek}</b>.</p>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function ExpenseF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);

    let expense = savingsLast(value1, value2, value3).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/fin/savingsLast.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Years: ${expense}</h2>
                                                        <p>Your savings will last for <b>${expense}</b> years.</p>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};

function GasF() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);

    let gasVysledek = gas(value1, value2, value3).toFixed(2);
    let x =
                                                        `
                                                    <div id="obrazek">
                                                    <div><img src="img/fin/gas.png" alt=""></div>
                                                    <div class="spodek">
                                                        <h2>Payment: $${gasVysledek}</h2>
                                                        <p>The gas will cost $<b>${gasVysledek}</b> for your road trip.</p>
                                                    </div>
                                                    </div>
                                                    `;
zmena.innerHTML = x;    
};