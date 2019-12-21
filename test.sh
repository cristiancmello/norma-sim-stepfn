#!/bin/sh

DESCRIBE_EXECUTION_ARN_CMD=$(./step-functions-start-execution-example.sh)

watch -n1 $DESCRIBE_EXECUTION_ARN_CMD