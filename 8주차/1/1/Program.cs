using System;

namespace _1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("1부터 n까지의 정수의 합 구하~기");
            Console.WriteLine("원하는 n 값을 입력해 주십시오");
            int number = int.Parse(Console.ReadLine());
            int result = 0;
            for (int i = 0; i < number; ++i)
            {
                Console.WriteLine($"{result}+{i} = {result + i + 1}");
                result += i+1;
                if(i+1 == number)
                {
                    Console.WriteLine($"계산 끝, 최총 SUM 값 {result}");
                }
            }
        }
    }
}
