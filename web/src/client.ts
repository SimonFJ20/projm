// @ts-ignore: unimpl
import { fakeId } from "./id.ts";
import { Id } from "./models.ts";

export class Client {
    async editTask() {
    }
    async addTask(): Promise<Id> {
        return fakeId();
    }
    async removeTask() {
    }
}
