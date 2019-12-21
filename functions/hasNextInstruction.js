
exports.handler = async (event) => {
    const input = event.body;
    
    input.hasNextInst = input.program[input.memory.pc] !== undefined
    
    const response = {
        statusCode: 200,
        body: input,
    };
    return response;
};
