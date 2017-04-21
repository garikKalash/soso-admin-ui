/**
 * Created by Home on 3/4/2017.
 */
export class Partner{
    private _id: number;
    private _partner_name: string;
    private _telephone: string;
    private _serviceName: string;
    private _partner_username: string;
    private _partner_password: string;

    constructor(id: number, partner_number: string, telephone: string, serviceName: string, partner_username: string, partner_password: string) {
        this._id = id;
        this._partner_name = partner_number;
        this._telephone = telephone;
        this._serviceName = serviceName;
        this._partner_username = partner_username;
        this._partner_password = partner_password;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get partner_name(): string {
        return this._partner_name;
    }

    set partner_name(value: string) {
        this._partner_name = value;
    }

    get telephone(): string {
        return this._telephone;
    }

    set telephone(value: string) {
        this._telephone = value;
    }

    get serviceName(): string {
        return this._serviceName;
    }

    set serviceName(value: string) {
        this._serviceName = value;
    }

    get partner_username(): string {
        return this._partner_username;
    }

    set partner_username(value: string) {
        this._partner_username = value;
    }

    get partner_password(): string {
        return this._partner_password;
    }
    set partner_password(value: string) {
        this._partner_password = value;
    }
}
