class LStorage {
    #key = 'data'
    #currentId = 1

    #getItemIndexById (id) {
        const data = this.getItems()
        return data.findIndex(({id: itemId}) => {
            return id === itemId
        })
    }

    #changeItemField (id, field, value) {
        const data = this.getItems()
        const index = this.#getItemIndexById(id)
        const currentEl = data[index]
        currentEl[field] = value
        localStorage.setItem(this.#key, JSON.stringify(data))
        return currentEl
    }

    constructor() {
        const savedData = this.getItems()
        if (!savedData.length) return
        this.#currentId = ++savedData.at(-1).id
    }

    getItems () {
        const data = JSON.parse(localStorage.getItem(this.#key))
        return data ? data : []
    }

    saveItem (item) {
        const data = this.getItems()
        data.push({
            ...item,
            id: this.#currentId,
        })
        this.#currentId += 1

        localStorage.setItem(this.#key, JSON.stringify(data))

        return this.getItems().at(-1)
    }

    removeItem (id) {
        const data = this.getItems()
        const index = this.#getItemIndexById(id)

        const removedItem = data.splice(index, 1)[0]
        localStorage.setItem(this.#key, JSON.stringify(data))

        return removedItem
    }

    changeItemStatus ({id, status}) {
        this.#changeItemField (id, 'status', status)
    }
}

const storage = new LStorage();

export default storage;