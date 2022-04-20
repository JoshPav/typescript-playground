import fse from "fs-extra";

export function writeToJson(json: any, fileName: string) {
  fse.outputFile(`output/${fileName}.json`, JSON.stringify(json), (err) => {
    if (err) console.error(err);
  });
}
