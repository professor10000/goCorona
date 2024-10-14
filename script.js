document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".lists ul li");
  const codeDisplay = document.querySelector(".codeArea .codeBox .code");
  const copyBtn = document.querySelector(".copyBtn a");

  // Define code snippets
  const codeSnippets = {
    concat: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[100], str2[100];

    printf("Enter the first string: ");
    gets(str1);

    printf("Enter the second string: ");
    gets(str2);

    strcat(str1,str2);
    printf("Concatenated string: %s", str1);

    return 0;
}
`,

    copyString: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[100], str2[100];

    printf("Enter the first string: ");
    gets(str1);

    strcpy(str2,str1);
    
    printf("Copied string: %s",str2);

    return 0;
}
`,

    lengthOfString: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[100];

    printf("Enter the first string: ");
    gets(str1);

    int length = strlen(str1);
    
    printf("Length of string: %d",length);

    return 0;
}
;`,

    compareString: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[100], str2[100];

    printf("Enter the first string: ");
    gets(str1);

    printf("Enter the second string: ");
    gets(str2);

    if(strcmp(str1,str2) == 0){
      printf("%s = %s\\n",str1,str2);
    } else {
      printf("%s != %s",str1,str2);
    }

    return 0;
}
`,

      arraySort: `#include <stdio.h>

int main() {
    int arr[100], n, i, j, temp;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    printf("Enter the elements of the array: ");
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Sorted array: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("");

    return 0;
}
`,

    largestSmallest: `#include <stdio.h>

int main() {
    int arr[100], n, i;
    int largest, smallest;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    printf("Enter the elements of the array: ");
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    largest = smallest = arr[0];

    for (i = 1; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    printf("Largest element: %\\n", largest);
    printf("Smallest element: %d\\n", smallest);

    return 0;
}
`, 
      arrayReverse: `#include <stdio.h>

int main() {
    int n;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n]; 
    printf("Enter the elements of the array:");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Original array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("/n");

    int start = 0;
    int end = n - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    // Print the reversed array
    printf("Reversed array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}
`,

      arrayFind: `#include <stdio.h>

int main() {
    int n, target, found = 0;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the elements of the array:");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the target value to search: ");
    scanf("%d", &target);

    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            printf("Target %d found at index %d", target, i);
            found = 1;
            break;
        }
    }

    if (!found) {
        printf("Target %d not found in the array.", target);
    }

    return 0;
}
`,

      bubbleSort: `#include <stdio.h>

int main() {
    int n;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Bubble Sort algorithm
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}
`,

    insertionSort: `#include <stdio.h>

int main() {
    int n;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the elements of the array:\\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Insertion Sort algorithm
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}
`,
    selectionSort: `#include <stdio.h>

int main() {
    int n;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the elements of the array:\\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Selection Sort algorithm
    for (int i = 0; i < n - 1; i++) {
        int min_index = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        // Swap the found minimum element with the first element
        if (min_index != i) {
            int temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
    }

    printf("Sorted array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}
`,
    binarySearch: `#include <stdio.h>

int main() {
    int n, target;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the elements of the array (sorted in ascending order):\\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the target value to search: ");
    scanf("%d", &target);

    int left = 0;
    int right = n - 1;
    int mid;
    int found = 0;

    while (left <= right) {
        mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            printf("Target %d found at index %d\\n", target, mid);
            found = 1;
            break;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (!found) {
        printf("Target %d not found in the array.\\n", target);
    }

    return 0;
}
`,
    linearSearch: `#include <stdio.h>

int main() {
    int n, target;
    int found = 0;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the elements of the array:\\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the target value to search: ");
    scanf("%d", &target);

    // Linear Search algorithm
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            printf("Target %d found at index %d\\n", target, i);
            found = 1;
            break;
        }
    }

    if (!found) {
        printf("Target %d not found in the array.\\n", target);
    }

    return 0;
}
`,
    simpleStack: `#include <stdio.h>
#include <stdlib.h>

int TOP = -1;
int array[100];
int n, i, item;

void push();
void pop();
void peep();

int main() {
    int choice;
    printf("\\nEnter how many elements you want to insert: ");
    scanf("%d", &n);

    do {
        printf("\\nEnter an operation you want to do: ");
        printf("\\n1. Push\\n2. Pop\\n3. Peep\\n4. Exit\\n");
        printf("\\nEnter your choice: ");
        scanf("%d", &choice);

        switch(choice) {
            case 1: push();
                    break;
            case 2: pop();
                    break;
            case 3: peep();
                    break;
            case 4: exit(0);
                    break;
            default: 
                    printf("\\nInvalid Request!");
        } 
    } while(choice != 4);

    return 0;
}

void push() {
    if(TOP == (n - 1)) {
        printf("\\nStack Overflow");
    } else {
        printf("Enter a number to Insert: ");
        TOP = TOP + 1;
        scanf("%d", &item);
        array[TOP] = item;
    }
}

void pop() {
    if(TOP <= -1) {
        printf("\\nStack Underflow");
    } else {
        TOP--;
    }
}

void peep() {
    if(TOP <= -1) {
        printf("\\nStack Underflow");
    } else {
        printf("\\nStack: ");
        for(i = TOP; i >= 0; i--) {
            printf("%d ", array[i]);
        }
    }
}
`,
simpleQueue: `
#include<stdio.h>
int queue[5];
int i,n;
int front=-1,rear=-1;
void insert();
void deleted();
void display();
int main()
{
    int i, ch;
    printf("Enter the size:");
    scanf("%d",&n);
    do
    {
	printf("\\nEnter your choice:\\n 1.INSERT\\n2.DELETE\\n3.DISPLAY\\n0.EXIT\\n");
	scanf("%d",&ch);
	switch(ch)
	{
	    case 1:
		insert();
		break;
	    case 2:
		deleted();
		break;
	    case 3:
		display();
		break;
	    default:
		printf("enter valid option...");
		break;
	}
    }while(ch!=0);
    return 0;

}
void insert()
{
    int item;
    if(rear>=n-1)
    {
	printf("queue is overflow");
    }
    else
    {
	printf("Enter element to be inserted");
	scanf("%d",&item);
	rear=rear+1;
	queue[rear]=item;
	if(front==-1)
	{
	    front=0;
	}
	printf("Insertion done... & item inserted=%d",item);
    }
}
void deleted()
{
    int item;
    if(front==-1)
    {
	printf("queue is underflow");
    }
    else
    {
	printf("Item deleted...%d",queue[front]);
	if(front==rear)
	{
	    front=-1;
	    rear=-1;
	}
	else
	{
	    front=front+1;
	}
    }
}
void display()
{
    int i;
     if(front==-1)
    {
	printf("queue is empty");
    }
    else
    {
	for(i=front;i<=rear;i++)
	{
	    printf("%d\\n",queue[i]);
	}
    }
}
`,

circularQueue: `#include<stdio.h>
# define MAX 5
int cqueue_arr[MAX];
int front = -1;
int rear = -1;
void insert()
{
    int item;
	if((front == 0 && rear == MAX-1) || (front == rear+1))
	{
		printf("\\n Queue Overflow ");
	    return;
	}
    else{
    
	if(front == -1)
	{
	front = 0;
	rear = 0;
	}
	else
	{
		if(rear == MAX-1)
		rear = 0;
		else
		rear = rear+1;
	}
	printf("\\n Enter element to be inserted \\n");
	scanf("%d", &item);
	cqueue_arr[rear] = item ;
	printf("\\n Element inserted successfully \\n");
    }
}
void deletion()
{
	if(front == -1)
	{
		printf("Queue Underflown");
		return ;
	}
	printf("\\n Element deleted from queue is : %dn",cqueue_arr[front]);
	if(front == rear)
	{
		front = -1;
		rear=-1;
	}
	else
	{
		if(front == MAX-1)
		front = 0;
		else
		front = front+1;
	}
}
void display()
{
	int front_pos = front,rear_pos = rear;
	if(front == -1)
	{
		printf("\\n Queue is empty");
		return;
	}
	printf("\\n Queue elements :");
	if( front_pos <= rear_pos )
	while(front_pos <= rear_pos)
	{
		printf("%d ",cqueue_arr[front_pos]);
		front_pos++;
	}
	else
	{
	while(front_pos <= MAX-1)
	{
		printf("%d ",cqueue_arr[front_pos]);
		front_pos++;
	}
	front_pos = 0;
	while(front_pos <= rear_pos)
	{
		printf("%d ",cqueue_arr[front_pos]);
		front_pos++;
	}
	}
	printf("\\n");
}
int main()
{
	int choice,item;
	
	do
	{
	printf("\\n 1.Insert");
	printf("\\n 2.Delete");
	printf("\\n 3.Display");
	printf("\\n 4.Quit");
	printf("\\n Enter your choice : ");
	scanf("%d",&choice);
	switch(choice)
	{
	case 1 :
	insert();
	break;
	case 2 :
	deletion();
	break;
	case 3:
	display();
	break;
	case 4:
	break;
	default:
	printf("\\n Wrong choicen");
	}
	}while(choice!=4);
return 0;
}
`,
	  
simpleLinkedList: `#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *next;
};

struct node *head = NULL;

void printList() {
    struct node *p = head;
    printf("\\n[ ");
    while (p != NULL) {
        printf("%d ", p->data);
        p = p->next;
    }
    printf("]\\n");
}

void insertAtBegin(int data) {
    struct node *newNode = (struct node*) malloc(sizeof(struct node));
    if (newNode == NULL) {
        printf("Memory allocation failed.\\n");
        return;
    }
    newNode->data = data;
    newNode->next = head;
    head = newNode;
}

void insertAtMiddle(int data) {
    struct node *newNode = (struct node*) malloc(sizeof(struct node));
    if (newNode == NULL) {
        printf("Memory allocation failed.\\n");
        return;
    }
    newNode->data = data;

    // If list is empty or we insert at the beginning
    if (head == NULL || head->data >= data) {
        newNode->next = head;
        head = newNode;
        return;
    }

    // Locate the node after which the new node is to be inserted
    struct node *current = head;
    while (current->next != NULL && current->next->data < data) {
        current = current->next;
    }
    
    newNode->next = current->next;
    current->next = newNode;
}

void insertAtEnd(int data) {
    struct node *newNode = (struct node*) malloc(sizeof(struct node));
    struct node *last = head;
    if (newNode == NULL) {
        printf("Memory allocation failed.\\n");
        return;
    }
    newNode->data = data;
    newNode->next = NULL;
    
    if (head == NULL) {
        head = newNode;
        return;
    }

    while (last->next != NULL) {
        last = last->next;
    }
    last->next = newNode;
}

void deleteAtBegin() {
    if (head == NULL) {
        printf("List is empty, nothing to delete.\\n");
        return;
    }
    struct node *temp = head;
    head = head->next;
    free(temp);
    printf("Deleted the first element.\\n");
}

void deleteAtMiddle(int data) {
    if (head == NULL) {
        printf("List is empty, nothing to delete.\\n");
        return;
    }

    struct node *current = head;
    struct node *prev = NULL;

    while (current != NULL && current->data != data) {
        prev = current;
        current = current->next;
    }

    // If the data was not found
    if (current == NULL) {
        printf("Element %d not found in the list.\\n", data);
        return;
    }

    // Unlink the node from linked list
    if (prev == NULL) {
        head = current->next; // The node to delete is the head
    } else {
        prev->next = current->next;
    }
    
    free(current);
    printf("Deleted the element %d.\\n", data);
}

void deleteAtEnd() {
    if (head == NULL) {
        printf("List is empty, nothing to delete.\\n");
        return;
    }
    
    struct node *current = head;
    struct node *prev = NULL;

    // If the list contains only one node
    if (current->next == NULL) {
        free(current);
        head = NULL;
        printf("Deleted the last element.\\n");
        return;
    }

    // Traverse to the last node
    while (current->next != NULL) {
        prev = current;
        current = current->next;
    }

    // Unlink the last node
    prev->next = NULL;
    free(current);
    printf("Deleted the last element.\\n");
}

int searchData(int data) {
    struct node *p = head;
    while (p != NULL) {
        if (p->data == data) {
            return 1;
        }
        p = p->next;
    }
    return 0;
}

int main() {
    int ch;
    int data;
    int k = 0;
    do {
        printf("\\nLinked List Operations: ");
        printf("\\n1. Insertion at Beginning\\n2. Insertion at Middle\\n3. Insertion at End");
        printf("\\n4. Deletion at Beginning\\n5. Deletion at Middle\\n6. Deletion at End");
        printf("\\n7. Show the List\\n8. Search the Element\\n9. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                printf("\\nEnter the value to insert: ");
                scanf("%d", &data);
                insertAtBegin(data);
                break;
            case 2:
                printf("\\nEnter the value to insert: ");
                scanf("%d", &data);
                insertAtMiddle(data);
                break;
            case 3:
                printf("\\nEnter the value to insert: ");
                scanf("%d", &data);
                insertAtEnd(data);
                break;
            case 4:
                deleteAtBegin();
                break;
            case 5:
                printf("\\nEnter the value to delete: ");
                scanf("%d", &data);
                deleteAtMiddle(data);
                break;
            case 6:
                deleteAtEnd();
                break;
            case 7:
                printList();
                break;
            case 8:
                printf("\\nEnter the value to search: ");
                scanf("%d", &data);
                k = searchData(data);
                if (k == 1) {
                    printf("\\nElement found!\\n");
                } else {
                    printf("\\nElement Not found!\\n");
                }
                break;
            case 9:
                printf("\\nExiting......\\n");
                break;
            default:
                printf("Invalid Request made! Try again.\\n");
        }
    } while (ch != 9);

    return 0;
}
`,
    infixToPostfix: `#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#define MAX 100

char stack[MAX];
int top = -1;

void push(char c) {
	if(top == MAX - 1) {
		printf("Stack Overflow\\n");
		exit(1);
	}
	stack[++top] = c;
}

char pop() {
	if (top == -1) {
		printf("Stack Underflow\\n");
		exit(1);
	}
	return stack[top--];
}

char peek() {
	if(top == -1) {
		return -1;
	}
	return stack[top];
}

int precedence(char op) {
	switch (op) {
		case '+':
		case '-':
			return 1;
		case '*':
		case '/':
			return 2;
		case '^':
			return 3;
		default:
			return 0;
	}
}

int is_operator(char c) {
	return(c == '+' || c == '-' || c == '/' || c == '*' || c == '^');
}

void infix_to_postfix(char *exp) {
	int i = 0;
	while (exp[i] != '\\0') {
		char c = exp[i];
		
		if(isalnum(c)) {
			printf("%c", c);
		} else if (c == '(') {
			push(c);
		} else if (c == ')') {
			while (peek() != '(') {
			printf("%c",pop());
			}
			pop();
		} else if (is_operator(c)) {
			while (top != -1 && precedence(peek()) >= precedence(c)) {
				printf("%c", pop());
			}
			push(c);
		} 
		i++;
	}
	
	while(top != -1) {
		printf("%c", pop());
	}
}

int main() {
	char exp[MAX];
	
	printf("\\nEnter infix expression: ");
	scanf("%s", exp);
	
	printf("Postfix expression: ");
	infix_to_postfix(exp);
	
	return 0;
}
`,
  };

  // Function to display code
  const displayCode = (code) => {
    if (code) {
      codeDisplay.innerHTML = `<pre><code class="language-c">${Prism.highlight(
        code,
        Prism.languages.c,
        "c"
      )}</code></pre>`;
    } else {
      codeDisplay.innerHTML = `<pre><code>No code available for this selection.</code></pre>`;
    }
  };

  // Add event listeners to list items
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      const codeKey = item.getAttribute("data-code-key");
      displayCode(codeSnippets[codeKey]);
    });
  });

  // Copy to clipboard functionality
  copyBtn.addEventListener("click", () => {
    const codeText = codeDisplay.innerText;
    navigator.clipboard
      .writeText(codeText)
      .then(() => {
        copyBtn.textContent = "Copied!";
        setInterval(function () {
          copyBtn.textContent = "Copy";
        }, 2000);
      })
      .catch((err) => {
        alert("Failed to copy code: " + err);
      });
  });
});
