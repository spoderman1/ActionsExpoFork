#!/bin/bash

# Navigate to the build directory
cd ./build/
printf "in rename script"

# Find the APK file and rename it to latest-build.apk
# This assumes there is only one APK file in the directory
mv *.apk latest-build.apk