
exports.handler = async (event) => {
    let input;
    
    try {
        input = (JSON.parse(event)).body;
    } catch (e) {
        input = event.body
    }
    
    input.fetched = input.program[input.memory.pc]
    
    input.memory.pc++;

    const response = {
        statusCode: 200,
        body: input,
    };
    
    return response;
};
