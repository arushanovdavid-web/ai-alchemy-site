#!/bin/sh
# Bundle the tower scene with the parts of three.js it uses (three@0.170.0, MIT). Needs esbuild and three installed
# in $NODE_PATH, e.g. `npm i esbuild@0.24.2 three@0.170.0` in a scratch folder.
cd "$(dirname "$0")/../.."
"${ESBUILD:-esbuild}" tools/tower3d/tower3d.src.js --bundle --format=esm --minify --target=es2020 \
  --legal-comments=eof --outfile=assets/tower3d.js
