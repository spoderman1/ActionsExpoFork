#!/bin/bash

#Authenticate gcloud
gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS

#upload and test Versofy-Home app
#gcloud firebase test android run \
#    --app {path/to/app}
#    --device model=Pixel2, version=27, locale=en, orientation=portrait \
#    --timeout=90s
