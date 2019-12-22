
const beqz = (arg0, arg1, arg2) => {
    if (arg0 === 0) {
        return arg1
    }
    
    return arg2
}

exports.handler = async (event) => {
    const input = event.body;
    
    input.memory.pc = beqz(input.decoded.args[0], input.decoded.args[1], input.decoded.args[2])
    
    const response = {
        statusCode: 200,
        body: input,
    };
    
    return response;
};
