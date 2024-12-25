/* Test driver for a linked list class 
 * Author: Briana Morrison
*/

import java.util.Scanner;

public class TestLL {
    public static void main(String[] args){
        LinkList<String> myList = new LinkList<>(10);
        boolean done = false;
        Scanner scan = new Scanner(System.in);

        do {
            // menu to process Task list
            printMenu();
            System.out.print("Enter choice:  ");
            int choice = scan.nextInt();
            String trash = scan.nextLine();
            switch(choice) {
                case 1: // print(list);
                    System.out.println(myList);
                    break;
                case 2: //insert value at position
                    System.out.print("Enter value to be inserted:  ");
                    String n = scan.nextLine();
                    System.out.print("Enter insertion position:  ");
                    int p = scan.nextInt();
                    trash = scan.nextLine();
                    boolean success = myList.insertAt(p, n);
                    if (success)
                        System.out.println("Value " + n + " was inserted");
                    else
                        System.out.println("Value was unable to be inserted");
                    break;
                case 3: // remove value at position
                    System.out.print("Enter position to be deleted:  ");
                    p = scan.nextInt();
                    trash = scan.nextLine();
                    success = myList.delete(p);
                    if (success)
                        System.out.println("Value was deleted");
                    else
                        System.out.println("Value was unable to be deleted");
                    break;
                case 4: // find a value
                    System.out.print("Enter value to find:  ");
                    String target = scan.nextLine();
                    int loc = myList.find(target);
                    if (loc != -1)
                        System.out.println("Value found at position " + loc);
                    else
                        System.out.println("Value not found!");
                    break;
                case 5: // size
                    System.out.println("The size of the list is " + myList.size());
                    break;
                case 6:
                    System.out.println(myList.debugPrint());
                    break;
                case 0:  System.out.println("Closing tester.");  done = true; break;
                default:  System.out.println("Error, invalid selection");
            }
        } while (!done);
    }

    public static void printMenu() {
        System.out.println("1. Print the linked list");
        System.out.println("2. Insert a value");
        System.out.println("3. Remove a value");
        System.out.println("4. Find a value");
        System.out.println("5. Size of linked list");
        System.out.println("6. Debug print of array");
        System.out.println("0. Quit");
    }
}
