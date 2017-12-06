import { ThreadReply } from './ThreadReply.model';
export class Thread {
    private _titel: string;
    private _afzender: string;
	private _id: string;
	private _inhoud: string;
	private _replies:ThreadReply[];

	constructor(titel:string, afzender:string, inhoud:string,id?:string, replies?:ThreadReply[]) {
        this._titel = titel;
		this._afzender = afzender;
		this._id = id || "0";
		this._inhoud = inhoud;
		this._replies = replies;
    }
    

	public get titel(): string {
		return this._titel;
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

	public get replies(): ThreadReply[] {
		return this._replies;
	}
	
    
    toJSON() {
        return {
            id:this._id,
            titel:this._titel,
			afzender:this._afzender,
			inhoud:this._inhoud,
			replies: this._replies
        }
    }
	
}