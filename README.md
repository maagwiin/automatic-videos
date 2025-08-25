# automatic-videos
Project for make automatic videos

## Environment variables

This project expects the path to After Effects' `aerender` executable to be
available through the `AERENDER_PATH` environment variable.

Example:

```bash
export AERENDER_PATH="C:/Program Files/Adobe/Adobe After Effects CC 2019/Support Files/aerender"
npm run render
```

The `render` npm script sets a default value for Windows installations. Adjust
the variable if After Effects is installed in a different location.
