import { User } from "../user/User.model";

export class ThreadReply {
    private _afzender: string;
	private _id: string;
	private _inhoud: string;

	constructor(afzender:string, inhoud:string,id?:string) {
		this._afzender = afzender;
		this._id = id || "0";
		this._inhoud = inhoud;
    }

	public get afzender(): string {
		return this._afzender;
	}

	public get id(): string {
		return this._id;
	}

	public get inhoud(): string {
		return this._inhoud;
	}
    
    toJSON() {
        return {
            id:this._id,
			afzender:this._afzender,
			inhoud:this._inhoud
        }
    }
	
}