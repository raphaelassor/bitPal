import { Injectable } from "@angular/core"


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    query(entityType) {
        var entities = JSON.parse(localStorage.getItem(entityType)) || null
        return Promise.resolve(entities)
    }


    get(entityType, entityId) {
        return this.query(entityType)
            .then(entities => entities.find(entity => entity._id === entityId))
    }
    post(entityType, newEntity) {
        newEntity._id = this._makeId()
        return this.query(entityType)
            .then(entities => {
                entities.push(newEntity)
                this.save(entityType, entities)
                return newEntity
            })
    }



    put(entityType, updatedEntity) {
        return this.query(entityType)
            .then(entities => {
                const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
                entities.splice(idx, 1, updatedEntity)
                this.save(entityType, entities)
                return updatedEntity
            })
    }

    remove(entityType, entityId) {
        return this.query(entityType)
            .then(entities => {
                const idx = entities.findIndex(entity => entity._id === entityId)
                entities.splice(idx, 1)
                this.save(entityType, entities)
            })
    }


    save(entityType, entities) {
        localStorage.setItem(entityType, JSON.stringify(entities))
    }

     private _makeId(length = 5) {
        var text = ''
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return text
    }
}