using System;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = 10;
            if (3*6 != 18 || ++num == 11)
            {
                num++;
            }
            if (12 + 2 == 14 && num++ == 12)
            {
                Console.WriteLine("12가 맞았어!");
            }
        }
    }
}
