
const inc = arg0 => ++arg0

exports.handler = async (event) => {
    const input = event.body;
    
    let r = inc(input.decoded.args[0]);
    
    input.memory[input.fetched.args[0]] = r;
    
    const response = {
        statusCode: 200,
        body: input,
    };
    return response;
};
