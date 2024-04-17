
// This is a function that shows the sign up page , this is done by hiding the contents of the log in page
function show_sign_up_page() {
    const log_in_page = document.getElementById('log_in_page');             // this is fetching the log in page element 
    const sign_up_page = document.getElementById('sign_up_page');           // this is fetching the sign up page element 

    log_in_page.style.display = 'none';                                     // this hides the log in page
    sign_up_page.style.display = 'block';                                   // this shows the sign up page
}
document.addEventListener('DOMContentLoaded', function () {                 // this is an event listener to show the sign up page once the DOM content has been loaded
    const sign_up_link = document.getElementById('sign_up_link');           // this fetches the sign up link element
    sign_up_link.addEventListener('click', function (event) {               // this is an event listener for when the sign up button is clicked
        event.preventDefault();                                             // this will prevent the default action of the next link as i do not want a page reload
        show_sign_up_page();                                                // this calls the function to show the sign up page
    });
});
document.addEventListener('DOMContentLoaded', function () {                 // this is an event listener helps with log in and sign up functionality
    const log_in_form = document.getElementById('log_in_form');             // fetches the log in form element
    const sign_up_form = document.getElementById('sign_up_form');           // fetches the sign up form element
    const log_in_page = document.getElementById('log_in_page');             // fetches the log in page element
    const sign_up_page = document.getElementById('sign_up_page');           // fetches the sign up page element
    const page_container = document.getElementById('page_container');       // fetches the page container element

    log_in_form.addEventListener('submit', function (event) {               // this is an event listener for when the log in form is submitted and completed
        event.preventDefault();                                             // this helps prevent the default form submission behavior normally in place
        const email = document.getElementById('username').value;            // this fetches the email from the form submitted
        const password = document.getElementById('password').value;         // this fetches the password from the form submitted

        if (localStorage.getItem(email) === password) {                     // this is checking whether any of the inputed email or password is already locally stored
            log_in_page.style.display = 'none';                             // this is hiding the log in page
            page_container.style.display = 'block';                         // this is showing the main page container
        } else {
            alert('Invalid email or password. Please try again.');          // this shows an error message if the credentials typed in are not matched with any locally stored
        }
    });
    sign_up_form.addEventListener('submit', function (event) {                  // this is an event listener for when the sign up form is submitted
        event.preventDefault();                                                 // this is used to once again used to prevent the default form submission behavior

        const email = document.getElementById('email').value;                   // this fetches the email from the sign up form that was submitted   
        const password = document.getElementById('sign_up_password').value;     // this fetches the password from the sign up form that was submitted

        localStorage.setItem(email, password);                                  // this stores the email and password that was submitted in the sign up form into local storage
        alert(' You have been successfully signed up! ');                       // this shows that the user has successfullly signed up
        show_log_in_page();                                                     // this calls the function to show the log in page once the user has successfully signed up
    });
    // this function shows the sign up page by hiding the log in page
    function show_sign_up_page() {                                             
        log_in_page.style.display = 'none';                                     // this hides the log in page
        sign_up_page.style.display = 'block';                                   // this displays the log in page
    }
    // this function shows the log in page by hiding the sign up page
    function show_log_in_page() {
        sign_up_page.style.display = 'none';                                    // this hides the sign up page
        log_in_page.style.display = 'block';                                    // this displays the log in page
    }
});




// This function , erase_canvas is used to erase all the pixels present within the canvas when called, this useful as this means lines will not stack on top of each other
function erase_canvas(canvas) {
    const context = canvas.getContext('2d');                        // this will fetch the 2d rendering context of the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);           // this will erase all of the elements in the canvas
}
// This function , draw_axis is used to draw the x and y axis onto the canvas
function draw_axis(canvas) {                                        
    const context = canvas.getContext('2d');                        // {this will fetch the 2d rendering context of the canvas} 
    const center_x = canvas.width / 2;                              // this calculates the center coordinates of the canvas (x)
    const center_y = canvas.height / 2;                             // this calculates the center coordinates of the canvas (y)

    context.beginPath();                                            // this starts the process of drawing the x axis
    context.moveTo(0, center_y);                                    // this will move the drawing cursor to the left side of canvas at the center point y
    context.lineTo(canvas.width, center_y);                         // this will draw a line across the width of the canvas , from the middl left side to the right middle
    context.strokeStyle = 'black';                                  // this will set the stroke colour to black
    context.stroke();                                               // this will actually draw the line

    context.beginPath();                                            // this starts the process of drawing the y axis
    context.moveTo(center_x, 0);                                    // this will move the drawing cursor to the top of the canvas at the center point x
    context.lineTo(center_x, canvas.height);                        // this will draw a line across the height of the canvas , from the bottom middle to the top middle
    context.strokeStyle = 'black';                                  // {this will set the stroke colour to black}
    context.stroke();                                               // {this will actually draw the line}
}

// this function, draw_grid_lines , is used to draw the gridlines onto the canvas
function draw_grid_lines(canvas) {                                 
    const context = canvas.getContext('2d');                        // {this will fetch the 2d rendering context of the canvas}
    const center_x = canvas.width / 2;                              // {this calculates the center coordinates of the canvas (x)}
    const center_y = canvas.height / 2;                             // {this calculates the center coordinates of the canvas (y)}
    const step = canvas.width / 20;                                 // this calculates the step size for the gridlines depending on the canvas width divided by 20

    context.beginPath();                                            // this starts the process of drawing the grid lines
    context.strokeStyle = 'lightgray';                              // this sets the grid line coour to light gray
    context.lineWidth = 0.5;                                        // sets the grid line width to 0.5
    for (let i = 1; i <= 10; i++) {                                 // this will initalize a loop that will continue to execute the code in the loop whilst the value of i is less then or equal to 10
        const x = center_x + i * step;                              // this will calculate the x coordinate for each grid line
        context.moveTo(x, 0);                                       // this will move the drawing cursor to the calculated x coordinate at the top of the canvas
        context.lineTo(x, canvas.height);                           // this will draw a line from the previously calculated x coordinate at the top of the canvas straight down to the bottom of the canvas
        context.stroke();                                           // {this will actually draw the line}
      
        const negative_x = center_x - i * step;                     // this calculates the x coordinate for each grid line on the negative axis
        context.moveTo(negative_x, 0);                              // this will move the drawing cursor to the calculated x coordinate at the top of the canvas on the negative side
        context.lineTo(negative_x, canvas.height);                  // this will draw lines from the previously calculated x coordinate at the top of the canvas on the negative side straight down to the bottom of the canvas
        context.stroke();                                           // {this will actually draw the line}
    }

    for (let i = 1; i <= 10; i++) {                                 // {this will initalize a loop that will continue to execute the code in the loop whilst the value of i is less then or equal to 10}                            
        const negative_y = center_y - i * step;                     // this will calculate the negative y coordinate for each grid line
        context.moveTo(0, negative_y);                              // this will move the drawing cursor to the calculated y coordinate on the side of the canvas
        context.lineTo(canvas.width, negative_y);                   // this will draw a line from the previously calculated y coordinate on the side of the canvas straight across the canvas to the other side
        context.stroke();                                           // {this will actually draw the line}
        
        const postive_y = center_y + i * step;                      // this will calculate the postive y coordinate for each grid line                               
        context.moveTo(0, postive_y);                               // {this will move the drawing cursor to the calculated y coordinate on the side of the canvas}
        context.lineTo(canvas.width, postive_y);                    // {this will draw a line from the previously calculated y coordinate on the side of the canvas straight across the canvas to the other side}
        context.stroke();                                           // {this will actually draw the line}
    }
}

// this function , label_axis , is used to label the x and y axis with the correlating numbers, 1 - 10 or -1 to -10 depending on whether its negative or not
function label_axis(canvas) {
    const context = canvas.getContext('2d');                        // {this will fetch the 2d rendering of the canvas}
    const center_x = canvas.width / 2;                              // {this calculates the center coordinates of the canvas (x)}
    const center_y = canvas.height / 2;                             // {this calculates the center coordinates of the canvas (y)}                        
    const step = canvas.width / 20;                                 // {this calculates the step size for the gridlines depending on the canvas width divided by 20}

    context.fillStyle = 'black';                                        // this sets the text style to black
    context.textAlign = 'center';                                       // this sets the alignment of the text to the center
    context.textBaseline = 'top';                                       // this sets the baseline of the text
    for (let i = 1; i <= 10; i++) {                                     // {this will initalize a loop that will continue to execute the code in the loop whilst the value of i is less then or equal to 10}
        const x = center_x + i * step;                                  // this will calculate the x coordinate for each label
        context.fillText(i.toString(), x, center_y + 5);                // this will draw the label at the calculated coordinate slightly up the from the center line
        const negative_x = center_x - i * step;                         // this will calculate the negative x coordinate for each label
        context.fillText((-i).toString(), negative_x, center_y + 5);    // this will draw the label at the calculated negative coordinate slighly above the center line 
    }

    context.textAlign = 'right';                                        // this sets the alignment of the text to the right
    context.textBaseline = 'middle';                                    // this sets the base of the text to the middle
    for (let i = 1; i <= 10; i++) {                                     // {this will initalize a loop that will continue to execute the code in the loop whilst the value of i is less then or equal to 10}
        const y = center_y - i * step;                                  // this will calculate the y coordinate for each label
        context.fillText(i.toString(), center_x - 5, y);                // this will draw the label at the calculated coordinate slightly to the left of the center line
        const negative_y = center_y + i * step;                         // this will calculate the negative y coordinate for each label
        context.fillText((-i).toString(), center_x - 5, negative_y);    // this will draw the label at the calculated negative coordinate slighly to the left of the center line
    }
}



// this function , plot_graph , is used to plot the line from the users input
function plot_graph(canvas, equation) {                            
    const context = canvas.getContext('2d');                                // {this will fetch the 2d rendering of the canvas} 
    const center_x = canvas.width / 2;                                      // {this calculates the center coordinates of the canvas (x)}
    const center_y = canvas.height / 2;                                     // {this calculates the center coordinates of the canvas (y)}

    context.beginPath();                                                // this will start the process of drawing the line on the graph from the user's input
    context.strokeStyle = 'blue';                                       // this sets the colour of the line to blue
    context.lineWidth = 2;                                              // this sets the width of the line to 2 pixels

    for (let x = -10; x <= 10; x += 0.01) {                                // this will loop through the x values of -10 to 10 with a step of 0.01                            
        const y = evaluate_equations(equation, x);                          // this will evaulate the inputed equation for the value of x
        const graph_x = coordinate_mapper(x, -10, 10, 0, canvas.width);     // this will map the x coordinate to the canvas width
        const graph_y = coordinate_mapper(y, -10, 10, canvas.height, 0);    // this will map the y coordinate to the canvas height

        if (x === -10) {                                               
            context.moveTo(graph_x, graph_y);                               // this will move the drawing cursor to the initial point of the graph
        } else {
            context.lineTo(graph_x, graph_y);                               // this will draw a line to the current point of the graph
        }
    }
    context.stroke();                                                       // {this will actually draw the lines}
}

// this function below is used to detect the turning points and then to label it with the coordinates 
function detect_turning_points (canvas, equation) {
    const context = canvas.getContext('2d');                                // {this will fetch the 2d rendering of the canvas} 
    const center_x = canvas.width / 2;                                      // {this calculates the center coordinates of the canvas (x)}
    const center_y = canvas.height / 2;                                     // {this calculates the center coordinates of the canvas (y)}

    let previous_derivative = 0;                                                    // this will intiliaze the previous derivative value
    let previous_x_value = -10;                                                     // this will iniliaze the previous x value
    let turning_point_detected = false;                                             // this will initiliaze a flag to check whether a turning point has been detected or not

    for (let x = -10; x <= 10; x += 0.01) {                                        // this will loop through the x values of -10 to 10 with a step of 0.01     
        const y = evaluate_equations(equation, x);                                  // this will evaluate the equation for the current x value

        if (x !== -10) {
            const derivative = (y - evaluate_equations(equation, previous_x_value)) / (x - previous_x_value);                   // this will calculate the derivative

            if ((previous_derivative > 0 && derivative < 0) || (previous_derivative < 0 && derivative > 0)) {                   // this is checking if a derivative is detected
                const turning_point_x = previous_x_value + (x - previous_x_value) / 2;                                          // this is calculating the x coordinate for the turning point
                const turning_point_y = evaluate_equations(equation, turning_point_x);                                          // this is calculating the y coordinate for the turning point
                context.fillText(`(${turning_point_x.toFixed(2)}, ${turning_point_y.toFixed(2)})`, coordinate_mapper(turning_point_x, -10, 10, 0, canvas.width) + 5, coordinate_mapper(turning_point_y, -10, 10, canvas.height, 0) - 5);    // this will draw the turning point label on the graph with the coordinates
                turning_point_detected = true;                                                                      // this sets the flag from false to true 
            }
        }
        previous_derivative = (y - evaluate_equations(equation, previous_x_value)) / (x - previous_x_value);        // this updates the previous derivatives value to the new one
        previous_x_value = x;                                                                                       // this updates the previous x value to the new one
        turning_point_detected = false;                                                                             // this sets the flag back to false
    }
}

// this function below is used to find the x and y intercepts and then to label them with the coordinates
function label_axis_intercepts(canvas, equation) {
    const context = canvas.getContext('2d');                                                                // {this will fetch the 2d rendering context of the canvas}
    const center_x = canvas.width / 2;                                                                      // {this calculates the center coordinates of the canvas (x)}
    const center_y = canvas.height / 2;                                                                     // {this calculates the center coordinates of the canvas (y)}

    const x_intercept_y_coord = evaluate_equations(equation, 0);                                                        // this will calculate the y coordinate of the x intercept
    if (x_intercept_y_coord !== undefined && !isNaN(x_intercept_y_coord)) {                                             // this will check if the y coordinate is a valid number
        context.fillText(`(0, ${x_intercept_y_coord.toFixed(2)})`, center_x + 5, coordinate_mapper(x_intercept_y_coord, -10, 10, canvas.height, 0) - 5);      // this will draw the label for the x intercept
    }

    const y_intercept_x_coord = 0;                                                                                      // this sets the x coordinate of the y intercept to 0
    const y_intercept_y_coord = evaluate_equations(equation, y_intercept_x_coord);                                      // this calculates the y coordinate of the y intercept
    if (y_intercept_y_coord !== undefined && !isNaN(y_intercept_y_coord)) {                                             // this checks to see if the y coordinate is a valid number
        context.fillText(`(${y_intercept_x_coord.toFixed(2)}, 0)`, coordinate_mapper(y_intercept_x_coord, -10, 10, 0, canvas.width) + 5, center_y - 5);       // this draws the label for the y intercept
    }
}

// this function below is used to call all the other functions and to set up all the steps to allow the users equation to be analyzed and plotted
function plot_graph_components() {
    const equation_input = document.getElementById('equation_Input');                                       // this will fetch the input element with the ID of equation_Input
    const equation = equation_input.value;                                                                  // this will fetch what was inputted in the equation input field
    const graph = document.getElementById('graphCanvas');                                                   // this will fetch the canvas element with the ID of graphCanvas

    erase_canvas(graph);                                                // calling the function that will clear the canvas whenever a new equation is started 
    draw_axis(graph);                                                   // calling the function that will draw the x and y axis onto the canvas
    draw_grid_lines(graph);                                             // calling the function that will draw the grid lines onto the canvas
    label_axis(graph);                                                  // calling the function that will label the x and y axis with the correlating numbers
    plot_graph(graph, equation);                                        // calling the function that will plot the line of the users input onto the canvas
    detect_turning_points(graph, equation);                             // calling the function that will find the turning points on the graph and then label them
    label_axis_intercepts(graph, equation);                             // calling the function that will label the x and y intercepts
}

// this function below is used to map a value from one range to another 
function coordinate_mapper(value, from_minimum, from_maximum, to_minimum, to_maximum) {
    return (value - from_minimum) * (to_maximum - to_minimum) / (from_maximum - from_minimum) + to_minimum;                   // this maps the value using the linear interpolation method
}

// this function is used to identify what type of equation evaluator we need , testing to see what the equation holds and where it should then go
function evaluate_equations(equation, x) {
    if (equation.includes('sin') || equation.includes('cos') || equation.includes('tan')) {     // this checks whether a trigonometric function is within the inputted equation
        return evaluate_trigonometric_equation(equation, x);                                    // this then calls the function to evaluate the trigonometric equation  
    } else if (equation.includes('x^') || equation.includes('x')) {                             // this checks whether there is a x or x raised to a power
        return evaluate_polynomial_equation(equation, x);                                       // this then calls the function to evaluate the polynomial equation
    } else if (equation.includes('x') && equation.includes('+') && equation.includes('*')) {    // this checks whether there is any linear terms within the equation
        return evaluate_linear_equation(equation, x);                                           // this then calls the function that evaluates the linear equation
    } else {
        console.error('Unsupported equation type');                                             // this then prints an error for unsupported equation types
        return undefined;
    }
}

// this function below is used to evaluate polynomials, focusing on the equations that involves powers
function evaluate_polynomial_equation(equation, x) {                                                                                                    
    const cleaned_equation = equation.replace(/(-?\d*)\*?x\^(\d+)|(-?\d*)\*?x/g, (match, coefficient, exponent, coefficient_without_exponent) => {              // this cleans up the inputted equation by replacing some of the shorthand notations with syntax that javascript can understand
        if (coefficient !== undefined && exponent !== undefined) {                                                                                              // this will handle the equations where the coefficent and exponent are provided                                                                                    // 
            return `${coefficient === "" ? 1 : coefficient} * Math.pow(x, ${exponent})`;
        } else if (coefficient_without_exponent !== undefined) {                                                                                                // this will handle the equations where only the coefficent is provided 
            return `${coefficient_without_exponent || 1} * x`; 
        } else {
            return 'x';                                                                                                                                         // this will handle the equations when only x is provided
        }
    });
    try {
        return Function('x', `"use strict"; let y; return y = ${cleaned_equation}`)(x);
    } catch (error) {
        console.error('Error evaluating polynomial equation:', error.message);
        return undefined;
    }
}

// this function is used to solve the simpler equations, mainly involving no powers
function evaluate_linear_equation(equation, x) {
    const [slope, constant] = equation.split(/x\s*([-+])\s*(\d+)/).filter(item => item !== '');         // this splits the equation so that the slope and the constant can be extracted
    if (slope === undefined && constant === undefined) {                                                // this is checking to see whether the slope and constant are present within the equation
        console.error('Invalid linear equation');                                                       // this prints an error message if the input is invalid
        return undefined;
    }
    try {
        return parseFloat(slope) * x + parseFloat(constant);                                            // this evaluates the equation
    } catch (error) {
        console.error('Error evaluating linear equation:', error.message);                              // this prints an error message if the evaluation fails
        return undefined;
    }
}

// this function is called upon when sin, cos or tan is detected, once it is , the equation is passed to this for evaluation where it is converted into a javascript friendly form
// (-?\d*\.?\d*) is for capturing any coefficients of the function , \s* is used to capturw whitespaces and zeros , ([a-z]+) captures any lowercased letters so sin , cos or tan , \(([^)]+)\) is capturing the argument and the parenhesises 
function evaluate_trigonometric_equation(equation, x) {
    try {
        const replaced_equation = equation.replace(/(-?\d*\.?\d*)\s*([a-z]+)\(([^)]+)\)/gi, (match, coefficient, func, arg) => {        // this line is used to replace certain substrings with a replacement string or function so it can be successfully evaluated in javascript 
            let parsed_coefficient = parseFloat(coefficient) || 1;                                                                      // This will Parse coefficient or default to 1
            let parsed_arguement = arg.trim();                                                                                          // This will trim any uneeded spaces
            parsed_arguement = parsed_arguement.replace(/x/g, `(${x})`);                                                                // This is checking for arithmetic expressions in the argument and then replace the x in the equation with the constant equivalent
            return `${parsed_coefficient} * Math.${func.toLowerCase()}(${parsed_arguement})`;                                           // This will handle cases like 'sin(x+5)', 'cos(3x)', etc.
        });
        return eval(replaced_equation);                                                                                                 // This will evaluate the modified equation
    } catch (error) {
        console.error('Error evaluating trigonometric equation:', error.message);                                                       // This will print an error message if evaluation fails
        return undefined;
    }
}





const equation_input = document.getElementById('equation_Input');                        // This is an event listener to trigger graph plotting when equation input changes
equation_input.addEventListener('input', plot_graph_components);


plot_graph_components();                                                                  // This plots the graph when the page loads
