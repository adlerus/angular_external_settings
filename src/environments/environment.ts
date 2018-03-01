// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// https://github.com/angular/angular-cli/issues/6711

function loadJSON(filePath) {
  const jsonString = loadTextFileAjaxSync(filePath, 'application/json');
  return JSON.parse(jsonString);
}

function loadTextFileAjaxSync(filePath, mimeType) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', filePath, false);
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType);
    }
  }
  xmlhttp.send();
  if (xmlhttp.status === 200) {
    return xmlhttp.responseText;
  }
  else {
    return null;
  }
}

const environmentSettings = {
  production: false,
  name: 'dev'
};

const json = loadJSON('/assets/externalsettings.json');

Object.assign(environmentSettings, json);

export const environment = environmentSettings;
