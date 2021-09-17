using System;

namespace _3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("상우네 Switch/Case/Default계산기");
            Console.WriteLine("첫번째 정수형 숫자를 입력해주십시오 좆같은거 입력하면 예외처리하게 빠진답니다.");
            int number1 = int.Parse(Console.ReadLine());
            Console.WriteLine("두번째 숫자를 입력해주십시오  좆같은거 입력하면 예외처리하게 빠진답니다.");
            int number2 = int.Parse(Console.ReadLine());
            Console.WriteLine("원하는 연산을 + - * / 입력해주십시오 좆같은거 입력하면 예외처리하게 빠진답니다.");
            char op = char.Parse(Console.ReadLine());
            switch(op)
            {
                case '+':
                    Console.WriteLine($"{number1}+{number2} = {number1 + number2}");
                    break;
                case '-':
                    Console.WriteLine($"{number1}-{number2} = {number1 - number2}");
                    break;
                case '*':
                    Console.WriteLine($"{number1}*{number2} = {number1 * number2}");
                    break;
                case '/':
                    Console.WriteLine($"{number1}/{number2}  한 결과 몫은 {number1 / number2} 나머지는 {number1 % number2}");
                    break;
                default:
                    Console.WriteLine("븅신아 연산자 똑바로 입력하라고");
                    break;
            }
        }
    }
}
