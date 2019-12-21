#!/bin/sh

STATE_MACHINE=arn:aws:states:us-east-1:467742762527:stateMachine:lambdaNormaStateMachine
INPUT_FILE=examples/basic-program.json
INPUT_JSON_TEXT=$(jq '. | @json' examples/basic-program.json)

OUTPUT_EXECUTION_ARN=$(aws stepfunctions start-execution \
    --state-machine-arn $STATE_MACHINE \
    --input $INPUT_JSON_TEXT | jq --raw-output '.executionArn')

DESCRIBE_EXECUTION_ARN_CMD="aws stepfunctions describe-execution \
    --execution-arn $OUTPUT_EXECUTION_ARN | jq --raw-output '.output'"

echo $DESCRIBE_EXECUTION_ARN_CMD