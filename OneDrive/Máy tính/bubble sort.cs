using System;

namespace ConsoleApp5
{
    class Program
    {
        // Hàm sắp xếp nổi bọt
        static void BubbleSort(int[] arr)
        {
            int n = arr.Length;
            for (int i = 0; i < n - 1; i++)
            {
                // Lặp qua các phần tử chưa được sắp xếp
                for (int j = 0; j < n - i - 1; j++)
                {
                    // Nếu phần tử hiện tại lớn hơn phần tử kế tiếp, hoán đổi
                    if (arr[j] > arr[j + 1])
                    {
                        // Hoán đổi giá trị
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }

        // Hàm in mảng
        static void PrintArray(int[] arr)
        {
            foreach (int item in arr)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();
        }

        // Hàm Main - chương trình chính
        static void Main(string[] args)
        {
            int[] numbers = { 5, 2, 9, 1, 5, 6 };

            Console.WriteLine("Mảng ban đầu:");
            PrintArray(numbers);

            BubbleSort(numbers);

            Console.WriteLine("Mảng sau khi sắp xếp:");
            PrintArray(numbers);
        }
    }
}
