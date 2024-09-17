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
    simpleQueue: `#include <stdio.h>
#include <stdlib.h>

void insert();
void pop();
void access();

int R = -1; // Rear
int F = -1; // Front
int array[100], n;

int main() {
    int choice;

    printf("\\nEnter the number of elements you want to insert: ");
    scanf("%d", &n);

    do {
        printf("\\nOperations to be performed: ");
        printf("\\n1. Insert\\n2. Pop\\n3. Show\\n4. Exit\\n");
        printf("\\nEnter your Choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                insert();
                break;
            case 2:
                pop();
                break;
            case 3:
                access();
                break;
            case 4:
                exit(0);
                break;
            default:
                printf("Invalid Request!! Try Again Please");
        }
    } while (choice != 4);
    return 0;
}

void insert() {
    int item;
    printf("\\nEnter an item to insert: ");
    scanf("%d", &item);
    if (R == n - 1) {
        printf("\\nQueue is Full\\n");
    } else {
        if (F == -1) F = 0; // Set F to 0 if it's the first element being inserted
        array[++R] = item;
        printf("\\nItem inserted: %d\\n", item);
    }
}

void pop() {
    if (F == -1 || F > R) {
        printf("\\nQueue is Empty.\\n");
    } else {
        printf("\\nItem removed: %d\\n", array[F++]);
        if (F > R) F = R = -1; // Reset queue if it becomes empty
    }
}

void access() {
    if (F == -1) {
        printf("\\nQueue is Empty.\\n");
    } else {
        printf("\\nQueue elements are: ");
        for (int i = F; i <= R; ++i) {
            printf("%d ", array[i]);
        }
        printf("\\n");
    }
}
`,
    cricularQueue: `#include <stdio.h>
#include <stdlib.h>
#define MAX  5

int rear = -1,front = -1;
int cQueue[MAX];

void insert(){
    int item;
    if((front == 0 && rear == MAX -1) || front == rear + 1){
        printf("\\nQueue is full!\\n");
        return;
    } else {
        if(front == -1){
            front = rear = 0;
        } else {
            if(rear == MAX - 1) {
                rear = 0;
            } else {
                rear++;
            }
        }
    }
    printf("\\nEnter element to be inserted: ");
    scanf("%d",&item);
    cQueue[rear] = item;
    printf("\\n%d inserted successfully!\\n", item);
}

void deletion(){
    if(front == -1){
        printf("\\nQueue is Empty!\\n");
        return;
    } else {
        printf("\\n%d deleted successfully!\\n",cQueue[front]);
        if(front == rear){
            front = rear = -1;
        } else {
            if(front == MAX - 1){
                front = 0;
            } else {
                front++;
            }
        }
    }
}

void display(){
    int rear_pos = rear, front_pos = front;
    if(front == -1){
        printf("\\nQueue is Empty!\\n");
        return;
    } else {
        printf("\\nQueue Elements: ");
        if(front_pos <= rear_pos){
            while(front_pos <= rear_pos){
                printf(" %d ",cQueue[front_pos]);
                front_pos++;
            }
        } else {
            while(front_pos < MAX){
                printf(" %d ",cQueue[front_pos]);
                front_pos++;
            }
            front_pos = 0;
            while(front_pos <= rear_pos){
                printf(" %d ",cQueue[front_pos]);
                front_pos++;
            }
        }
    }
    printf("\\n");
}

int main() {
    int choice;

    do {
        printf("\\nCircular Queue Operation: ");
        printf("\\n1. Insert\\n2. Delete\\n3. Display\\n4. Exit\\n");
        printf("\\nEnter your choice: ");
        scanf("%d", &choice);

        switch(choice) {
            case 1: insert();
                    break;
            case 2: deletion();
                    break;
            case 3: display();
                    break;
            case 4: exit(0);
                    break;
            default: 
                    printf("\\nInvalid Request!");
        } 
    } while(choice != 4);

    return 0;
}
`, 
        simpleLinkedList: `
#include <stdio.h>
#include <stdlib.h>

struct node
{
  int data;
  struct node *next;
};

struct node *head = NULL;
struct node *current = NULL;

void printList()
{
  struct node *p = head;
  printf("\\n[ ");
  while (p != NULL)
  {
    printf("%d ", p->data);
    p = p->next;
  }
  printf("]\\n");
}

void insertAtBegin(int data)
{
  struct node *lk = (struct node *)malloc(sizeof(struct node));
  if (lk == NULL)
  {
    printf("Memory allocation failed.\\n");
    return;
  }
  lk->data = data;
  lk->next = head;
  head = lk;
}

void insertAtMiddle(int insert, int data)
{
  struct node *lk = (struct node *)malloc(sizeof(struct node));
  struct node *p = head;
  int count = 1;
  if (lk == NULL)
  {
    printf("Memory allocation failed.\\n");
    return;
  }

  lk->data = data;

  if (head == NULL)
  {
    head = lk;
    lk->next = NULL;
    return;
  }

  while (p != NULL && count < insert - 1)
  {
    p = p->next;
    count++;
  }

  if (p != NULL)
  {
    lk->next = p->next;
    p->next = lk;
  }
  else
  {
    printf("Position not found to insert!");
  }
}

void insertAtEnd(int data)
{
  struct node *lk = (struct node *)malloc(sizeof(struct node));
  struct node *last = head;
  if (lk == NULL)
  {
    printf("Memory allocation failed.\\n");
    return;
  }
  lk->data = data;
  lk->next = NULL;

  if (head == NULL)
  {
    head = lk;
    return;
  }

  while (last->next != NULL)
  {
    last = last->next;
  }
  last->next = lk;
}

void deleteAtBegin()
{
  printf("Working!");
}

void deleteAtMiddle(int data)
{
  printf("Working!");
}

void deleteAtEnd()
{
  printf("Working!");
}

int searchData(int Data)
{
  struct node *p = head;
  int count = 0;
  while (p != NULL)
  {
    count++;
    if (p->data == Data)
    {
      
      return count;
    }
    p = p->next;
  }
  return 0;
}

int main()
{
  int ch;
  int Data, insert;
  int k = 0;
  do
  {
    printf("\\nLinked List Operations: ");
    printf("\\n1. Insertion at Beginning\\n2. Insertion at Middle\\n3. Insertion at End");
    printf("\\n4. Deletion at Beginning\\n5. Deletion at Middle\\n6. Deletion at End");
    printf("\\n7. Show the List\\n8. Search the Element\\n9. Exit\\n");
    printf("Enter your choice: ");
    scanf("%d", &ch);

    switch (ch)
    {
    case 1:
      printf("\\nEnter the value to insert: ");
      scanf("%d", &Data);
      insertAtBegin(Data);
      break;
    case 2:
      printf("Enter where you want to enter the value: ");
      scanf("%d", &insert);
      printf("\\nEnter the value to insert: ");
      scanf("%d", &Data);
      insertAtMiddle(insert, Data);
      break;
    case 3:
      printf("\\nEnter the value to insert: ");
      scanf("%d", &Data);
      insertAtEnd(Data);
      break;
    case 4:
      deleteAtBegin();
      break;
    case 5:
      printf("\\nEnter the value to delete: ");
      scanf("%d", &Data);
      deleteAtMiddle(Data);
      break;
    case 6:
      deleteAtEnd();
      break;
    case 7:
      printList();
      break;
    case 8:
      printf("\\nEnter the value to search: ");
      scanf("%d", &Data);
      k = searchData(Data);
      if (k > 0)
      {
        printf("\\nElement found at index %d\\n", k);
      }
      else
      {
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
