#/bin/bash

export BUILD_TYPE="release"
export BUILD_ROOT=$PWD/builds
export DEPLOY_ROOT=$PWD/deploy
export BUILD_NAME="raspberrypi_release"
export BUILD_VARIANT="variant_raspberrypi"
export BUILD_COMPONENTS="raspberrypi_components"
export SOURCE_DIR="$PWD/src"
export BUILD_DIR="$PWD/builds/$BUILD_NAME"
export DEPLOY_DIR="$PWD/deploy/$BUILD_NAME"
export CFG_DIR="$PWD/config"

# Build
python buildtools/build.py $BUILD_COMPONENTS $BUILD_VARIANT $@

