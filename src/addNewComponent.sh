 #!bin/bash
# dir and filename checks
if [ ${PWD##*/} == "src" ]; then
  echo "Dir check OK"
else
  echo "This script should be run in the src directory of your project"
  exit
fi

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Please supply component name as a CLI argument in the format:"
    echo "./createComponent.sh [YourComponentNameHere] [cmp/cnt]"
    echo "Use cmp for components, cnt for content. Content Generation is the default"
    exit
fi

dirToUse=$(echo "content")
if [ "$2" == "cmp" ];
then
    dirToUse=$(echo "components")
fi

echo "creating $dirToUse with name $1 at:"
echo "$PWD"

mkdir $dirToUse &> /dev/null
mkdir $dirToUse/$1 &> /dev/null

# Create Index File
if test -f "$dirToUse/$1/index.js"; then
    echo "$dirToUse/$1/index.js already exists - NOT overwriting"
else
    touch $dirToUse/$1/index.js
    echo "import $1 from './$1';" >> $dirToUse/$1/index.js
    echo "export default $1;" >> $dirToUse/$1/index.js
    # output on succesful file creation
    echo "Created and populated file: $dirToUse/$1/index.js"
fi

# Create JS Object File
if test -f "$dirToUse/$1/$1.js"; then
    echo "$dirToUse/$1/$1.js already exists - NOT overwriting"
else
    touch $dirToUse/$1/$1.js
    echo "import React from 'react';" >> $dirToUse/$1/$1.js
    echo "const $1 = () => {" >> $dirToUse/$1/$1.js
    echo "  return <div>This page was created by the ComponentGenerator Script</div>;" >> $dirToUse/$1/$1.js
    echo "};" >> $dirToUse/$1/$1.js
    echo "export default $1;" >> $dirToUse/$1/$1.js
    # output on succesful file creation
    echo "Created and populated file: $dirToUse/$1/$1.js"
fi

# Create scss file
# Generate name
scssName=$(echo "$1" | sed 's/\([A-Z]\)/ \1/g') #split on capitals
scssName=${scssName// /-} #replace spaces with dashes
scssName=${scssName:1} #remove space at begining
scssName=$(echo $scssName | tr '[:upper:]' '[:lower:]' ) #convert to all lowers
scssName=$(echo "_$scssName") #add _ in beginning
echo "$scssName"

if test -f "$dirToUse/$1/$scssName.scss"; then
    echo "$dirToUse/$1/$scssName.scss already exists - NOT overwriting"
else
    touch $dirToUse/$1/$scssName.scss
    echo "@import './overrides.scss';" >> $dirToUse/$1/$scssName.scss
    echo "Created and populated file: $dirToUse/$1/$scssName.scss"
fi

# Create overides scss file
if test -f "$dirToUse/$1/_overrides.scss"; then
    echo "$dirToUse/$1/_overrides.scss already exists - NOT overwriting"
else
    touch $dirToUse/$1/_overrides.scss
    echo "Created file: $dirToUse/$1/_overrides.scss"
fi