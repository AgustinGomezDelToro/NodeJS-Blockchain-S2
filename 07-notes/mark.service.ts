import {appendFile, readFile} from "fs/promises";

export class MarkService {

    readonly className: string;

    constructor(className: string) {
        this.className = className;
    }

    async store(studentName: string, mark: number): Promise<void> {
        return appendFile(`${this.className}.mark`, `${studentName}|${mark}\n`);
    }

    async avg(studentName?: string): Promise<number> {
        const marks: number[] = [];
        const buf = await readFile(`${this.className}.mark`);
        const str = buf.toString("utf-8");
        const lines = str.split("\n");
        for(let line of lines) {
            const lineInfo = line.split("|");
            if(lineInfo.length !== 2 || (studentName && studentName !== lineInfo[0])) {
                continue; // passe à l'itération suivante
            }
            marks.push(parseInt(lineInfo[1]));
        }
        let sum = 0;
        for(let mark of marks) {
            sum += mark;
        }
        return sum / marks.length;
    }

}