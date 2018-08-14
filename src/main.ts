import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

const main = async () => {
    try
    {
        const value = await readFile("./file.txt", { encoding: "utf8" });
        console.log(value);
    }
    catch (err) {
        console.log(err);
    }
};

main();
