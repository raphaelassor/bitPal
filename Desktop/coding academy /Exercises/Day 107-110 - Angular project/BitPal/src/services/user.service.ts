import { Injectable } from "@angular/core";
import { Move, User } from "src/models/user.model";
import { StorageService } from "./asyncStorageService";
import { Observable, BehaviorSubject } from 'rxjs';

const gUsers: User[] = [{
    name: 'popi',
    username: 'pop123',
    password: 'p101',
    coins: 100,
    moves: [{
        toId: '5a56640269f443a5d64b32ca',
        toName: 'Ochoa Hyde',
        at: Date.now(),
        amount: 58
    },
    {
        toId: '5a56640269f443a5d64b32ca',
        toName: 'Ochoa Hyde',
        at: Date.now(),
        amount: 58
    },
    {
        toId: '5a56640269f443a5d64b32ca',
        toName: 'Ochoa Hyde',
        at: Date.now(),
        amount: 58
    },
    {
        toId: '5a56640269f443a5d64b32ca',
        toName: 'Ochoa Hyde',
        at: Date.now(),
        amount: 58
    },
    {
        toId: '5a56640269f443a5d64b32ca',
        toName: 'Ochoa Hyde',
        at: Date.now(),
        amount: 58
    },

    ]
}]

@Injectable({
    providedIn: 'root',
})
export class UserService {

    private _user$ = new BehaviorSubject<User>(null)
    public user$ = this._user$.asObservable()
    constructor(private storageService: StorageService) { }

    

  async  getUser() {
        const user = await this.storageService.query('loggedInUser')
        this._user$.next(user)
        return user
    }

    login(username, password) {
        return new Promise((resolve, reject) => {
            const user = gUsers.find(user => user.username === username)
            if (!user) reject('No User Found!')
            if (user.password !== password) reject('wrong password! please try agian')
            this.storageService.save('loggedInUser',user)
            this._user$.next(user)
            resolve(user)
        })
    }

    signup(user) {
        const { name, password, username } = user
        const userToAdd = {
            name,
            password,
            username,
            moves: [],
            coins: 100,
        }
        this.storageService.save('loggedInUser',userToAdd)
        //@ts-ignore
        gUsers.push(userToAdd)
        this._user$.next(userToAdd)
        return userToAdd
    }
    async addMove(contact, amount) {
        const move: Move = {
            toId: contact._id,
            toName: contact.name,
            at: Date.now(),
            amount
        }
        console.log('in aff move')
        const user = await this.getUser()
        user.coins -= move.amount
        user.moves.unshift(move)
        this._user$.next(user)
        console.log(this.user$)
        await this.storageService.save('loggedInUser',user )
    }
    async isLoggedIn(){
        const user = await this.getUser()
        if(!user) return false 
        return true
    }
    private _getEmptyMove() {
        return {
            toId: '',
            toName: '',
            at: null,
            amount: null
        }
    }
    private _getEmptyUser() {
        return {
            username: '',
            name: '',
            password: '',
            coins: null,
            moves: []
        }
    }
   
}