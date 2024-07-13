class LStorage {
    #key = 'data'
    #currentId = 1

    constructor() {
        const savedData = this.getArticles()
        if (!savedData.length) return
        this.#currentId = ++savedData.at(-1).id
    }

    getArticles () {
        const data = JSON.parse(localStorage.getItem(this.#key))
        return data ? data : []
    }

    saveArticle (article) {
        const data = this.getArticles()
        data.push({
            ...article,
            id: this.#currentId,
        })
        this.#currentId += 1

        localStorage.setItem(this.#key, JSON.stringify(data))

        return this.getArticles().at(-1)
    }

    getArticleById(id) {
        const data = this.getArticles();

        return data.find(({id: articleId}) => {
            return Number(id) === articleId
        });
    }
}

const storage = new LStorage();

export default storage;