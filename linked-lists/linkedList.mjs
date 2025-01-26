export class LinkedList {
    constructor() {
        this.first = null
    }

    append(value) {
        const newNode = new Node(value)
        if(!this.first) {
            this.first = newNode
        } else {
            let current = this.first
            while(current.nextNode) {
                current = current.nextNode
            }
            current.nextNode = newNode
        }   
    }

    prepend(value) {
        const newNode = new Node(value)
        const current = this.first
        this.first = newNode
        this.first.nextNode = current
    }

    size() {
        let current = this.first
        let size = 1
        while(current.nextNode) {
            current = current.nextNode
            size++
        }

        return size
    }

    head() {
        const head = this.first
        return head
    }

    tail() {
        let current = this.first
        while(current.nextNode) {
            current = current.nextNode
        }
        return current
    }

    at(index) {
        let current = this.first
        for(let i=0;i<index;i++) {
            current = current.nextNode
        }
        return current
    }

    pop() {
        let current = this.first
        for(let i=0;i<this.size() - 2;i++) {
            current = current.nextNode
        }
        current.nextNode = null
    }

    contains(value) {
        let current = this.first
        let contains = false
        while(current.nextNode) {
            if(current.value === value) {
                contains = true
            }
            current = current.nextNode
        }

        if(current.value === value) {
            contains = true
        }
        return contains
    }

    find(value) {
        let valueIndex = null
        let currentIndex = 0
        let current = this.first

        while(current.nextNode) {
            if(current.value === value) {
                valueIndex = currentIndex
            }

            current = current.nextNode
            currentIndex++
        }

        if(current.value === value) {
            valueIndex = currentIndex
        }

        return valueIndex
    }

    toString() {
        const format = value => {
            return `( ${value} ) -> `
        }
        let result = ""
        let current = this.first
        while(current.nextNode) {
            result = result.concat(format(current.value))
            current = current.nextNode
        }
        result = result.concat(format(current.value)).concat("null")
        return result
    }

    insertAt(value, index) {
        const newNode = new Node(value)
        const current = this.at(index)
        newNode.nextNode = current.nextNode
        current.nextNode = newNode
    }

    removeAt(index) {
        const parent = this.at(index - 1)
        parent.nextNode = this.at(index).nextNode
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value,
        this.nextNode = nextNode
    }
}