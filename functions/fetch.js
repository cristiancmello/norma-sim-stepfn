
exports.handler = async (event) => {
    const input = (JSON.parse(event)).body;
    
    input.fetched = input.program[input.memory.pc]
    
    input.memory.pc++;

    const response = {
        statusCode: 200,
        body: input,
    };
    
    return response;
};
