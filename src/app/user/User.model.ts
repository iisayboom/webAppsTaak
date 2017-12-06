import { Thread } from "../Thread/thread.model";

export class User {
    private _username: string;
    private _id: string;
    private _threads:Thread[];

	constructor(username:string,threads:Thread[],id?:string) {
        this._username = username;
        this._id = id || "0";
        this._threads = threads;
    }

	public get id(): string {
		return this._id;
    }
    

	public get username(): string {
		return this._username;
    }
    

	public get threads(): Thread[] {
		return this._threads;
	}
    
    
    toJSON() {
        return {
            id:this._id,
            username: this._username,
            threads: this._threads
        }
    }
	
}