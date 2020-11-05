# #!/bin/bash
rimraf dist/lib
cross-env NODE_ENV=production rollup -c
cp package.json dist/lib