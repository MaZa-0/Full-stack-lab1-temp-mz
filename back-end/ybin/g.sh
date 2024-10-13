#!/bin/bash

################ do not change this file. Changing this file will result in a zero ###################

################ Really. Do NOT change this file #####################################################

status=-1

cd "$(dirname "$0")"

check_file() {
    local file_path=$1
    local min_lines=$2
    local file_name=$(basename "$file_path")

    if [ -f "$file_path" ]; then
        LINE_COUNT=$(wc -l < "$file_path")
        if [ "$LINE_COUNT" -ge "$min_lines" ]; then
            status=0
            echo "$file_name ok"
        else
            echo "$file_name nok"
        fi
    else
        echo "$file_name not found"
    fi
}

check_file "../model/course.ts" 35
check_file "../model/lecturer.ts" 35
check_file "../model/schedule.ts" 35
check_file "../test/model/schedule.test.ts" 80

exit $status