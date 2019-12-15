
exports.handler = async (event) => {
    const input = event.body;
    
    // Execute decode operations
    input.decoded = {...input.fetched}
    let pos = 0;
    
    input.decoded.args = input.decoded.args.map(arg => {
        if (input.decoded.inst == 'beqz') {
            if (pos != 0) {
                return arg;
            }
        }
        
        pos++;
        
        return input.memory[arg];
    })
    
    const response = {
        statusCode: 200,
        body: input,
    };
    
    return response;
};
