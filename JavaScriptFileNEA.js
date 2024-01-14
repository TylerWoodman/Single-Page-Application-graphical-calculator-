function plot_Graph() {                                                                                     // function to take the user input and plot the graph dependant on this
    const equation_Input = document.getElementById('equation_Input');                                       // this takes in the input from the user
    const equation = equation_Input.value;

    const graph = document.getElementById('graphCanvas');                                                   // Get the canvas element and create a 2D drawing context for it
    const canvas_rendering_context = graph.getContext('2d');

    canvas_rendering_context.clearRect(0, 0, graph.width, graph.height);                                    // this will clear the canvas before creating a new graph

    canvas_rendering_context.beginPath();                                                                   // this is to setup the styling for the graph lines (the one being created)
    canvas_rendering_context.strokeStyle = 'blue';
    canvas_rendering_context.lineWidth = 2;

    try {
        let graph_X = coordinate_Mapper(-10, -10, 10, 0, graph.width);                                      // this maps the original coordinates for the canvas space
        let graph_Y = coordinate_Mapper(evaluate_Equation(equation, -10), -10, 10, graph.height, 0);
        canvas_rendering_context.moveTo(graph_X, graph_Y);

        for (let x = -10; x <= 10; x += 0.1) {                                                              // this will iterate over the x values and then draw the graph 
            const y = evaluate_Equation(equation, x);
            graph_X = coordinate_Mapper(x, -10, 10, 0, graph.width);
            graph_Y = coordinate_Mapper(y, -10, 10, graph.height, 0);

            if (x === -10) {                                                                                // this moves to the original point or draws a line to the new point 
                canvas_rendering_context.moveTo(graph_X, graph_Y);
            } else {
                canvas_rendering_context.lineTo(graph_X, graph_Y);
            }
        }

        canvas_rendering_context.stroke();                                                                  // this draws the graph
    } catch (error) {
        console.error('Error plotting graph:', error);                                                      // this will handle errors during the graph plotting
    }
}

function evaluate_Equation(equation, x) {                                                                   // this function evaulates the given equation 
    const cleaned_Equation = equation.replace(/(\d*)x/g, (match, coefficient) => {                          // this cleans the given equation and creates a function to evaluate it 
        if (coefficient) {                                                                                  // this is to allow inputs like 2x or 4x for example, converting them to 2 * x
            return `(${coefficient} * x)`;
        } else {
            return '(x)';
        }
    });

    try {
        return Function('x', `"use strict"; let y; return y = ${cleaned_Equation}`)(x);                     // use the function constructor to dynamically create and execute the function
    } catch (error) {
        console.error('Error evaluating equation:', error.message);                                         // handles errors during the equation evaulation
        return undefined;
    }
}

function coordinate_Mapper(value, from_Min, from_Max, to_Min, to_Max) {                                     // this fucntions maps a value from one range to another 
    return (value - from_Min) * (to_Max - to_Min) / (from_Max - from_Min) + to_Min;
}
