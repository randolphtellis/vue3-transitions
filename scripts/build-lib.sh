# #!/bin/bash
rimraf dist/lib
cross-env NODE_ENV=production rollup -c
cp README.md dist/lib
cp package.json dist/lib
cp LICENSE.md dist/lib