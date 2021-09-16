using System;

namespace _1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("상우네 계산기");
            Console.WriteLine("첫 번째 숫자 입력:");
            int number1 = int.Parse(Console.ReadLine());
            Console.WriteLine("두 번째 숫자 입력:");
            int number2 = int.Parse(Console.ReadLine());
            int number3 = 0;
            while (number3 == 0) {
                Console.WriteLine("원하는 연산자 입력 + - * / :");
                string op = Console.ReadLine();
                if (op == "+")
                {
                    Console.WriteLine($"{number1} {op} {number2} = {number1 + number2}");
                    break;
                }
                if (op == "-")
                {
                    Console.WriteLine($"{number1} {op} {number2} = {number1 - number2}");
                    break;
                }
                if (op == "*")
                {
                    Console.WriteLine($"{number1} {op} {number2} = {number1 * number2}");
                    break;
                }
                if (op == "/")
                {
                    Console.WriteLine($"{number1} {op} {number2} = {number1 / number2}");
                    break;
                }

                else
                {
                    Console.WriteLine($"정확한 연산자를 입력해주십시오.");
                    continue;
                }
                
            };
        }
    }
}
