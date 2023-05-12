// Start with your code from last challenge.
class Node {
    constructor(value, next_node = null){
        this.value = value;
        this.next_node = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    add(number){
        let newnode = new Node(number);
        if(!this.head){
            this.head = newnode;
            return;
        }
        let tail = this.head;
        while(tail.next_node != null){
            tail = tail.next_node;
        }
        tail.next_node = newnode;
        return this.head;
    }

    get(index){
        let temp = this.head;
        while(index >= 0){
            if(index === 0){
                return temp.value;
            }
            else{
                temp = temp.next_node;
                index--;
            }
        }
    }

    addAt(index,value){
        let temp = this.head;
        let newnode = new Node(value);
        if(index === 0){
            this.head = newnode;
            this.head.next_node = temp;
            return;
        }
        while(index > 1){
            temp = temp.next_node;
            index--;
        }
        newnode.next_node = temp.next_node;
        temp.next_node = newnode;
        return this.head;
    }

    remove(index){
        let temp = this.head;

        if (index === 0){

            this.head = this.head.next_node;
        }

        while(index > 1)
        {
            temp = temp.next_node;
            index--;
        }
        temp.next_node = temp.next_node.next_node;
        return this.head
    }
}

const list = new LinkedList()
// 13 -> 3 -> 11 -> 5
list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)

list.remove(1)
// => 11

// => 5

module.exports = LinkedList
