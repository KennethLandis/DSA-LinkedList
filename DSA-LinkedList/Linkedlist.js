class _Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next != null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }
    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if( currNode.next === null) {
                return null;
            }
        else {
            currNode = currNode.next
        }
    }
    return currNode
    }
    remove(item) {
        //If the list is empty
        if (!this.head) {
            return null;
        }
        // If item removed is head
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

            while ((currNode!== null) && (currNode.value !== item)) {
                previousNode = currNode;
                currNode = currNode.next;
            
            if (currNode === null) {
                console.log('Item not found');
                return;
            }
        }
        previousNode.next = currNode.next;
        }
    insertBefore(item, target) {
        if (!this.head) {
            return null;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode!== null) && (currNode.value!== target)) {
            previousNode = currNode;
            currNode = currNode.next;

            if(currNode === null) {
                console.log('item not found');
                return;
            }
        }
        previousNode.next = new _Node(item, currNode)
    }
    insertAfter(item, target) {
        if (!this.head) {
            return null;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode!== null) && (currNode.value!== target)) {
            previousNode = currNode;
            currNode = currNode.next;

            if(currNode === null) {
                console.log('item not found');
                return;
            }
        }
    currNode.next = new _Node(item, currNode.next.next)
    }
    insertAt(index, item) {
        if (!this.head) {
            return null;
        }
        let count = 0;
        let currNode = this.head
        let previousNode = this.head
        while (count < index) {
            previousNode = currNode;
            currNode = currNode.next;
            count++;
        }
        previousNode.next = new _Node(item, currNode)
    }
    display(list) {
        let results = '';
        let currentNode = list.head;
        if(!currentNode) {
            console.log('List is empty');
            return;
        }
        if (currentNode.next === null) {
            console.log(`${currentNode.value} -> null`);
            return
        }

        while (currentNode.next !== null) {
            results += `${currentNode.value} ->`;
            currentNode = currentNode.next;
        }
        results += `${currentNode.value} -> null`;
        console.log(results)
    }
    array(list) {
        let results = [];
        let currentNode = list.head;
        while (currentNode.next !== null) {
            results.push(currentNode.value);
            currentNode = currentNode.next
        }
        results.push(currentNode.value)
        console.log(results)
    }
}   


let SLL = new LinkedList();
SLL.insertFirst('Apollo')
SLL.insertLast('Boomer')
SLL.insertLast('Helo')
SLL.insertLast('Husker')
SLL.insertLast('Starbuck')

SLL.insertLast('Tauhida')
SLL.remove('Husker')
SLL.insertBefore('Athena', 'Boomer')
SLL.insertAfter('Hotdog', 'Helo')
SLL.insertAt(3, 'Kat')

SLL.display(SLL);

SLL.array(SLL)