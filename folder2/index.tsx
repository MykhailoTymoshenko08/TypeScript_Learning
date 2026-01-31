

class User {
    public name: string;
    private _credits: number = 0;
    addCredits(amount: number)  {
        this._credits += amount;
    }

    constructor(userName: string) {
        this.name = userName;
    }
    get credits(): number {
        return this._credits;
    }
}

class Library   {
    private
}